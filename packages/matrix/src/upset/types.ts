import { FC } from 'react'
import {
    BandScaleSpec,
    CategoricalScaleSpec,
    CssProps,
    FourSideSizeSpec,
    LineProps,
    NumericPositionSpec,
    ProcessedDataContextProps,
    SvgElementProps,
    SymbolProps,
    ViewProps,
    WithId,
    WithInteractive,
} from '@chsk/core'
import { BandProps } from '@chsk/band'

export type UpSetDataItem = WithId & {
    data: unknown[]
}

export type UpSetProcessedDataItem = WithId & {
    index: number
    data: Array<number>
    horizontal: boolean
}

export type UpSetDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<UpSetProcessedDataItem>
}

export interface UpSetProps
    extends SvgElementProps,
        Pick<ViewProps, 'container' | 'data' | 'children'> {
    /** primary data (used for color scale) */
    data: Array<UpSetDataItem>
    /** display set pairs horizontally */
    horizontal?: boolean
    /** scale for axis with sets */
    scaleIndex?: BandScaleSpec
    /** scale for axis with set membership */
    scaleMembership?: BandScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export interface UpSetGridProps extends SvgElementProps {
    /** component drawing a symbol for line edges */
    symbol?: FC<SymbolProps>
    /** styles for symbol */
    symbolStyle?: CssProps
}

export interface UpSetMembershipProps extends UpSetGridProps, WithInteractive {
    /** coordinates for symbols */
    positions: NumericPositionSpec[]
    /** radius of symbol */
    r: number
    /** component drawing a line */
    line?: FC<LineProps>
    /** styles for line */
    lineStyle?: CssProps
}

export interface UpSetMembershipsProps extends Omit<UpSetMembershipProps, 'positions' | 'r'> {
    /** component to draw one set intersection */
    component?: FC<UpSetMembershipProps>
}

export interface UpSetBarProps
    extends Pick<BandProps, 'scaleIndex' | 'scaleValue' | 'scaleColor' | 'children'> {
    /** padding */
    padding?: FourSideSizeSpec
    /** size of view along the value axis */
    size: number
}
