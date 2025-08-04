import { BullSeyeArrow } from '@/assets/icons/BullSeyeArrow'
import { CampainGraph } from '@/assets/icons/CampainGraph'
import { GraphMoney } from '@/assets/icons/graphMoney'
import { Money } from '@/assets/icons/money'
import DashboardCard, { DashboardCardProps } from '@/components/moleculas/DashboardCard'
import { DashboardData } from '@/types/dashboard'
import { formatPtBrCurrency } from '@/utils/format'

import { CardsDashboardHeaderContainer } from './styles'

type CardDashboardHeaderProps = Pick<DashboardData, 'roi' | 'totalInvested' | 'totalRevenue' | 'totalCampaignNumber'>

export function CardDashboardHeader({
  roi,
  totalInvested,
  totalRevenue,
  totalCampaignNumber,
}: CardDashboardHeaderProps) {
  const cards: DashboardCardProps[] = [
    {
      description: 'Investimento total',
      type: 'Ano',
      hasMenu: true,
      icon: <Money />,
      title: formatPtBrCurrency(totalInvested),
      items: [
        {
          label: 'Ver mensal',
          onClick: () => console.log('mensal'),
        },
        {
          label: 'Ver anual',
          onClick: () => console.log('mensal'),
        },
        {
          label: 'Ver semanal',
          onClick: () => console.log('mensal'),
        },
      ],
    },
    {
      description: 'Retorno Total',
      type: 'Ano',
      hasMenu: true,
      icon: <GraphMoney />,
      title: formatPtBrCurrency(totalRevenue),
      items: [
        {
          label: 'Ver mensal',
          onClick: () => console.log('mensal'),
        },
        {
          label: 'Ver ano',
          onClick: () => console.log('mensal'),
        },
        {
          label: 'Ver semana',
          onClick: () => console.log('mensal'),
        },
      ],
    },
    {
      description: 'ROI geral',
      type: 'Ano',
      hasMenu: true,
      icon: <BullSeyeArrow />,
      title: `${roi}%`,
      items: [
        {
          label: 'Ver mensal',
          onClick: () => console.log('mensal'),
        },
      ],
    },
    {
      description: 'Campanhas Cadastradas',
      hasMenu: false,
      icon: <CampainGraph />,
      title: String(totalCampaignNumber),
    },
  ]
  return (
    <CardsDashboardHeaderContainer>
      {cards.map((card: DashboardCardProps, index) => (
        <DashboardCard {...card} key={index} />
      ))}
    </CardsDashboardHeaderContainer>
  )
}
