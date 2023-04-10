import { createElement } from 'react'
import {
    addColor,
    TooltipDataComponent,
    OpacityMotion,
    Path,
    useDisabledKeys,
    useScales,
} from '@chsk/core'
import { ScatterCurveProps } from './types'
import { useScatterPreparedData } from './context'
import { curvePoints } from './signals'

export const ScatterCurve = ({
    ids,
    curve = 'Linear',
    // signal processing
    convolutionMask,
    convolutionOffset,
    downsampleFactor,
    downsampleIndex,
    // component props
    style,
    className,
    setRole = true,
    dataComponent = TooltipDataComponent,
    ...pathProps
}: ScatterCurveProps) => {
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()

    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        seriesStyle.fill = undefined
        const seriesData = preparedData.data[seriesIndex]
        const points = curvePoints({
            x: seriesData.x,
            y: seriesData.y,
            convolutionMask,
            convolutionOffset,
            downsampleFactor,
            downsampleIndex,
        })
        const element = createElement(dataComponent, {
            data: { id },
            component: Path,
            props: {
                points,
                curve,
                variant: 'scatter-curve',
                className,
                style: seriesStyle,
                setRole,
            },
            ...pathProps,
        })
        return (
            <OpacityMotion
                role={setRole ? 'scatter-curve-presence' : undefined}
                key={'scatter-curve-' + seriesIndex}
                visible={visible}
                firstRender={firstRender}
            >
                {element}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
