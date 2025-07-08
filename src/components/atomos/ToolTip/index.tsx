/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'

import { TooltipBubble, TooltipWrapper } from './styles'

export type TooltipProps = {
  children: React.ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
}

const Tooltip = ({ children, content, position = 'top', delay = 100 }: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  let timeout: ReturnType<typeof setTimeout>

  const showTip = () => {
    timeout = setTimeout(() => {
      setVisible(true)
    }, delay)
  }

  const hideTip = () => {
    clearTimeout(timeout)
    setVisible(false)
  }

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {visible && <TooltipBubble position={position}>{content}</TooltipBubble>}
    </TooltipWrapper>
  )
}

export default Tooltip
