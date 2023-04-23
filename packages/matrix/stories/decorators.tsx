import { ReactNode } from 'react'
import { Chart, Axis, Tooltip } from '@chsk/core'
import { schemeCategory10 } from 'd3-scale-chromatic'
import { HeatMap, HeatMapCells, HeatMapProps } from '../src/'
import { UpSet, UpSetGrid, UpSetProps } from '../src/'
import {
    generateCategoricalHeatMapData,
    generateContinuousHeatMapData,
    generateUpSetData,
} from './generators'

const continuous4x3 = generateContinuousHeatMapData(
    ['alpha', 'beta', 'gamma', 'delta'],
    ['x', 'y', 'z'],
    [0, 35]
)
const categorical4x3 = generateCategoricalHeatMapData(
    ['alpha', 'beta', 'gamma', 'delta'],
    ['x', 'y', 'z'],
    ['a', 'b', 'c', 'd', 'e']
)
const upsetData = generateUpSetData(
    ['alpha', 'beta', 'gamma', 'delta'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
    8
)

export const commonProps: Pick<HeatMapProps, 'data' | 'keys'> = {
    data: continuous4x3,
    keys: ['x', 'y', 'z'],
}

export const commonCategoricalProps: Pick<HeatMapProps, 'data' | 'keys' | 'scaleColor'> = {
    data: categorical4x3,
    keys: ['x', 'y', 'z'],
    scaleColor: { variant: 'categorical', colors: schemeCategory10 },
}

export const commonUpSetProps: UpSetProps = {
    data: upsetData,
    scaleIndex: { variant: 'band', padding: 0.2 },
    scaleMembership: { variant: 'band', padding: 0.2 },
}

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartDecoratorEqualPadding = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartHeatMapDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap {...commonProps}>
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            {Story()}
        </HeatMap>
    </Chart>
)

export const ChartHeatMapCellsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap {...commonProps}>
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            <HeatMapCells />
            {Story()}
        </HeatMap>
    </Chart>
)

export const ChartHeatMapCellsTooltipDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap {...commonProps}>
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            <HeatMapCells />
            {Story()}
            <Tooltip />
        </HeatMap>
    </Chart>
)

export const ChartHeatMapPaddedCellsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap
            {...commonProps}
            scaleX={{ variant: 'band', padding: 0.15, paddingOuter: 0.075 }}
            scaleY={{ variant: 'band', padding: 0.15, paddingOuter: 0.075 }}
        >
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            <HeatMapCells />
            {Story()}
        </HeatMap>
    </Chart>
)

export const ChartUpSetDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <UpSet {...commonUpSetProps}>
            <Axis variant={'left'} />
            {Story()}
        </UpSet>
    </Chart>
)

export const ChartUpSetGridDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <UpSet {...commonUpSetProps}>
            <UpSetGrid symbolStyle={{ fill: '#ccc' }} />
            <Axis variant={'left'} />
            {Story()}
        </UpSet>
    </Chart>
)
