import { createElement, ReactNode } from 'react'
import { getClassName, Label, NumericPositionSpec, X, Y } from '@chsk/core'
import { isVennPreparedData } from './predicates'
import { VennIntersectionLabelsProps, VennInteractiveDataItem } from './types'
import { useVennPreparedData } from './contexts'

export const VennIntersectionLabels = ({
    format = (v: string | number, item?: VennInteractiveDataItem) =>
        String(v) ?? String(item?.value),
    padding = [4, 4, 4, 4],
    size = [40, 10],
    align = [0.5, 0.5],
    offset = [0, 0],
    className,
    setRole = false,
    style,
    component = Label,
}: VennIntersectionLabelsProps) => {
    const preparedData = useVennPreparedData()
    const data = preparedData.data
    if (!isVennPreparedData(data)) return null

    const compositeClassName = getClassName('vennIntersectionLabel', className)
    const result: Array<ReactNode> = data.map((item, i) => {
        const labelPosition: NumericPositionSpec = [
            item.labelPosition[X] + offset[X],
            item.labelPosition[Y] + offset[Y],
        ]
        return createElement(
            component,
            {
                key: 'venn-intersection-label-' + i,
                position: labelPosition,
                size,
                align,
                padding,
                className: compositeClassName,
                style,
                setRole,
            },
            format(item.value, item)
        )
    })

    return <>{result}</>
}
