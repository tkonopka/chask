import { TooltipDataItem } from '@chsk/core'
import { DistributionTooltip } from '../../src'
import { ChartDistributionWithTooltipDecorator } from './decorators'

export default {
    title: 'Addons/Band/Distributions/DistributionTooltip',
    component: DistributionTooltip,
}

export const Tooltip = {
    name: 'tooltip',
    args: {
        offset: [8, 0],
        padding: [8, 8, 8, 8],
        anchor: [0, 0.5],
        labelFormat: (d: TooltipDataItem) => d.id + ' - ' + d.key,
        labelStyle: {
            fontWeight: 600,
        },
        valueFormat: (x: number) => Math.round(x * 100) / 100,
        cellStyle: {
            textAnchor: 'start',
            dominantBaseline: 'central',
        },
    },
    decorators: [ChartDistributionWithTooltipDecorator],
}

export const TableFormat = {
    name: 'table format',
    args: {
        offset: [8, 0],
        padding: [8, 8, 8, 8],
        anchor: [0.5, 1],
        cellSize: [60, 20],
        cellPadding: 50,
        labelFormat: (d: TooltipDataItem) => d.id + ' - ' + d.key,
        labelStyle: {
            fontWeight: 600,
        },
        valueFormat: (x: number) => Math.round(x * 100) / 100,
        cellStyle: {
            textAnchor: 'start',
            dominantBaseline: 'central',
        },
    },
    decorators: [ChartDistributionWithTooltipDecorator],
}
