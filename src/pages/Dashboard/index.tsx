import { CardDashboardHeader } from '@/components/organismos/CardsDashboarHeader'
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
    </DashboardContainer>
  )
}
