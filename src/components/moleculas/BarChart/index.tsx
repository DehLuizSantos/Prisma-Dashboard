import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { TreeDots } from '@/assets/icons/treeDots'
import { theme } from '@/styles/theme'

import IconMenu, { MenuItem } from '../Menu'
import { BarChartContainer, BarChartHeader } from './styles'

type AreaChartInteractiveProps = {
  data: {
    name: string
    Meta: number
    Google: number
    TikTok: number
  }[]
}
export function AreaChartInteractive({ data }: AreaChartInteractiveProps) {
  const [menuOption, setMenuOption] = useState({ value: 6, label: 'Seis meses' })

  const filteredData = data.slice(0, menuOption.value)

  const items: MenuItem[] = [
    {
      label: 'Mês',
      onClick: () => setMenuOption({ label: 'Mês', value: 1 }),
    },
    {
      label: 'Três meses',
      onClick: () => setMenuOption({ label: 'Três meses', value: 3 }),
    },
    {
      label: 'Seis meses',
      onClick: () => setMenuOption({ label: 'Seis meses', value: 6 }),
    },

    {
      label: 'Ano',
      onClick: () => setMenuOption({ label: 'Ano', value: 12 }),
    },
  ]

  return (
    <BarChartContainer>
      <BarChartHeader>
        <h2>Número de conversões por canal ({menuOption.label})</h2>

        <IconMenu icon={<TreeDots />} items={items!} />
      </BarChartHeader>

      <ResponsiveContainer width="100%" height="95%">
        <BarChart width={500} height={100} data={filteredData}>
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
