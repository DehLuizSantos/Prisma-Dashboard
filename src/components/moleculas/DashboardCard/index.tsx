import React from 'react'

import { TreeDots } from '@/assets/icons/treeDots'

import IconMenu, { MenuItem } from '../Menu'
import { DashboardCardContainer } from './styles'

export type DashboardCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  hasMenu: boolean
  type?: string
  items?: MenuItem[]
}
export default function DashboardCard({ title, hasMenu, description, type, icon, items }: DashboardCardProps) {
  return (
    <DashboardCardContainer>
      <div className="header">
        <h3>{title}</h3>
        {hasMenu && <IconMenu icon={<TreeDots />} items={items!} />}
      </div>
      <div className="content">
        <div className="description">
          <p>{description}</p>
          <h5>{type}</h5>
        </div>
        {icon}
      </div>
    </DashboardCardContainer>
  )
}
