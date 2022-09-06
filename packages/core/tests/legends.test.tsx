import { render, screen } from '@testing-library/react'
import { Chart, Legend, View, ColorScaleProps } from '../src'
import { chartProps } from './props'

const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

const scaleCategorical: ColorScaleProps = {
    variant: 'categorical',
    colors: 'Category10',
    domain: ['alpha', 'beta', 'gamma'],
}

const scaleSequential: ColorScaleProps = {
    variant: 'sequential',
    colors: 'Blues',
    domain: [0, 100],
}

describe('Legend (items)', () => {
    it('creates a legend with categorical colors', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend />
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        expect(legend).toBeDefined()
        const items = screen.getAllByRole('legend-item')
        expect(items).toHaveLength(3)
        const labels = legend.querySelectorAll('text')
        expect(labels).toHaveLength(3)
    })

    it('creates legend items with role and class', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend setRole={true} />
                </View>
            </Chart>
        )
        const items = screen.getAllByRole('legend-item')
        expect(items).toHaveLength(3)
        expect(items[0].getAttribute('role')).toContain('legend-item')
        expect(items[0].getAttribute('class')).toContain('legendItem')
    })

    it('creates legend items without role', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryAllByRole('legend-item')).toHaveLength(0)
    })
})

describe('Legend (color)', () => {
    it('creates a legend with a color scale', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'color'} />
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        expect(legend).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks.length).toBeGreaterThan(2)
    })

    it('skips work when color scale is categorical', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'color'} />
                </View>
            </Chart>
        )
        const result = screen.queryByRole('legend-color-scale')
        expect(result).toBeNull()
    })
})