import {
    AccessorFunction,
    addColor,
    ContinuousAxisScale,
    createAreaGenerator,
    CurveSpec,
    OriginalDataContextProps,
    getAccessor,
    isContinuousAxisScale,
    NumericPositionIntervalSpec,
    useOriginalData,
    useScales,
} from '@chask/core'
import { ScatterDataContextProps, ScatterIntervalProps } from './types'
import { useScatterPreparedData } from './context'
import { useMemo } from 'react'

const getScatterIntervalD = ({
    seriesIndex,
    originalData,
    preparedData,
    scaleY,
    lower,
    upper,
    curve,
}: {
    seriesIndex: number
    originalData: OriginalDataContextProps
    preparedData: ScatterDataContextProps
    scaleY: ContinuousAxisScale
    lower: string | AccessorFunction<number>
    upper: string | AccessorFunction<number>
    curve: CurveSpec
}) => {
    const getLower = getAccessor<number>(lower)
    const getUpper = getAccessor<number>(upper)
    const originalSeriesData = originalData.data[seriesIndex].data as Array<Record<string, unknown>>
    const lowerValues = originalSeriesData.map(item => scaleY(getLower(item)))
    const upperValues = originalSeriesData.map(item => scaleY(getUpper(item)))
    const x = preparedData.data[seriesIndex].x
    const pointIntervals: Array<NumericPositionIntervalSpec> = x.map((v: number, i: number) => [
        v,
        lowerValues[i],
        upperValues[i],
    ])
    const generator = createAreaGenerator(curve)
    return generator(pointIntervals) ?? ''
}

export const ScatterInterval = ({
    ids,
    lower,
    upper,
    curve = 'Linear',
    variant = 'default',
    style,
    className,
    setRole,
}: ScatterIntervalProps) => {
    const preparedData = useScatterPreparedData()
    const originalData = useOriginalData()
    const scales = useScales()
    const scaleY = scales.y
    const colorScale = scales.color
    if (!isContinuousAxisScale(scaleY)) return null

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        const d = useMemo(
            () =>
                getScatterIntervalD({
                    seriesIndex,
                    originalData,
                    preparedData,
                    scaleY,
                    lower,
                    upper,
                    curve,
                }),
            [seriesIndex, originalData, preparedData, scaleY, lower, upper, curve]
        )
        return (
            <g role={'scatter-interval'} key={'scatter-interval-' + seriesIndex}>
                <path
                    d={d}
                    role={setRole ? variant : undefined}
                    style={seriesStyle}
                    className={className}
                />
            </g>
        )
    })

    return <>{result.filter(v => v)}</>
}