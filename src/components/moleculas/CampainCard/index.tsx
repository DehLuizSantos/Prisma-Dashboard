import { Link } from 'react-router-dom'

import { Pause } from '@/assets/icons/pause'
import { Play } from '@/assets/icons/play'
import { IconButton } from '@/components/atomos/IconButton'
import { theme } from '@/styles/theme'
import { Campaign } from '@/types/campaign'
import { formatPtBrCurrency } from '@/utils/format'
import { formatStatus } from '@/utils/functions'

import { CampainCardWrapper, CampainContent } from './styles'

type CampainCardProps = Pick<
  Campaign,
  | 'name'
  | 'platform'
  | 'totalBudget'
  | 'conversionTracking'
  | 'status'
  | 'objective'
  | 'analytics'
  | 'dailyBudget'
  | 'id'
>
export function CampainCard({
  name,
  status,
  platform,
  objective,
  totalBudget,
  id,
  analytics,
  dailyBudget,
}: CampainCardProps) {
  console.log(platform)

  const campainInfosContent = [
    {
      label: 'Canal',
      value: platform,
    },
    {
      label: 'Tipo de campanha',
      value: objective,
    },
    {
      label: 'Investimento total (R$)',
      value: formatPtBrCurrency(totalBudget),
    },
    {
      label: 'Investimento diário (R$)',
      value: formatPtBrCurrency(dailyBudget),
    },
    {
      label: 'Clicks (CRT)',
      value: analytics.clicks,
    },
    {
      label: 'Taxa por clique',
      value: formatPtBrCurrency(analytics.cpc),
    },
    {
      label: 'Conversões',
      value: analytics.conversions,
    },
    {
      label: 'Custo por resultado (CPR)',
      value: formatPtBrCurrency(analytics.conversions),
    },
  ]
  return (
    <CampainCardWrapper>
      <div className="header">
        <h5>{name}</h5>
        <span
          className="status"
          style={{ backgroundColor: formatStatus(status).background, color: formatStatus(status).color }}
        >
          {formatStatus(status).label}
        </span>
      </div>
      <CampainContent>
        {campainInfosContent.map((info) => (
          <div className="chanel" key={info.label}>
            <span className="label">{info.label}:</span>
            <span className="value"> {info.value}</span>
          </div>
        ))}
      </CampainContent>
      <Link className="link-campaingn" to={`/system/campanhas/${id}`}>
        Ver mais informações
      </Link>
      <div className="aside">
        <IconButton
          onClick={() => console.log('aqui')}
          style={{ background: status === 'active' ? theme.colors.red['100'] : theme.colors.green['500'] }}
          icon={status === 'active' ? <Pause /> : <Play />}
        />
      </div>
    </CampainCardWrapper>
  )
}
