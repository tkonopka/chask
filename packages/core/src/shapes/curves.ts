import {
    area,
    line,
    curveBasisOpen,
    curveBasisClosed,
    curveCardinalClosed,
    curveCardinalOpen,
    curveCatmullRomClosed,
    curveCatmullRomOpen,
    curveLinear,
    curveLinearClosed,
    curveMonotoneX,
    curveMonotoneY,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
} from 'd3-shape'
import { AreaFunction, CurveFunction, CurveSpec } from './types'
import { NumericPositionIntervalSpec, NumericPositionSpec } from '../general'

const pointCurves = {
    Linear: curveLinear,
    MonotoneX: curveMonotoneX,
    MonotoneY: curveMonotoneY,
    Natural: curveNatural,
    Step: curveStep,
    StepAfter: curveStepAfter,
    StepBefore: curveStepBefore,
}
const openCurves = {
    BasisOpen: curveBasisOpen,
    CardinalOpen: curveCardinalOpen,
    CatmullRomOpen: curveCatmullRomOpen,
}
const closedCurves = {
    BasisClosed: curveBasisClosed,
    CardinalClosed: curveCardinalClosed,
    CatmullRomClosed: curveCatmullRomClosed,
    LinearClosed: curveLinearClosed,
}
const allCurves = { ...closedCurves, ...openCurves, ...pointCurves }

// creates a line generator that accepts data points in format [x, y]
export const createLineGenerator = (curve: CurveSpec): CurveFunction => {
    return line()
        .defined((d: NumericPositionSpec) => d[0] !== null && d[1] !== null)
        .curve(allCurves[curve] ?? curveLinear)
}

// creates an area generator that accepts data in format [x, y, y0]
export const createAreaGenerator = (curve: CurveSpec): AreaFunction => {
    return area<NumericPositionIntervalSpec>()
        .defined(
            (d: NumericPositionIntervalSpec) => d[0] !== null && d[1] !== null && d[2] !== null
        )
        .y0((d: NumericPositionIntervalSpec) => d[2])
        .curve(allCurves[curve] ?? curveLinear)
}
