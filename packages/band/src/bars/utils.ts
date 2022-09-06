import {
    BandAxisScale,
    BandScaleProps,
    BandScaleSpec,
    createContinuousScaleProps,
    getMinMax,
    isScaleWithDomain,
    LinearScaleProps,
    LinearScaleSpec,
} from '@chask/core'
import { BarProcessedDataItem } from './types'
import { cloneDeep } from 'lodash'

export const isBarProcessedData = (data: Array<unknown>): data is Array<BarProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'data' in item && 'domain' in item
    })
    return result.every(Boolean)
}

export const getScaleProps = (
    ids: string[],
    data: Array<[number, number][]>, // for each id, key, array with [min, max] values
    scaleSpecIndex: BandScaleSpec,
    scaleSpecValue: LinearScaleSpec,
    disabled: boolean[],
    stacked = false
) => {
    const result = {
        scalePropsIndex: cloneDeep(scaleSpecIndex),
        scalePropsValue: cloneDeep(scaleSpecValue),
    }
    if (!isScaleWithDomain(scaleSpecIndex)) {
        result.scalePropsIndex.domain = ids
    }
    if (!isScaleWithDomain(scaleSpecValue)) {
        const filterDisabled = (v: unknown, i: number) => !disabled[i]
        const values = data.map(d => d.filter(filterDisabled).flat().filter(isFinite))
        const sumValues = (values: number[]) => {
            const positive = values.reduce((acc, v) => (isFinite(v) && v > 0 ? acc + v : acc), 0)
            const negative = values.reduce((acc, v) => (isFinite(v) && v < 0 ? acc + v : acc), 0)
            return [negative, positive]
        }
        const domain = stacked ? getMinMax(values.map(sumValues).flat()) : getMinMax(values.flat())
        //domain[0] = Math.min(0, domain[0])
        //domain[1] = Math.max(0, domain[1])
        result.scalePropsValue = createContinuousScaleProps(
            scaleSpecValue,
            domain
        ) as LinearScaleProps
    }
    return result as { scalePropsIndex: BandScaleProps; scalePropsValue: LinearScaleProps }
}

// for grouped bars/boxplots, compute width of individual bar/box and gap to next bar/box
export const getInternalWidthAndGap = (
    indexScale: BandAxisScale,
    keys: string[],
    paddingInternal: number | null,
    stacked = false
): [number, number] => {
    const bandwidth = indexScale.bandwidth()
    const nKeys = keys.length
    const padInternal = paddingInternal ? paddingInternal : 0
    const noGap = nKeys === 1 || stacked || paddingInternal === null
    const width = noGap ? bandwidth : bandwidth / (nKeys - Math.min(1, padInternal))
    if (noGap) {
        return [width, -width]
    }
    return [width * (1 - padInternal), width * padInternal]
}