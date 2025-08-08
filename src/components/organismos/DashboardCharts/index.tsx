import { ChartAreaInteractive } from '@/components/moleculas/BarChart'
import { PieChartInteractive } from '@/components/moleculas/PieChart'

import { DashboardChartsWrapper } from './styles'

type DashboardChartsProps = {
  dataArea: {
    name: string
    Meta: number
    Google: number
    TikTok: number
  }[]
  DataPie: {
    name: string
    total: number
  }[]
}

export function DashboardCharts({ dataArea, DataPie }: DashboardChartsProps) {
  return (
    <DashboardChartsWrapper>
      <ChartAreaInteractive data={dataArea} />
      <div className="flex">
        <PieChartInteractive data={DataPie} />
        <PieChartInteractive data={DataPie} />
      </div>
    </DashboardChartsWrapper>
  )
}
