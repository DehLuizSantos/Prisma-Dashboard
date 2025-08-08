import { AreaChartInteractive } from '@/components/moleculas/BarChart'
import { LineChartInteractive } from '@/components/moleculas/LineChart'
import { PieChartInteractive } from '@/components/moleculas/PieChart'

import { DashboardChartsWrapper } from './styles'

type DashboardChartsProps = {
  dataArea: {
    name: string
    Meta: number
    Google: number
    TikTok: number
  }[]
  pieByObjective: {
    name: string
    value: number
  }[]
  revenueByChannel: {
    name: string
    value: number
  }[]
  campaignsPerChannel: {
    name: string
    value: number
  }[]
  topRoiCampaigns: {
    name: string
    value: number
  }[]
  returnInvestiment: {
    mes: string
    investimento: number
    retorno: number
    roi: number
  }[]
}

export function DashboardCharts({
  dataArea,
  campaignsPerChannel,
  pieByObjective,
  revenueByChannel,
  topRoiCampaigns,
  returnInvestiment,
}: DashboardChartsProps) {
  return (
    <DashboardChartsWrapper>
      <LineChartInteractive data={returnInvestiment} />
      <AreaChartInteractive data={dataArea} />
      <div className="flex">
        <PieChartInteractive type="campaing" dataKey="value" data2={topRoiCampaigns} data={pieByObjective} />
        <PieChartInteractive
          dataKey="value"
          type="chanel"
          data={campaignsPerChannel}
          data2={revenueByChannel}
          startAngle={180}
          endAngle={0}
        />
      </div>
    </DashboardChartsWrapper>
  )
}
