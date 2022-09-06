import {
    SvgElementProps,
    CssProps,
    ContainerProps,
    SvgElementVariantProps,
    AlignSpec,
    SideType,
    FourSideSizeSpec,
    PositionSpec,
    SizeSpec,
    TranslateSpec,
} from '@chask/core'
import { ReactNode } from 'react'

interface BoxedTextProps {
    /** expansion of box size */
    expansion?: FourSideSizeSpec
    /** horizontal radius of box */
    rx?: number
    /** vertical radius of box */
    ry?: number
    /** style for box */
    boxStyle?: CssProps
    /** style for text */
    textStyle?: CssProps
    /** children */
    children?: string | ReactNode
}

export interface BoxedLabelProps extends SvgElementProps, ContainerProps, BoxedTextProps {
    /** position of center of label */
    position: PositionSpec
    /** size of box (in absolute units) */
    size: SizeSpec
    /** additional translation */
    translate?: TranslateSpec
    /** anchor */
    anchor?: AlignSpec
    /** rotation */
    rotate?: number
}

export interface BoxedTitleProps extends SvgElementVariantProps, BoxedTextProps {
    /** variant, side of the chart */
    variant: SideType
    /** absolute size of box in direction orthogonal to the axis */
    size?: number
    /** distance from axis */
    offset?: number
}