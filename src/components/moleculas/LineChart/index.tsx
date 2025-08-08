import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { TreeDots } from '@/assets/icons/treeDots'
import { theme } from '@/styles/theme'

import IconMenu, { MenuItem } from '../Menu'
import { LineChartContainer, LineChartHeader } from './styles'

type AreaChartInteractiveProps = {
  data: {
    mes: string
    investimento: number
    retorno: number
    roi: number
  }[]
}
export function LineChartInteractive({ data }: AreaChartInteractiveProps) {
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
    <LineChartContainer>
      <LineChartHeader>
        <h2>Relação retorno investimento ({menuOption.label})</h2>

        <IconMenu icon={<TreeDots />} items={items!} />
      </LineChartHeader>

      <ResponsiveContainer width="100%" height="95%">
        <LineChart width={600} height={300} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investimento" stroke={theme.colors.blue['300']} strokeWidth={5} />
          <Line type="monotone" dataKey="retorno" stroke={theme.colors.red['300']} strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </LineChartContainer>
  )
}
