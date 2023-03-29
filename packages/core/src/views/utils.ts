import { ProcessedDataContextProps } from './types'
import { WithId } from '../general'

// build a dictionary mapping series string ids to integers
export const getIndexes = (data?: Array<WithId>): Record<string, number> => {
    const result: Record<string, number> = {}
    data?.forEach((seriesData, index) => {
        result[seriesData.id] = index
    })
    return result
}

// helper to getIdKeySets
const getSet = (values: string[] | undefined, allowed: Set<string>) => {
    if (!values) return allowed
    const result = new Set<string>(values)
    values.map(v => {
        if (!allowed.has(v)) result.delete(v)
    })
    return result
}

// get sets containing ids and keys to display (or sets of all available ids and keys)
export const getIdKeySets = (
    ids: string[] | undefined,
    keys: string[] | undefined,
    processedData: ProcessedDataContextProps
) => {
    const allIds = new Set(Object.keys(processedData.seriesIndexes))
    const allKeys = new Set(processedData.keys)
    const idSet = getSet(ids, allIds)
    const keySet = getSet(keys, allKeys)
    const keyArray = processedData.keys.filter(x => keySet.has(x))
    const idArray = Object.keys(processedData.seriesIndexes).filter(x => idSet.has(x))
    return { idSet, keySet, idArray, keyArray }
}
