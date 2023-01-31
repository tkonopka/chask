import { NumericPositionSpec } from '../general'
import { TooltipItem } from './TooltipItem'
import { defaultTooltipProps } from './defaults'
import { TooltipItemListProps } from './types'
import { useThemedProps } from '../themes'
import { getItemPositions } from '../legends/positions'

const UnthemedTooltipItemList = ({
    variant,
    position,
    items,
    labels,
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    horizontal = defaultTooltipProps.horizontal,
    r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultTooltipProps.labelOffset,
    //
    className,
    style,
    setRole = true,
}: TooltipItemListProps) => {
    const { itemPosition, itemS, symbolPosition, labelPosition } = getItemPositions(
        variant,
        position,
        horizontal,
        itemSize,
        itemPadding,
        labelOffset,
        r ?? Array(items?.length).fill(1)
    )

    const content = itemPosition.map((pos: NumericPositionSpec, i: number) => {
        return (
            <TooltipItem
                variant={variant}
                key={'tooltip-item-' + i}
                position={pos}
                size={itemS[i]}
                padding={itemPadding}
                r={r ? r[i] : 1}
                symbol={symbol}
                symbolPosition={symbolPosition[i]}
                symbolStyle={symbolStyle}
                item={items ? items[i] : ''}
                label={labels ? labels[i] : ''}
                labelPosition={labelPosition[i]}
                labelStyle={labelStyle}
                labelOffset={labelOffset}
                className={className}
                style={style}
                setRole={setRole}
            />
        )
    })

    return <>{content}</>
}

export const TooltipItemList = (props: TooltipItemListProps) => (
    <UnthemedTooltipItemList {...useThemedProps(props, 'TooltipItemList')} />
)