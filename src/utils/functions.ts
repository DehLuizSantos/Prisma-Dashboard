import { theme } from '@/styles/theme'
import { CampaignStatus } from '@/types/campaign'

export const formatStatus = (status: CampaignStatus) => {
  const statusTypes = {
    active: {
      color: theme.colors.green['300'],
      background: theme.colors.green['500'],
      label: 'ATIVO',
    },
    paused: {
      color: theme.colors.red['300'],
      background: theme.colors.red['100'],
      label: 'PAUSADO',
    },
    finished: {
      color: theme.colors.blue['300'],
      background: theme.colors.blue['500'],
      label: 'COMPLETO',
    },
  }

  return statusTypes[status]
}
