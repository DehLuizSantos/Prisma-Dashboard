import { mockCampaign } from './campaign'

export const dashboardMock = {
  totalInvested: 8450.0,
  totalRevenue: 15800.0,
  totalCampaignNumber: mockCampaign.length,
  roi: 87.57,
  recentCampaigns: mockCampaign,
  convertionsPerChannel: [
    {
      name: 'Janeiro',
      Meta: 4000,
      Google: 2400,
      TikTok: 500,
    },
    {
      name: 'Fevereiro',
      Meta: 3000,
      Google: 1398,
      TikTok: 500,
    },
    {
      name: 'Março',
      Meta: 2000,
      Google: 9800,
      TikTok: 500,
    },
    {
      name: 'abril',
      Meta: 2780,
      Google: 3908,
      TikTok: 500,
    },
    {
      name: 'Maio',
      Meta: 1890,
      Google: 4800,
      TikTok: 500,
    },
    {
      name: 'Junho',
      Meta: 2390,
      Google: 3800,
      TikTok: 500,
    },
    {
      name: 'Julho',
      Meta: 3490,
      Google: 4300,
      TikTok: 500,
    },
    {
      name: 'Agosto',
      Meta: 3490,
      Google: 4300,
      TikTok: 500,
    },
    {
      name: 'Setembro',
      Meta: 3490,
      Google: 4300,
      TikTok: 500,
    },
    {
      name: 'Outubro',
      Meta: 3490,
      Google: 4300,
      TikTok: 500,
    },
    {
      name: 'Novembro',
      Meta: 3490,
      Google: 4300,
      TikTok: 500,
    },
    {
      name: 'Dezembro',
      Meta: 3490,
      Google: 4300,
      TikTok: 500,
    },
  ],
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
