export type UserRole = 'manager' | 'client' | 'guest'

export type UserLogAction = 'POST' | 'PUT' | 'DELETE'

export type UserLog = {
  timestamp: string // ISO date
  action: UserLogAction
  route: string
}

export type IntegrationPlatform = 'meta' | 'google'

export type Integration = {
  platform: IntegrationPlatform
  accountId: string
  accountName: string
  connectedAt: string // ISO date
}

// Tipagens que você já definiu
export type CampaignPlatform = 'google' | 'meta' | 'tiktok'
export type CampaignObjective = 'traffic' | 'conversions' | 'leads' | 'awareness'
export type CampaignStatus = 'active' | 'paused' | 'finished'
export type CreativeType = 'image' | 'video' | 'carousel'
export type GenderTarget = 'all' | 'male' | 'female'

export type User = {
  id: number
  name: string
  email: string
  role: UserRole
  logs: UserLog[]
  integrations: Integration[]
  createdAt: string
  updatedAt: string
}
