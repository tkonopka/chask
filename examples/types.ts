import { FC, Ref } from 'react'
import { ChartDataContextProps, ChartRef, RawData } from '@chask/core'

export type MilestoneStep = string | number

export interface MilestoneStory {
    /** data object passed to the 'Chart' component */
    chartData: ChartDataContextProps
    /** ref used to toggle milestones */
    fref?: Ref<ChartRef>
    /** raw dataset used for plotting */
    rawData: RawData
}

export interface ControllerProps {
    /** function that generates a synthetic raw dataset */
    generator: () => RawData
    /** component that renders a chart */
    chart: FC<MilestoneStory>
    /** array of milestones */
    steps: MilestoneStep[]
}