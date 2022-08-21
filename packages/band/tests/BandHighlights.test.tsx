import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Bar, BandHighlights, BandLabels } from '../src'
import { barProps } from './props'

describe('BandHighlights', () => {
    it('creates default band highlights', () => {
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} keys={['x']}>
                    <BandHighlights />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('band-highlights')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('create highlight only on selected bands', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BandHighlights ids={['alpha']} setRole={true} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('band-highlights')
        expect(result.querySelectorAll('rect')).toHaveLength(1)
        const highlight = screen.getByRole('band-highlight-0')
        expect(highlight).toBeDefined()
    })

    it('skips highlights when ids are empty', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BandHighlights ids={[]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('rect')).toHaveLength(0)
    })
})
