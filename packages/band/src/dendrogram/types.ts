import { FC } from 'react'
import {
    DataInteractivityProps,
    LabelProps,
    LinearScaleSpec,
    ProcessedDataContextProps,
    SideVariant,
    WithId,
    PathProps,
    RectangleProps,
    FourSideSizeSpec,
    ShiftUnit,
} from '@chsk/core'
import { BandProps, BandsProps } from '../bands'

export type DendrogramDataItem = WithId & {
    merge: Array<[number, number]>
    height: number[]
    keys: string[]
}

export type DendrogramProcessedDataItem = WithId & {
    index: number
    domain: [number, number]
}

export type DendrogramProcessedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<DendrogramProcessedDataItem>
}

export type DendrogramPreparedDataItem = WithId & {
    index: number
    merge: Array<[number, number]>
    position: number[]
    height: number[]
    leafPosition: number[]
    leafHeight: number[]
    positionInterval: [number, number][]
    heightInterval: [number, number][]
}

export type DendrogramPreparedDataContextProps = {
    /** data */
    data: Array<DendrogramPreparedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export type DendrogramInteractiveDataItem = {
    id: string
    key: string
    data: string[]
}

export interface DendrogramProps
    extends Omit<BandProps, 'keys' | 'scaleValue' | 'autoRescale' | 'paddingInternal'> {
    /** variant */
    variant?: SideVariant
    /** data */
    data: Array<DendrogramDataItem>
    /** scale for axis with continuous values */
    scaleValue?: LinearScaleSpec
    /** hang size for leaf nodes */
    hang?: number
}

export interface DendrogramTreeProps
    extends Omit<BandsProps, 'keys' | 'variant'>,
        DataInteractivityProps<DendrogramInteractiveDataItem, PathProps> {
    /** component used to draw individual bars */
    component?: FC<PathProps>
}

export interface DendrogramLeafLabelsProps
    extends Omit<BandsProps, 'variant'>,
        Omit<LabelProps, 'position'> {
    /** format for text */
    format?: (v: string) => string
    /** components used to render label */
    component?: FC<LabelProps>
}

export interface DendrogramSurfaceProps
    extends Omit<BandsProps, 'variant'>,
        DataInteractivityProps<DendrogramInteractiveDataItem, RectangleProps> {
    /** hierarchy levels */
    levels?: number[]
    /** expansion */
    expansion?: FourSideSizeSpec
    /** expansion unit */
    expansionUnit?: ShiftUnit
    /** component used to draw individual surfaces */
    component?: FC<RectangleProps>
}
