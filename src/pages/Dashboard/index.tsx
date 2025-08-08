import { CardsCampain } from '@/components/organismos/CardsCampain'
import { CardDashboardHeader } from '@/components/organismos/CardsDashboarHeader'
import { DashboardCharts } from '@/components/organismos/DashboardCharts'
import { mockCampaign } from '@/mocks/campaign'
import { dashboardMock } from '@/mocks/dashboard'

import { DashboardContainer } from './styles'

export default function Dashboard() {
  console.log(dashboardMock)

  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <CardDashboardHeader
        totalCampaignNumber={dashboardMock.totalCampaignNumber}
        roi={dashboardMock.roi}
        totalInvested={dashboardMock.totalInvested}
        totalRevenue={dashboardMock.totalRevenue}
      />

      <DashboardCharts dataArea={dashboardMock.convertionsPerChannel} DataPie={dashboardMock.campaignsPerChannel} />
      <CardsCampain campains={mockCampaign.slice(0, 3)} />
    </DashboardContainer>
  )
}
