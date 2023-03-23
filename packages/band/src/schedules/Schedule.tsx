import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    createScales,
    AccessorFunction,
    BandAxisScale,
    getAccessor,
    useContainer,
    getIndexes,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
    ContinuousAxisScale,
    SizeSpec,
    NumericPositionSpec,
    defaultContainerProps,
} from '@chsk/core'
import {
    ScheduleDataItem,
    SchedulePreparedDataItem,
    ScheduleProcessedDataItem,
    ScheduleProps,
} from './types'
import { SchedulePreparedDataProvider } from './context'
import { getScaleProps, getInternalWidthAndGap } from '../bars/utils'

// turn raw data into interval objects with start and end boundaries
const processData = (
    data: Array<ScheduleDataItem>,
    accessors: [AccessorFunction<unknown>, AccessorFunction<unknown>],
    keyAccessor: AccessorFunction<unknown>,
    keys: string[]
): Array<ScheduleProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const summaries = seriesData.data
            .map((itemData: Record<string, unknown>) => {
                const key = String(keyAccessor(itemData))
                return {
                    start: Number(accessors[0](itemData)),
                    end: Number(accessors[1](itemData)),
                    key,
                }
            })
            .filter(item => keys.indexOf(item.key) >= 0)
        return {
            id: seriesData.id,
            index,
            data: summaries,
            domain: summaries.map((item: { start: number; end: number }) => [item.start, item.end]),
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<ScheduleProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: ContinuousAxisScale,
    horizontal: boolean,
    width: number,
    offset: number,
    gap: number
): Array<SchedulePreparedDataItem> => {
    return data.map(seriesData => {
        let bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2 + offset
        const summaries = seriesData.data.map(summary => {
            bandStart += width + gap
            const start = valueScale(summary.start)
            const end = valueScale(summary.end)
            const size: SizeSpec = horizontal ? [end - start, width] : [width, end - start]
            const position: NumericPositionSpec = horizontal
                ? [start, bandStart - width - gap]
                : [bandStart - width - gap, start]
            return {
                ...summary,
                bandStart: bandStart - width - gap,
                bandWidth: width,
                size,
                position,
            }
        })
        return {
            id: seriesData.id,
            index: seriesData.index,
            data: summaries,
        }
    })
}

export const Schedule = ({
    container = defaultContainerProps,
    data,
    keys,
    intervalStart = 'start',
    intervalEnd = 'end',
    intervalKey = 'key',
    horizontal = true,
    autoRescale = true,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    children,
    ...props
}: ScheduleProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const { disabled } = useDisabledKeys(keys)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const accessors: [AccessorFunction<unknown>, AccessorFunction<unknown>] = useMemo(
        () => [getAccessor(intervalStart), getAccessor(intervalEnd)],
        [intervalStart, intervalEnd, intervalKey]
    )
    const keyAccessor = useMemo(() => getAccessor(intervalKey), [intervalKey])
    const processedData = useMemo(
        () => processData(data, accessors, keyAccessor, keys),
        [data, accessors, keyAccessor, keys]
    )

    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData.map(d => d.id),
        processedData.map(d => d.domain),
        scaleIndex,
        scaleValue,
        innerSize,
        horizontal,
        autoRescale ? disabled : Array(keys.length).fill(false)
    )
    const scaleX = horizontal ? scalePropsValue : scalePropsIndex
    const scaleY = horizontal ? scalePropsIndex : scalePropsValue
    const scaleColorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical, keys)
    const scales = createScales(scaleX, scaleY, scaleColorProps)
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal
        ? (scales.x as ContinuousAxisScale)
        : (scales.y as ContinuousAxisScale)

    // compute coordinates for boxes
    const [boxWidth, boxOffset, boxGap] = getInternalWidthAndGap(indexScale, keys, 0, 'layered')
    const preparedData = useMemo(
        () =>
            prepareData(
                processedData,
                indexScale,
                valueScale,
                horizontal,
                boxWidth,
                boxOffset,
                boxGap
            ),
        [processedData, indexScale, valueScale, horizontal, boxWidth, boxOffset, boxGap]
    )

    return (
        <BaseView
            variant={'schedule'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
            {...props}
        >
            <SchedulePreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={keys}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </SchedulePreparedDataProvider>
        </BaseView>
    )
}
