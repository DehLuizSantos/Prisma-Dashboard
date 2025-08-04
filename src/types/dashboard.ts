import { Campaign } from './campaign'

export type DashboardData = {
  totalInvested: number
  totalRevenue: number
  roi: number // percentual
  recentCampaigns: Campaign[]
  totalCampaignNumber: number
  revenueByChannel: {
    name: 'Google Ads' | 'Meta Ads' | 'TikTok Ads'
    value: number
  }[]
  campaignsPerChannel: {
    name: 'Google Ads' | 'Meta Ads' | 'TikTok Ads'
    total: number
  }[]
  topRoiCampaigns: {
    name: string // campanha
    roi: number // percentual
  }[]
  pieByObjective: {
    name: string // tipo de objetivo (ex: "Conversões")
    value: number
  }[]
}
