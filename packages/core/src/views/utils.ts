import { WithId } from '../general'

/** build a dictionary mapping series string ids to integers */
export const getIndexes = (data?: Array<WithId>): Record<string, number> => {
    const result: Record<string, number> = {}
    data?.forEach((seriesData, index) => {
        result[seriesData.id] = index
    })
    return result
}
