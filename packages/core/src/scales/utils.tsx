import { BandAxisScale } from './types'
import { NumericPositionSpec, SizeSpec, X, Y, sortedIndex } from '../general'
import { DetectorZone, DetectorIntervals } from './types'

// create intervals associated with bands
// result is an array with potentially many duplicates, e.g. [0, 1, 1, 2, 2, 3]
// the duplicates are needed to support band scales with custom padding
export const createBandDetectorIntervals = (
    scale: BandAxisScale,
    targets: Set<string>
): number[] => {
    const halfStep = scale.step() / 2
    return scale
        .domain()
        .filter(item => targets.has(item))
        .map(item => {
            const value = scale(item)
            return [value - halfStep, value + halfStep]
        })
        .flat()
        .sort((a: number, b: number) => a - b)
}

// determine if cursor is inside current detection zone
export const inZone = (pos: NumericPositionSpec, zone: DetectorZone | null): boolean => {
    if (zone === null) return false
    return (
        pos[X] >= zone[X][0] && pos[X] <= zone[X][1] && pos[Y] >= zone[Y][0] && pos[Y] <= zone[Y][1]
    )
}

export const findZone = (
    pos: NumericPositionSpec,
    intervals: DetectorIntervals
): { indexes: [number, number]; zone: DetectorZone | null } => {
    const i = sortedIndex(intervals[X], pos[X])
    const j = sortedIndex(intervals[Y], pos[Y])
    if (i % 2 == 0 || j % 2 == 0)
        return { indexes: [Math.floor(i / 2), Math.floor(j / 2)], zone: null }
    const zone = [
        intervals[X].slice(i - 1, i + 1),
        intervals[Y].slice(j - 1, j + 1),
    ] as DetectorZone
    return { indexes: [(i - 1) / 2, (j - 1) / 2], zone }
}

export const getZoneSize = (zone: DetectorZone): SizeSpec => {
    return [zone[X][1] - zone[X][0], zone[Y][1] - zone[Y][0]]
}
