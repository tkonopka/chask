import { ReactNode, FC } from 'react'
import {
    CssProps,
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    SvgElementProps,
    TranslateSpec,
} from '../general'
import { ContainerProps } from '../views'
import { SymbolProps } from '../shapes'
import { AxisTicksProps } from '../axes'

export interface LegendTitleProps extends SvgElementProps {
    /** variant */
    variant?: 'default' | string
    /** position of symbol */
    position: NumericPositionSpec
    /** size of a single legend item */
    size?: SizeSpec
    /** padding for a single legend item */
    padding?: FourSideSizeSpec
    /** alignment of symbol and text */
    align?: 'left' | 'middle' | 'right'
    /** additional translation */
    translate?: TranslateSpec
    /** children components */
    children?: ReactNode
}

export interface LegendItemProps extends Omit<LegendTitleProps, 'variant'> {
    /** variant */
    variant?: 'default' | string
    /** key */
    item: string
    /** size of symbol */
    r?: number
    /** symbol function */
    symbol?: FC<SymbolProps>
    /** style for symbol */
    symbolStyle?: CssProps
    /** text label */
    label: string
    /** style for text label */
    labelStyle?: CssProps
    /** offset of label from symbol */
    labelOffset?: NumericPositionSpec
    /** color index (internal use) */
    colorIndex?: number
    /** interactivity */
    interactive?: boolean
}

export interface LegendItemThemedProps
    extends Pick<
        LegendItemProps,
        'size' | 'padding' | 'translate' | 'align' | 'r' | 'labelOffset'
    > {
    size: SizeSpec
    padding: FourSideSizeSpec
    translate: NumericPositionSpec
    align: 'left' | 'middle' | 'right'
    r: number
    labelOffset: NumericPositionSpec
    interactive: boolean
}

export interface LegendColorScaleProps extends Omit<LegendTitleProps, 'variant'>, AxisTicksProps {
    /** number, or location, of ticks */
    ticks?: number[] | number
    /** offset of color axis from default position */
    offset?: number
    /** identifier for gradient */
    gradientId?: string
}

export interface LegendProps
    extends SvgElementProps,
        ContainerProps,
        Pick<
            LegendItemProps,
            'align' | 'r' | 'symbol' | 'symbolStyle' | 'labelStyle' | 'labelOffset'
        > {
    /** legend type */
    variant?: 'list' | 'color' | 'size'
    /** size of a single legend item */
    itemSize?: SizeSpec
    /** padding for a single legend item */
    itemPadding?: FourSideSizeSpec
    /** legend title */
    title?: string
    /** style for legend title */
    titleStyle?: CssProps
    /** arrange the legend items horizontally */
    horizontal?: boolean
    /** offset/translate first item relative to default position */
    firstOffset?: NumericPositionSpec
    /** size for scale */
    scaleSize?: SizeSpec
}

export interface LegendThemedProps
    extends Pick<
        LegendProps,
        'itemSize' | 'itemPadding' | 'horizontal' | 'firstOffset' | 'scaleSize'
    > {
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    firstOffset: NumericPositionSpec
    scaleSize: SizeSpec
    align: 'left' | 'middle' | 'right'
    r: number
    labelOffset: NumericPositionSpec
}