import { CSSProperties } from 'react'
import { NumericPositionSpec, FourSideSizeSpec, SizeSpec } from '../general'
import { CategoricalScaleSpec, DivergingScaleSpec, SequentialScaleSpec } from '../scales'

export interface SideRecords {
    top?: Record<string, unknown>
    bottom?: Record<string, unknown>
    left?: Record<string, unknown>
    right?: Record<string, unknown>
}

export interface ThemeColorSpec {
    categorical?: CategoricalScaleSpec
    diverging?: DivergingScaleSpec
    sequential?: SequentialScaleSpec
}
export interface CompleteThemeColorSpec {
    categorical: CategoricalScaleSpec
    diverging: DivergingScaleSpec
    sequential: SequentialScaleSpec
}

export interface ThemeLegendSpec {
    horizontal?: boolean
    align?: 'left' | 'middle' | 'right'
    itemSize?: SizeSpec
    itemPadding?: FourSideSizeSpec
    firstOffset?: NumericPositionSpec
    r?: number
    labelOffset?: NumericPositionSpec
    scaleSize?: SizeSpec
}
export interface CompleteThemeLegendSpec {
    horizontal: boolean
    align: 'left' | 'middle' | 'right'
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    firstOffset: NumericPositionSpec
    r: number
    labelOffset: NumericPositionSpec
    scaleSize: SizeSpec
}

export interface ThemeSpec {
    circle?: Record<string, Partial<CSSProperties>>
    g?: Record<string, Partial<CSSProperties>>
    line?: Record<string, Partial<CSSProperties>>
    path?: Record<string, Partial<CSSProperties>>
    polygon?: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    text?: Record<string, Partial<CSSProperties>>
    Axis?: SideRecords
    AxisLabel?: SideRecords
    AxisTicks?: SideRecords
    Legend?: ThemeLegendSpec
    Colors?: ThemeColorSpec
}

export interface CompleteThemeSpec {
    circle: Record<string, Partial<CSSProperties>>
    g: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    path: Record<string, Partial<CSSProperties>>
    polygon: Record<string, Partial<CSSProperties>>
    rect: Record<string, Partial<CSSProperties>>
    text: Record<string, Partial<CSSProperties>>
    Axis: SideRecords
    AxisLabel: SideRecords
    AxisTicks: SideRecords
    Legend: CompleteThemeLegendSpec
    Colors: CompleteThemeColorSpec
}

export const svgBaseComponents = ['circle', 'line', 'path', 'polygon', 'rect', 'text', 'g'] as const
export type SvgBaseComponent = typeof svgBaseComponents[number]
