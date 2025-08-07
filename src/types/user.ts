export type UserRole = 'individual' | 'agency'
export type PermissionLevel = 'admin' | 'editor' | 'viewer'

export type User = {
  id: string
  name: string
  email: string
  passwordHash: string
  role: UserRole // 'individual' | 'agency'
  isPremium: boolean
  agencyId?: string // Preenchido se for um cliente de agência
  permissions?: PermissionLevel // Define o nível de acesso se for cliente de uma agência
  clients: User[] | null // Apenas 'agency' tem clients, senão é null
  createdAt: string
  updatedAt: string
}
