import { createElement, useMemo } from 'react'
import {
    addColor,
    Circle,
    DataComponent,
    OpacityMotion,
    useDisabledKeys,
    useProcessedData,
    useScales,
} from '@chask/core'
import { ScatterPointsProps } from './types'
import { useScatterPreparedData } from './context'
import { isScatterProcessedData } from './predicates'

export const ScatterPoints = ({
    ids,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    dataComponent = DataComponent,
    ...props
}: ScatterPointsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isScatterProcessedData(processedData)) return null

    const symbolData = useMemo(
        () =>
            preparedData.keys.map(id => {
                const seriesIndex = preparedData.seriesIndexes[id]
                const seriesProcessedData = processedData[seriesIndex]
                const data = preparedData.data[seriesIndex]
                return data.r.map((r: number, index: number) => ({
                    id,
                    index,
                    point: [seriesProcessedData.x[index], seriesProcessedData.y[index]] as [
                        number,
                        number
                    ],
                    size: seriesProcessedData.size[index],
                    color: seriesProcessedData.color?.[index],
                }))
            }),
        [processedData, preparedData]
    )

    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(symbolStyle, colorScale(seriesIndex))
        const data = preparedData.data[seriesIndex]
        const x = data.x
        const y = data.y
        const colors = data.color
        const dots = visible
            ? data.r.map((r: number, i: number) =>
                  createElement(dataComponent, {
                      key: 'point-' + seriesIndex + '-' + i,
                      data: symbolData[seriesIndex][i],
                      component: symbol,
                      props: {
                          cx: x[i],
                          cy: y[i],
                          r: r,
                          className: symbolClassName,
                          style: colors ? addColor(symbolStyle, colors[i]) : seriesStyle,
                          setRole: false,
                      },
                      ...props,
                  })
              )
            : null
        return (
            <OpacityMotion
                key={'scatter-points-' + seriesIndex}
                role={'scatter-points'}
                visible={visible}
                firstRender={firstRender}
            >
                {dots}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
