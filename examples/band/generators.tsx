// generate an array of records suitable for a Bar chart
export const generateBarData = ({
    ids,
    keys,
    interval,
}: {
    ids: string[]
    keys: string[]
    interval: [number, number]
}) => {
    const result = ids.map(id => {
        let series: Record<string, number | string> = { id: id }
        return generateKeyValues(series, keys, interval)
    })
    return result
}

// add key-value pairs with random values into an existing object
export const generateKeyValues = (
    obj: Record<string, number | string>,
    keys: string[],
    interval: [number, number]
) => {
    const intervalSize = interval[1] - interval[0]
    keys.forEach(k => {
        obj[k] = Math.round(interval[0] + Math.random() * intervalSize)
    })
    return obj
}
