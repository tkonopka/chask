// types for axis scales, color scales, and size scales

/** Axis */

// a general type for scales
// this is designed to overlap with d3, but also includes optional fields
export interface GenericScale<Domain, Range> {
    /** AxisScale is a function */
    (v: Domain): Range
    /** type of scale */
    variant?: 'log' | 'linear' | 'band' | 'sequential' | 'diverging' | 'categorical'
    /** scale domain */
    domain: () => Domain[]
    /** bandwidth - only provides useful information for band scales */
    bandwidth: () => number
    /** width/size of one band, including padding */
    step: () => number
    /** ticks */
    ticks: (v?: number) => Domain[]
}

export type BandAxisScale = GenericScale<string, number> & {
    variant: 'band'
}

export type LinearAxisScale = GenericScale<number, number> & {
    variant: 'linear'
}

export type LogAxisScale = GenericScale<number, number> & {
    variant: 'log'
}

export type ContinuousAxisScale = LinearAxisScale | LogAxisScale

export type AxisScale = ContinuousAxisScale | BandAxisScale

export type MinMaxSpec = [number, number]

export type ContinuousScaleSpec = {
    /** type of scale */
    variant: 'linear' | 'log'
    /** domain min and max */
    domain?: [number, number] | [number, 'auto'] | ['auto', number] | 'auto'
    /** clamp */
    clamp?: boolean
    /** nice */
    nice?: boolean | number
}
export type ContinuousScaleProps = ContinuousScaleSpec & {
    /** domain min and max */
    domain: MinMaxSpec
}

export type LinearScaleSpec = ContinuousScaleSpec & {
    /** type of scale */
    variant: 'linear'
}

export type LinearScaleProps = LinearScaleSpec & {
    /** domain min and max */
    domain: [number, number]
}

export type LogScaleSpec = ContinuousScaleSpec & {
    /** type of scale */
    variant: 'log'
}

export type BandScaleSpec = {
    /** type of scale */
    variant: 'band'
    /** all keys in the domain */
    domain?: string[] | 'auto'
    /** padding (multiple of scale step size); overridden by paddingOuter and paddingInner */
    padding?: number
    /** padding between edges of range and first/last bands (multiple of scale step size) */
    paddingOuter?: number
    /** padding between individual bands (multiple of scale step size) */
    paddingInner?: number
    /** dictionary with additional padding before certain bands (multiples of scale step size) */
    extraPadding?: Record<string, number>
}

export type BandScaleProps = BandScaleSpec & {
    /** all keys in the domain */
    domain: string[]
}

export type ScaleSpec = ContinuousScaleSpec | BandScaleSpec

export type ScaleProps = ContinuousScaleProps | BandScaleProps

/** Color */

const d3schemes = [
    'Accent',
    'Blues',
    'BrBG',
    'BuGn',
    'BuPu',
    'Category10',
    'Dark2',
    'GnBu',
    'Greens',
    'Greys',
    'OrRd',
    'Oranges',
    'PRGn',
    'Paired',
    'Pastel1',
    'Pastel2',
    'PiYG',
    'PuBu',
    'PuBuGn',
    'PuOr',
    'PuRd',
    'Purples',
    'RdBu',
    'RdGy',
    'RdPu',
    'RdYlBu',
    'RdYlGn',
    'Reds',
    'Set1',
    'Set2',
    'Set3',
    'Spectral',
    'Tableau10',
    'YlGn',
    'YlGnBu',
    'YlOrBr',
    'YlOrRd',
] as const

export type D3Scheme = typeof d3schemes[number]

export type CategoricalScaleSpec = {
    variant: 'categorical'
    colors: D3Scheme | string[] | string[][]
    size?: number
    domain?: string[]
}
export type CategoricalScaleProps = CategoricalScaleSpec & {
    domain: string[]
}

export type SequentialScaleSpec = {
    variant: 'sequential'
    colors: D3Scheme | string[]
    domain: [number | 'auto', number | 'auto'] | 'auto'
}
export type SequentialScaleProps = SequentialScaleSpec & {
    domain: [number, number]
}

export type DivergingScaleSpec = {
    variant: 'diverging'
    colors: D3Scheme | string[]
    domain: [number | 'auto', number | 'auto', number | 'auto'] | 'auto'
}
export type DivergingScaleProps = DivergingScaleSpec & {
    domain: [number, number, number]
}

export type ColorScaleSpec = CategoricalScaleSpec | SequentialScaleSpec | DivergingScaleSpec
export type ColorScaleProps = CategoricalScaleProps | SequentialScaleProps | DivergingScaleProps

export type SequentialColorScale = GenericScale<number, string> & {
    variant: 'sequential'
}
export type DivergingColorScale = GenericScale<number, string> & {
    variant: 'diverging'
}
export type CategoricalColorScale = GenericScale<number | string, string> & {
    variant: 'categorical'
}

export type ContinuousColorScale = SequentialColorScale | DivergingColorScale

export type ColorScale = SequentialColorScale | DivergingColorScale | CategoricalColorScale

export type Scale = ColorScale | AxisScale

/** Context */

export type ScalesContextProps = {
    /** scale for X axis*/
    x: AxisScale
    /** scale for Y axis */
    y: AxisScale
    /** scale for size */
    size: AxisScale
    /** scale for color */
    color: ColorScale
}

/** Cartesian detector zones */

// coordinates for one detector zone: [[xmin, xmax], [ymin, ymax]]
export type DetectorZone = [[number, number], [number, number]]
export type DetectorIntervals = [number[], number[]]