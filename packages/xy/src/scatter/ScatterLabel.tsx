import {
    getAbsoluteCoordinate,
    rad2deg,
    OpacityMotion,
    Typography,
    useDimensions,
    useScales,
    useDisabledKeys,
} from '@chask/core'
import { ScatterLabelProps, ScatterProcessedDataItem } from './types'
import { useScatterPreparedData } from './context'

const getClosestPointToX = (target: number, data: ScatterProcessedDataItem, avoidIndex = -1) => {
    let result = 0
    let bestDistance = Math.abs(target - data.x[0])
    data.x.forEach((v, i) => {
        if (i === avoidIndex) return
        const distance = Math.abs(target - v)
        if (distance < bestDistance) {
            bestDistance = distance
            result = i
        }
    })
    return result
}

export const ScatterLabel = ({
    ids,
    x,
    units = 'relative',
    translate = [0, 0],
    rotate = 0,
    autoRotate = false,
    style,
    className,
    children,
}: ScatterLabelProps) => {
    const preparedData = useScatterPreparedData()
    const scales = useScales()
    const dimensions = useDimensions()
    const { disabledKeys, firstRender } = useDisabledKeys()

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        if (disabledKeys.has(id)) return null
        const data = preparedData.data[seriesIndex]
        if (data.x.length === 0) return null
        // convert input x to a coordinate and search for the closest data points
        const value = getAbsoluteCoordinate(x, units, dimensions.innerSize[0], scales.x)
        const pointIndex = getClosestPointToX(value, data)
        let point = [data.x[pointIndex], data.y[pointIndex]]
        if (autoRotate) {
            const secondPointIndex = getClosestPointToX(value, data, pointIndex)
            const secondPoint = [data.x[secondPointIndex], data.y[secondPointIndex]]
            const slope = (secondPoint[1] - point[1]) / (secondPoint[0] - point[0])
            if (Math.abs(slope) === Infinity) {
                rotate = 0
            } else {
                rotate = rad2deg(Math.atan(slope)) * (secondPoint[0] > point[0] ? -1 : 1)
            }
            point = [(point[0] + secondPoint[0]) / 2, (point[1] + secondPoint[1]) / 2]
        }
        const translation =
            'translate(' + (point[0] + translate[0]) + ',' + (point[1] + translate[1]) + ')'
        const rotation = rotate === 0 ? '' : ' rotate(' + rotate + ')'
        return (
            <OpacityMotion
                key={'scatter-label-' + seriesIndex}
                role={'scatter-label'}
                firstRender={firstRender}
            >
                <Typography
                    variant={'scatterLabel'}
                    transform={translation + rotation}
                    className={className}
                    style={style}
                    setRole={false}
                >
                    {children}
                </Typography>
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}