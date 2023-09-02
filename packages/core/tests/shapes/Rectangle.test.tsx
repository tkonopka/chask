import { render, screen, waitFor } from '@testing-library/react'
import { Chart, Rectangle } from '../../src'
import { chartProps } from '../props'

describe('Rectangle', () => {
    it('creates a default rect', async () => {
        render(
            <Chart {...chartProps}>
                <Rectangle x={5} y={10} width={50} height={20} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        await waitFor(() => {
            // position will be set via transforms in style
            expect(result?.getAttribute('style')).toContain('5')
            expect(result?.getAttribute('style')).toContain('10')
            // size is set via attributes
            expect(result?.getAttribute('width')).toContain('50')
            expect(result?.getAttribute('height')).toContain('20')
            expect(result?.getAttribute('role')).toBeNull()
        })
    })

    it('creates a rect with role', async () => {
        render(
            <Chart {...chartProps}>
                <Rectangle variant={'custom-rect'} x={5} y={10} width={50} height={20} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        await waitFor(() => {
            expect(result?.getAttribute('role')).toBe('custom-rect')
            expect(result?.getAttribute('class')).toBe('customRect')
            // position
            expect(result?.getAttribute('style')).toContain('5')
            expect(result?.getAttribute('style')).toContain('10')
            // dimensions
            expect(result?.getAttribute('width')).toContain('50')
            expect(result?.getAttribute('height')).toContain('20')
        })
    })

    it('creates a rect variant without role', () => {
        render(
            <Chart {...chartProps}>
                <Rectangle
                    variant={'custom-rect'}
                    x={0}
                    y={10}
                    width={50}
                    height={20}
                    setRole={false}
                />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a default rect without animation', () => {
        render(
            <Chart {...chartProps}>
                <Rectangle x={0} y={10} width={50} height={20} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a centered rect', async () => {
        render(
            <Chart {...chartProps}>
                <Rectangle
                    variant={'test'}
                    x={0}
                    y={0}
                    width={50}
                    height={20}
                    center={true}
                    setRole={true}
                />
            </Chart>
        )
        const result = screen.getByRole('test')
        await waitFor(() => {
            // position (center at 0, width 50, so left corner should be at x=-25)
            expect(result.getAttribute('style')).toContain('-25')
            expect(result.getAttribute('style')).toContain('-10')
            // dimensions
            expect(result.getAttribute('width')).toContain('50')
            expect(result.getAttribute('height')).toContain('20')
        })
    })

    it('creates a rect with negative width', async () => {
        render(
            <Chart {...chartProps}>
                <Rectangle variant={'test'} x={100} y={100} width={-50} height={20} />
            </Chart>
        )
        const result = screen.getByRole('test')
        await waitFor(() => {
            // position (center at 100, width 50, so left corner should be at x=50)
            expect(result.getAttribute('style')).toContain('50')
            // dimensions
            expect(result.getAttribute('width')).toContain('50')
            expect(result.getAttribute('height')).toContain('20')
        })
    })

    it('creates a rect with negative height', async () => {
        render(
            <Chart {...chartProps}>
                <Rectangle variant={'test'} x={100} y={100} width={20} height={-50} />
            </Chart>
        )
        const result = screen.getByRole('test')
        await waitFor(() => {
            // position (center at 100, height -50, so left corner should be at y=50)
            expect(result.getAttribute('style')).toContain('50')
            // dimensions
            expect(result.getAttribute('width')).toContain('20')
            expect(result.getAttribute('height')).toContain('50')
        })
    })
})
