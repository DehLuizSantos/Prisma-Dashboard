import { CardsCampain } from '@/components/organismos/CardsCampain'
import { mockCampaign } from '@/mocks/campaign'

import { CampanhasWrapper } from './styles'

export default function Campanhas() {
  return (
    <CampanhasWrapper>
      <CardsCampain campains={mockCampaign.slice(0, 3)} />
    </CampanhasWrapper>
  )
}
