import { CampainCard } from '@/components/moleculas/CampainCard'
import { Campaign } from '@/types/campaign'

import { CardsCampainContainer } from './styles'

type CardsCampainProps = {
  campains: Campaign[]
}
export function CardsCampain({ campains }: CardsCampainProps) {
  return (
    <CardsCampainContainer>
      <h3>Últimas campanhas</h3>
      <div className="campains">
        {campains.map((campain) => (
          <CampainCard
            id={campain.id}
            key={campain.id}
            analytics={campain.analytics}
            conversionTracking={campain.conversionTracking}
            name={campain.name}
            platform={campain.platform}
            dailyBudget={campain.dailyBudget}
            status={campain.status}
            totalBudget={campain.totalBudget}
            objective={campain.objective}
          />
        ))}
      </div>
    </CardsCampainContainer>
  )
}
