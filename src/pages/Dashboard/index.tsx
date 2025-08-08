import { CardDashboardHeader } from '@/components/organismos/CardsDashboarHeader'
import { DashboardCharts } from '@/components/organismos/DashboardCharts'
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

      <DashboardCharts
        returnInvestiment={dashboardMock.returnInvestiment}
        dataArea={dashboardMock.convertionsPerChannel}
        campaignsPerChannel={dashboardMock.campaignsPerChannel}
        pieByObjective={dashboardMock.pieByObjective}
        revenueByChannel={dashboardMock.revenueByChannel}
        topRoiCampaigns={dashboardMock.topRoiCampaigns}
      />
    </DashboardContainer>
  )
}
