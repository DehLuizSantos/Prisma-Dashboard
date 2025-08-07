import { ChartAreaInteractive } from '@/components/moleculas/BarChart'

import { DashboardChartsWrapper } from './styles'

type DashboardChartsProps = {
  data: {
    name: string
    Meta: number
    Google: number
    TikTok: number
  }[]
}

export function DashboardCharts({ data }: DashboardChartsProps) {
  console.log(data)
  return (
    <DashboardChartsWrapper>
      <ChartAreaInteractive data={data} />
    </DashboardChartsWrapper>
  )
}
