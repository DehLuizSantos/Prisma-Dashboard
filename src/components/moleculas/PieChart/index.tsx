import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

import { TreeDots } from '@/assets/icons/treeDots'
import { theme } from '@/styles/theme'

import IconMenu, { MenuItem } from '../Menu'
import { PieChartContainer, PieChartHeader } from './styles'

type PieChartInteractiveProps = {
  data: {
    name: string
    value?: number
  }[]
  data2: {
    name: string
    value?: number
  }[]
  endAngle?: number
  startAngle?: number
  dataKey: string
  type: 'chanel' | 'campaing'
}
export function PieChartInteractive({ endAngle, startAngle, dataKey, data, data2, type }: PieChartInteractiveProps) {
  const [chanelItem, setItemsChanel] = useState({ value: data, label: 'Número de campanhas por canal' })
  const [campaingItem, setCampaingItem] = useState({ value: data, label: 'Objetivos de campanhas' })

  const COLORS = [
    theme.colors.red['100'],
    theme.colors.blue['300'],
    theme.colors.green['300'],
    theme.colors.red['300'],
    theme.colors.blue['500'],
  ]

  const itemsChanel: MenuItem[] = [
    {
      label: 'Campanhas por canal',
      onClick: () => setItemsChanel({ label: 'Número de campanhas por canal', value: data }),
    },
    {
      label: 'Receita por canal',
      onClick: () => setItemsChanel({ label: 'Receita por canal', value: data2 }),
    },
  ]
  const itemsCampaing: MenuItem[] = [
    {
      label: 'Objetivos de campanhas',
      onClick: () => setCampaingItem({ label: 'Objetivos de campanhas', value: data }),
    },
    {
      label: 'Campanhas com melhor ROI',
      onClick: () => setCampaingItem({ label: 'Melhores campanhas (ROI)', value: data2 }),
    },
  ]

  return (
    <PieChartContainer>
      <PieChartHeader>
        <h2>{type === 'chanel' ? chanelItem.label : campaingItem.label} </h2>
        <IconMenu icon={<TreeDots />} items={type === 'chanel' ? itemsChanel! : itemsCampaing} />
      </PieChartHeader>

      <ResponsiveContainer width="100%" height="95%">
        <PieChart width={500} height={500}>
          <Pie
            dataKey={dataKey}
            data={type === 'chanel' ? chanelItem.value : campaingItem.value}
            innerRadius={40}
            outerRadius={80}
            fill={theme.colors.green['300']}
            endAngle={endAngle}
            startAngle={startAngle}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </PieChartContainer>
  )
}
