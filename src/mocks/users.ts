import { User } from '@/types/user'

export const agencyUser: User = {
  id: 'usr_001',
  name: 'Agência Alpha',
  email: 'contato@alpha.com',
  passwordHash: 'hashed_password',
  role: 'agency',
  isPremium: true,
  clients: [
    {
      id: 'usr_002',
      name: 'João da Silva',
      email: 'joao@gmail.com',
      passwordHash: 'hashed_password',
      role: 'individual',
      isPremium: false,
      agencyId: 'usr_001',
      permissions: 'editor',
      clients: null,
      createdAt: '2025-07-19T14:00:00Z',
      updatedAt: '2025-07-19T14:00:00Z',
    },
    {
      id: 'usr_003',
      name: 'Maria Oliveira',
      email: 'maria@gmail.com',
      passwordHash: 'hashed_password',
      role: 'individual',
      isPremium: false,
      agencyId: 'usr_001',
      permissions: 'viewer',
      clients: null,
      createdAt: '2025-07-19T15:00:00Z',
      updatedAt: '2025-07-19T15:00:00Z',
    },
  ],
  createdAt: '2025-07-19T13:00:00Z',
  updatedAt: '2025-07-19T14:00:00Z',
}

export const individualUser: User = {
  id: 'usr_004',
  name: 'Carlos Lima',
  email: 'carlos@gmail.com',
  passwordHash: 'hashed_password',
  role: 'individual',
  isPremium: false,
  clients: null,
  createdAt: '2025-07-19T16:00:00Z',
  updatedAt: '2025-07-19T16:00:00Z',
}
