import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

import { theme } from '@/styles/theme'

import { PieChartContainer, PieChartHeader } from './styles'

type PieChartInteractiveProps = {
  data: {
    name: string
    total: number
  }[]
}
export function PieChartInteractive({ data }: PieChartInteractiveProps) {
  return (
    <PieChartContainer>
      <PieChartHeader>
        <h2>Número de campanhas por canal </h2>
      </PieChartHeader>

      <ResponsiveContainer width="100%" height="95%">
        <PieChart width={300} height={300}>
          <Pie dataKey="total" data={data} innerRadius={40} outerRadius={80} fill={theme.colors.green['300']}>
            <Cell key={'Google Ads'} fill={theme.colors.red['100']} />
            <Cell key={'Tik Tol Ads'} fill={theme.colors.blue['300']} />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </PieChartContainer>
  )
}
