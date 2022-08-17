import { ReactNode } from 'react'
import { CssProps } from '../general'
import { ThemeSpec } from '../themes'
import { ContainerProps } from '../views'

export type ChartDataContextProps = Record<string, unknown>

export type ChartDataProviderValue = {
    data: ChartDataContextProps
    setData: (d: ChartDataContextProps) => unknown
}

export type ChartDataProviderProps = {
    value: ChartDataProviderValue
    children: ReactNode
}

export interface ChartProps extends Omit<ContainerProps, 'x' | 'y'> {
    /** identifier for the chart */
    id?: string
    /** theme adjustment **/
    theme?: ThemeSpec
    /** data with arbitrary chart settings */
    data?: ChartDataContextProps
    /** list of styles to include in svg **/
    styles?: Array<string>
    /** css style for svg component */
    style?: CssProps
}