import { Chart, Axis, GridLines, Legend, Tooltip } from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { downloadTheme } from '@chsk/themes'
import { InsetBorderFilter } from '@chsk/annotation'
import { generateBarData } from './generators'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const stackedIds = ['A', 'B', 'C', 'D', 'E', 'F']
export const stackedKeys = ['alpha', 'beta', 'gamma', 'delta', 'epsilon']
export const generateStackedData = () =>
    generateBarData({
        ids: stackedIds,
        keys: stackedKeys,
        interval: [5, 25],
    })

export const StackedVerticalBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="stacked-vertical"
            size={[480, 400]}
            padding={[40, 120, 60, 60]}
            theme={downloadTheme}
        >
            <InsetBorderFilter id={'inset'} floodColor={'#000000'} floodOpacity={0.5} r={2} />
            <Bar
                data={rawData}
                keys={stackedKeys}
                variant={'stacked'}
                scaleIndex={{
                    variant: 'band',
                    domain: stackedIds,
                    padding: 0.2,
                }}
            >
                <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <Axis variant={'bottom'} label={'Samples'} />
                <Axis variant={'left'} label={'Measurements (a.u.)'} />
                <Bars modifiers={{ onMouseEnter: { filter: 'url(#inset)' }, onMouseLeave: {} }} />
                <Tooltip />
                <Legend
                    position={[310, 280]}
                    positionUnits={'absolute'}
                    size={[80, 120]}
                    sizeUnits={'absolute'}
                    anchor={[0, 1]}
                    padding={[0, 12, 0, 12]}
                    r={10.5}
                    itemSize={[80, 23]}
                    itemPadding={[1, 2, 2, 1]}
                    title={'Groups'}
                />
                <DownloadButtons position={[320, 350]} data image />
            </Bar>
        </Chart>
    )
}
