import React, { ButtonHTMLAttributes } from 'react'

import { ButtonWrapper } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  variant: 'primary' | 'outline'
  error?: string
  children: React.ReactNode
}
export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonWrapper>
      <button {...rest}>{children}</button>
    </ButtonWrapper>
  )
}
