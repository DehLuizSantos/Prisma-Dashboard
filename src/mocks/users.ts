import { User } from '@/types/user'

export const usersMock: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@agency.com',
    role: 'manager',
    logs: [
      { timestamp: '2025-08-08T10:15:00Z', action: 'POST', route: '/campaigns' },
      { timestamp: '2025-08-07T14:22:00Z', action: 'PUT', route: '/users/2' },
    ],
    integrations: [
      {
        platform: 'meta',
        accountId: 'meta_001',
        accountName: 'Meta Business Alice',
        connectedAt: '2025-07-01T09:00:00Z',
      },
      {
        platform: 'google',
        accountId: 'google_001',
        accountName: 'Google Ads Alice',
        connectedAt: '2025-07-01T09:10:00Z',
      },
    ],
    createdAt: '2025-07-01T09:00:00Z',
    updatedAt: '2025-08-08T10:00:00Z',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@client.com',
    role: 'client',
    logs: [{ timestamp: '2025-08-08T12:30:00Z', action: 'PUT', route: '/campaigns/1' }],

    integrations: [
      {
        platform: 'meta',
        accountId: 'meta_002',
        accountName: 'Meta Business Bob',
        connectedAt: '2025-07-05T10:00:00Z',
      },
    ],
    createdAt: '2025-07-05T09:00:00Z',
    updatedAt: '2025-08-08T12:00:00Z',
  },
  {
    id: 3,
    name: 'Charlie Guest',
    email: 'charlie@guest.com',
    role: 'guest',
    logs: [{ timestamp: '2025-08-08T08:00:00Z', action: 'POST', route: '/campaigns/2/preview' }],

    integrations: [
      {
        platform: 'google',
        accountId: 'google_003',
        accountName: 'Google Ads Charlie',
        connectedAt: '2025-06-01T09:30:00Z',
      },
    ],
    createdAt: '2025-06-01T09:00:00Z',
    updatedAt: '2025-08-08T08:00:00Z',
  },
]
