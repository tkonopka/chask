import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { FilterInsetBorder } from '../../src'
import { chartProps } from '../props'

describe('FilterInsetBorder', () => {
    it('creates a filter', () => {
        render(
            <Chart {...chartProps}>
                <FilterInsetBorder id={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelectorAll('filter')
        expect(result).toHaveLength(1)
    })
})
