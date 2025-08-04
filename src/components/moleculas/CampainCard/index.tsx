import { Campaign } from '@/types/campaign'
import { formatPtBrCurrency } from '@/utils/format'
import { formatStatus } from '@/utils/functions'

import { CampainCardWrapper, CampainContent } from './styles'

type CampainCardProps = Pick<
  Campaign,
  'name' | 'platform' | 'totalBudget' | 'conversionTracking' | 'status' | 'objective' | 'analytics' | 'dailyBudget'
>
export function CampainCard({
  name,
  status,
  platform,
  objective,
  totalBudget,
  analytics,
  dailyBudget,
}: CampainCardProps) {
  console.log(platform)
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
        <div className="chanel">
          <span className="label">Canal:</span>
          <span className="value"> {platform}</span>
        </div>
        <div className="chanel">
          <span className="label">Tipo de campanha:</span>
          <span className="value"> {objective}</span>
        </div>
        <div className="chanel">
          <span className="label">Investimento total (R$):</span>
          <span className="value"> {formatPtBrCurrency(totalBudget)}</span>
        </div>
        <div className="chanel">
          <span className="label">Investimento diário (R$):</span>
          <span className="value"> {formatPtBrCurrency(dailyBudget)}</span>
        </div>
        <div className="chanel">
          <span className="label">Clicks (CRT):</span>
          <span className="value"> {analytics.clicks}</span>
        </div>
        <div className="chanel">
          <span className="label">Taxa de cliques :</span>
          <span className="value"> {formatPtBrCurrency(analytics.cpc)}</span>
        </div>
        <div className="chanel">
          <span className="label">Conversões :</span>
          <span className="value"> {analytics.conversions}</span>
        </div>
        <div className="chanel">
          <span className="label">Custo por resultado (CPR):</span>
          <span className="value"> {formatPtBrCurrency(analytics.conversions)}</span>
        </div>
      </CampainContent>
    </CampainCardWrapper>
  )
}
