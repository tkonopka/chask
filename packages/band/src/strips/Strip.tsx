import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    AccessorFunction,
    BandAxisScale,
    getAccessor,
    LinearAxisScale,
    useContainer,
    getIndexes,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
    interval,
    defaultContainerProps,
    useCreateScales,
} from '@chsk/core'
import {
    StripDataItem,
    StripPreparedDataItem,
    StripProcessedDataItem,
    StripProps,
    JitterVariant,
} from './types'
import { StripPreparedDataProvider } from './context'
import { getInternalWidthAndGap, getScaleProps } from '../bars/utils'
import { getStripInternalOrder } from './utils'

// turn raw data into a minimal array-based format
const processData = (
    data: Array<StripDataItem>,
    accessors: Array<AccessorFunction<unknown>>,
    valueSize: number,
    jitter: JitterVariant
): Array<StripProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const summaries = accessors.map(f => {
            const raw = f(seriesData)
            if (!raw) return undefined
            if (!Array.isArray(raw)) return undefined
            return {
                value: raw as number[],
                internal: getStripInternalOrder(jitter, raw as number[]),
                valueSize: Array(raw.length).fill(valueSize),
            }
        })
        return {
            id: seriesData.id,
            index,
            data: summaries,
            domain: summaries.map(summary => (summary ? interval(summary?.value) : undefined)),
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<StripProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    width: number,
    offset: number,
    gap: number
): Array<StripPreparedDataItem> => {
    return data.map(seriesData => {
        let bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2 + offset
        const summaries = seriesData.data.map(summary => {
            bandStart += width + gap
            if (!summary) return undefined
            const n = summary.value.length
            const internalInterval = n <= 1 ? width : width / (summary.value.length - 1)
            const internalStart = bandStart - width - gap + (n <= 1 ? width / 2 : 0)
            return {
                value: summary.value.map(v => valueScale(v)),
                internal: summary.internal.map(v => internalStart + v * internalInterval),
                valueSize: summary.valueSize.map(v => v),
                bandStart: bandStart - width - gap,
                bandWidth: width,
            }
        })
        return {
            id: seriesData.id,
            index: seriesData.index,
            data: summaries,
        }
    })
}

export const Strip = ({
    container = defaultContainerProps,
    variant = 'grouped',
    data,
    keys,
    jitter = 'none',
    valueSize = 3,
    horizontal = false,
    autoRescale = true,
    paddingInternal = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    children,
    ...props
}: StripProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const { disabled } = useDisabledKeys(keys)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () => processData(data, keyAccessors, valueSize, jitter),
        [data, keyAccessors, valueSize, jitter]
    )

    const { index: indexProps, value: valueProps } = getScaleProps(
        processedData.map(d => d.id),
        processedData.map(d => d.domain),
        scaleIndex,
        scaleValue,
        innerSize,
        horizontal,
        autoRescale ? disabled : Array(keys.length).fill(false)
    )
    const xProps = horizontal ? valueProps : indexProps
    const yProps = horizontal ? indexProps : valueProps
    const colorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical, keys)
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })
    const scales = scalesContextValue.scales
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const [stripWidth, stripOffset, stripGap] = getInternalWidthAndGap(
        indexScale,
        keys,
        paddingInternal,
        variant
    )
    const preparedData = useMemo(
        () =>
            prepareData(
                processedData,
                indexScale,
                valueScale,
                horizontal,
                stripWidth,
                stripOffset,
                stripGap
            ),
        [processedData, horizontal, indexScale, valueScale, stripWidth, stripOffset, stripGap]
    )

    return (
        <BaseView
            variant={'strip'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scalesContextValue={scalesContextValue}
            {...props}
        >
            <StripPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={keys}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </StripPreparedDataProvider>
        </BaseView>
    )
}
