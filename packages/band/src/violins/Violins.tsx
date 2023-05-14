import {
    addColor,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    getIdKeySets,
    isBandAxisScale,
    useProcessedData,
    Path,
    TooltipDataComponent,
} from '@chsk/core'
import { useViolinPreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { ViolinPreparedDataItem, ViolinsProps } from './types'
import { isViolinProcessedData } from './predicates'
import { violinPoints } from './utils'

export const Violins = ({
    variant = 'smooth',
    ids,
    keys,
    component = Path,
    className,
    dataComponent = TooltipDataComponent,
    style,
    ...props
}: ViolinsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useViolinPreparedData()
    const { scales } = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)
    if (!isViolinProcessedData(processedData)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    const allKeys = preparedData.keys
    const pathStyles = useMemo(
        () => allKeys.map((k, i) => addColor(style, colorScale(i))),
        [allKeys, style, colorScale]
    )
    const curve = variant === 'step' ? 'Step' : 'BasisClosed'

    const result: Array<ReactNode> = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        const visible = !disabledKeys.has(k)
        const items = data
            .map((seriesData: ViolinPreparedDataItem) => {
                if (!idSet.has(seriesData.id)) return null
                const summary = seriesData.data[i]
                if (!summary) return null
                const points = violinPoints({ ...summary, horizontal })
                if (points.length === 0) return null
                const seriesProcessedData = processedData[seriesData.index].data[i]
                return createElement(dataComponent, {
                    key: 'violin-' + seriesData.index + '-' + i,
                    data: {
                        id: seriesData.id,
                        key: k,
                        n: seriesProcessedData?.n ?? 0,
                    },
                    component,
                    props: {
                        variant: 'violin',
                        points,
                        curve,
                        closed: true,
                        className,
                        style: pathStyles[i],
                        setRole: false,
                    },
                    ...props,
                })
            })
            .filter(Boolean)

        return (
            <OpacityMotion
                key={'violins-' + i}
                role={'violins'}
                visible={visible}
                firstRender={firstRender}
            >
                {items}
            </OpacityMotion>
        )
    })

    return <>{result}</>
}
