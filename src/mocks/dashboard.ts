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
  returnInvestiment: [
    { mes: 'Jan', investimento: 5000, retorno: 7500, roi: 50 }, // ROI = ((7500-5000)/5000)*100
    { mes: 'Feb', investimento: 5200, retorno: 6800, roi: 30.77 },
    { mes: 'Mar', investimento: 4800, retorno: 7200, roi: 50 },
    { mes: 'Apr', investimento: 6000, retorno: 9000, roi: 50 },
    { mes: 'May', investimento: 6500, retorno: 8700, roi: 33.85 },
    { mes: 'Jun', investimento: 7000, retorno: 9500, roi: 35.71 },
    { mes: 'Jul', investimento: 6800, retorno: 10200, roi: 50 },
    { mes: 'Aug', investimento: 7200, retorno: 11000, roi: 52.78 },
    { mes: 'Sep', investimento: 7500, retorno: 9800, roi: 30.67 },
    { mes: 'Oct', investimento: 8000, retorno: 12500, roi: 56.25 },
    { mes: 'Nov', investimento: 8500, retorno: 14000, roi: 64.71 },
    { mes: 'Dec', investimento: 9000, retorno: 15000, roi: 66.67 },
  ],
  revenueByChannel: [
    { name: 'Google Ads', value: 6800 },
    { name: 'Meta Ads', value: 5400 },
    { name: 'TikTok Ads', value: 3600 },
  ],

  campaignsPerChannel: [
    { name: 'Google Ads', value: 4 },
    { name: 'Meta Ads', value: 3 },
    { name: 'TikTok Ads', value: 2 },
  ],

  topRoiCampaigns: [
    { name: 'Campanha Dia das Mães', value: 122.5 },
    { name: 'Campanha Inverno TikTok', value: 93.0 },
    { name: 'Campanha Verão Google', value: 75.4 },
  ],

  pieByObjective: [
    { name: 'Conversões', value: 5 },
    { name: 'Tráfego', value: 3 },
    { name: 'Leads', value: 2 },
    { name: 'Reconhecimento', value: 1 },
  ],
}
