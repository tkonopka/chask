import {
    SvgElementProps,
    PositionSpec,
    PositionUnits,
    SizeSpec,
    CssProps,
    LineProps,
    TranslateSpec,
    TwoSideSizeSpec,
} from '@chsk/core'
import { ReactNode } from 'react'

export interface LineLabelProps
    extends SvgElementProps,
        Pick<LineProps, 'markerStart' | 'markerEnd'> {
    /** start position */
    start: PositionSpec
    /** end position */
    end: PositionSpec
    /** units for start and end positions */
    units?: PositionUnits
    /** expansion of interval (multiples of bandwidth) */
    expansion?: TwoSideSizeSpec
    /** alignment for text label in [0, 1] */
    align?: number
    /** translation for text label */
    translate?: TranslateSpec
    /** rotation of text label */
    angle?: number
    /** padding for text label */
    padding?: SizeSpec
    /** styles for line */
    lineStyle?: CssProps
    /** styles for text */
    textStyle?: CssProps
    /** children components */
    children?: ReactNode
}

export interface BracketLabelProps extends Omit<LineLabelProps, 'markerStart' | 'markerEnd'> {
    /** left- or right- handed ticks */
    variant?: 'right' | 'left'
    /** size of marker at the end of line */
    tickSize?: number
}

export interface BraceLabelProps extends BracketLabelProps {
    /** smoothness of brace edges */
    braceR?: number
}
