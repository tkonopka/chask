import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    Legend,
    LegendTitle,
    LegendSizeScale,
    Surface,
    WithId,
    Circle,
} from '@chask/core'
import {
    HeatMap,
    HeatMapCells,
    HeatMapCircle,
    HeatMapDataItem,
    HeatMapHighlight,
    isHeatMapData,
} from '@chask/matrix'
import { generateHeatMapMatrixUniform } from './generators'
import { alphabetGreek, alphabetUppercase } from '../utils'
import { MilestoneStory } from '../types'

const ids = alphabetUppercase
const keys = alphabetGreek
export const generateSizeBlockHeatMapData = () => {
    const breakA = 2 + Math.floor(2 * Math.random())
    const breakB = breakA + 2 + Math.floor(2 * Math.random())
    const resultA = generateHeatMapMatrixUniform(ids.slice(0, breakA), keys, 0, 70, 1)
    const resultB = generateHeatMapMatrixUniform(ids.slice(breakA, breakB), keys, 0, 40, 1)
    const resultC = generateHeatMapMatrixUniform(ids.slice(breakB, 10), keys, 0, 10, 1)
    return resultA.concat(resultB).concat(resultC)
}

const customTheme = {
    rect: {
        legendColorScale: {
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    AxisLabel: {
        top: {
            offset: 60,
        },
        left: {
            offset: 50,
        },
    },
    AxisTicks: {
        top: {
            labelRotate: -45,
        },
    },
}

export const SizeBlockHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHeatMapData(rawData)) return null

    const colorData: Array<HeatMapDataItem> = rawData.map(seriesData => {
        const item: WithId & Record<string, string> = { id: seriesData.id }
        alphabetGreek.map(id => {
            item[id] = '0'
        })
        return item
    })

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="sizeBlocks"
            size={[640, 320]}
            padding={[80, 90, 40, 60]}
            theme={customTheme}
        >
            <HeatMap
                data={colorData}
                dataSize={rawData}
                keys={keys}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#058c42', '#222222'],
                }}
                scaleSize={{
                    variant: 'sqrt',
                    nice: false,
                    size: 'auto',
                }}
            >
                <HeatMapCells cell={HeatMapCircle} />
                <Surface style={{ stroke: '#222222', strokeWidth: 1, fill: '#ffffff00' }} />
                <Axis variant={'left'} label={'Samples'} />
                <Axis variant={'top'}>
                    <AxisTicks
                        variant={'top'}
                        labelStyle={{ textAnchor: 'start', alignmentBaseline: 'middle' }}
                    />
                    <AxisLabel variant={'top'}>Measurements</AxisLabel>
                </Axis>
                <Legend
                    variant={'color'}
                    horizontal={false}
                    position={[500, 0]}
                    size={[100, 180]}
                    anchor={[0, 0]}
                    units={'absolute'}
                >
                    <LegendTitle position={[0, 8]} size={[60, 24]} padding={[0, 8, 0, 8]}>
                        Value (a.u.)
                    </LegendTitle>
                    <LegendSizeScale
                        variant={'right'}
                        padding={[0, 8, 0, 8]}
                        position={[0, 26]}
                        ticks={4}
                        symbol={Circle}
                        symbolStyle={{ stroke: '#555555', strokeWidth: 1 }}
                    />
                </Legend>
                <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
            </HeatMap>
        </Chart>
    )
}