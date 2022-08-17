import { render } from '@testing-library/react'
import {
    Chart,
    createBandScale,
    createContinuousScale,
    defaultDivergingScale,
    defaultSequentialScale,
    defaultSizeScale,
    ScalesContextProps,
    useProcessedData,
    useScales,
} from '@chask/core'
import {
    Bar,
    BarPreparedDataContextProps,
    BarProcessedDataContextProps,
    isBarProcessedData,
    useBarPreparedData,
} from '../src'
import { barProps } from './props'

const dummyBandScale = createBandScale({ domain: ['a'], size: 100 })
const dummyLinearScale = createContinuousScale({
    domain: [0, 10],
    size: 100,
    variant: 'linear',
    axis: 'y',
})

describe('Bar', () => {
    it('defines processed data', () => {
        const processed: BarProcessedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isBarProcessedData(temp.data)) {
                processed.data = temp.data
                processed.keys = temp.keys
                processed.seriesIndexes = temp.seriesIndexes
            }
            return null
        }
        render(
            <Chart>
                <Bar {...barProps}>
                    <GetProcessedData />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        expect(processed.keys).toHaveLength(3)
    })

    it('defines prepared data', () => {
        let prepared: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useBarPreparedData()
            return null
        }
        render(
            <Chart>
                <Bar {...barProps}>
                    <GetPreparedData />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
        expect(prepared.keys).toHaveLength(3)
    })

    it('auto-detects scales (vertical)', () => {
        let scales: ScalesContextProps = {
            x: dummyBandScale,
            y: dummyLinearScale,
            size: defaultSizeScale,
            color: defaultSequentialScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    stacked={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Bar>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // when stacked, the alpha group goes from baseline 0 to top 100
        expect(scales.x.domain()).toEqual(['alpha', 'beta'])
        expect(scales.y.domain()).toEqual([0, 100])
    })

    it('auto-detects scales (horizontal)', () => {
        let scales: ScalesContextProps = {
            x: dummyBandScale,
            y: dummyLinearScale,
            size: defaultSizeScale,
            color: defaultDivergingScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    stacked={true}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Bar>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // when stacked, the alpha group goes from baseline 0 to top 100
        expect(scales.y.domain()).toEqual(['alpha', 'beta'])
        expect(scales.x.domain()).toEqual([0, 100])
    })
})