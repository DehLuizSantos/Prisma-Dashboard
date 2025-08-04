// campaign.mock.ts
export const mockCampaign = [
  {
    id: 'cmp_001',
    name: 'Campanha Dia das Mães',
    platform: 'google' as 'google' | 'meta' | 'tiktok',
    objective: 'conversions', // ex: traffic | conversions | leads | awareness
    status: 'active', // ex: active | paused | finished
    dailyBudget: 150.0,
    totalBudget: 3000.0,
    startDate: '2025-07-20',
    endDate: '2025-08-01',
    targetAudience: {
      gender: 'all', // all | male | female
      ageRange: [25, 45],
      locations: ['São Paulo', 'Rio de Janeiro'],
      interests: ['moda', 'compras online', 'presentes'],
      languages: ['pt-BR'],
    },
    creatives: [
      {
        id: 'creative_001',
        type: 'image', // image | video | carousel
        url: 'https://example.com/image1.jpg',
        headline: 'O presente ideal para o Dia das Mães',
        description: 'Descontos especiais por tempo limitado!',
        callToAction: 'Shop Now',
      },
    ],
    conversionTracking: {
      pixelId: '1234567890',
      eventName: 'Purchase',
      url: 'https://lojaexemplo.com/agradecimento',
    },
    analytics: {
      impressions: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      conversions: 0,
      spend: 0,
    },
    createdAt: '2025-07-19T14:00:00Z',
    updatedAt: '2025-07-19T14:00:00Z',
  },
]
