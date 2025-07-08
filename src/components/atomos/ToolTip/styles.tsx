import styled from '@emotion/styled'

import { TooltipProps } from '.'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TooltipBubble = styled.div<{
  position: TooltipProps['position']
}>`
  position: absolute;
  padding: 6px 10px;
  background: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.grey['500']};
  font-size: ${(props) => props.theme.fonts.medium};
  font-weight: bold;
  border-radius: 4px 10px 4px 15px;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 5px 2px 2px ${(props) => props.theme.colors.green['300']};
  transition: opacity 0.5s ease;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
            bottom: 100%;
            left: 50%;        
            transform: translateX(-50%);
          `
      case 'bottom':
        return `
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
          `
      case 'left':
        return `
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
          `
      case 'right':
        return `
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
          `
      default:
        return ''
    }
  }}
`
