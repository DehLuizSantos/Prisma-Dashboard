import { mockCampaign } from './campaign'

export const dashboardMock = {
  totalInvested: 8450.0,
  totalRevenue: 15800.0,
  totalCampaignNumber: mockCampaign.length,
  roi: 87.57, // (15800 - 8450) / 8450 * 100

  recentCampaigns: mockCampaign.slice(0, 4),

  revenueByChannel: [
    { name: 'Google Ads', value: 6800 },
    { name: 'Meta Ads', value: 5400 },
    { name: 'TikTok Ads', value: 3600 },
  ],

  campaignsPerChannel: [
    { name: 'Google Ads', total: 4 },
    { name: 'Meta Ads', total: 3 },
    { name: 'TikTok Ads', total: 2 },
  ],

  topRoiCampaigns: [
    { name: 'Campanha Dia das Mães', roi: 122.5 },
    { name: 'Campanha Inverno TikTok', roi: 93.0 },
    { name: 'Campanha Verão Google', roi: 75.4 },
  ],

  pieByObjective: [
    { name: 'Conversões', value: 5 },
    { name: 'Tráfego', value: 3 },
    { name: 'Leads', value: 2 },
    { name: 'Reconhecimento', value: 1 },
  ],
}
