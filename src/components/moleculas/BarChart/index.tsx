import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { TreeDots } from '@/assets/icons/treeDots'
import { theme } from '@/styles/theme'

import IconMenu, { MenuItem } from '../Menu'
import { BarChartContainer, BarChartHeader } from './styles'

type ChartAreaInteractiveProps = {
  data: {
    name: string
    Meta: number
    Google: number
    TikTok: number
  }[]
}
export function ChartAreaInteractive({ data }: ChartAreaInteractiveProps) {
  const [menuOption, setMenuOption] = useState('Seis meses')

  const items: MenuItem[] = [
    {
      label: 'Semana',
      onClick: () => setMenuOption('Semana'),
    },
    {
      label: 'Mês',
      onClick: () => setMenuOption('Mês'),
    },
    {
      label: 'Seis meses',
      onClick: () => setMenuOption('Seis meses'),
    },

    {
      label: 'Ano',
      onClick: () => setMenuOption('Ano'),
    },
  ]

  return (
    <BarChartContainer>
      <BarChartHeader>
        <h2>Número de conversões por canal ({menuOption})</h2>

        <IconMenu icon={<TreeDots />} items={items!} />
      </BarChartHeader>

      <ResponsiveContainer width="100%" height="95%">
        <BarChart width={500} height={100} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Meta"
            fill={theme.colors.blue['300']}
            activeBar={<Rectangle fill={theme.colors.blue['500']} stroke={theme.colors.dark} />}
          />
          <Bar
            dataKey="Google"
            fill={theme.colors.red['100']}
            activeBar={<Rectangle fill={theme.colors.red['300']} stroke={theme.colors.dark} />}
          />
          <Bar
            dataKey="TikTok"
            fill={theme.colors.green['300']}
            activeBar={<Rectangle fill={theme.colors.green['500']} stroke={theme.colors.dark} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </BarChartContainer>
  )
}
