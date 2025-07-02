import { InputHTMLAttributes } from 'react'

import { InputWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
  variant: 'dark' | 'white'
  error?: string
}
export default function Input({ icon, variant, error, ...rest }: InputProps) {
  return (
    <InputWrapper>
      {variant === 'dark' ? (
        <>
          {icon && <img src={icon} />}
          <input {...rest} />
        </>
      ) : (
        <>
          <input {...rest} />
          {error && <p>{error}</p>}
        </>
      )}
    </InputWrapper>
  )
}
