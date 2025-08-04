export type CampaignPlatform = 'google' | 'meta' | 'tiktok'
export type CampaignObjective = 'traffic' | 'conversions' | 'leads' | 'awareness'
export type CampaignStatus = 'active' | 'paused' | 'finished'
export type CreativeType = 'image' | 'video' | 'carousel'
export type GenderTarget = 'all' | 'male' | 'female'

export type Campaign = {
  id: string
  name: string
  platform: CampaignPlatform | string
  objective: CampaignObjective
  status: CampaignStatus
  dailyBudget: number
  totalBudget: number
  startDate: string // ISO date
  endDate: string // ISO date
  targetAudience: {
    gender: GenderTarget
    ageRange: [number, number]
    locations: string[]
    interests: string[]
    languages: string[]
  }
  creatives: Array<{
    id: string
    type: CreativeType
    url: string
    headline: string
    description: string
    callToAction: string
  }>
  conversionTracking: {
    pixelId: string
    eventName: string
    url: string
  }
  analytics: {
    impressions: number
    clicks: number
    ctr: number // taxa de cliques (%)
    cpc: number // custo por clique (R$)
    conversions: number
    spend: number
  }
  createdAt: string // ISO timestamp
  updatedAt: string // ISO timestamp
}
