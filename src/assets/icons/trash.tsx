import React from 'react'

import { theme } from '@/styles/theme'

export const Trash = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 42 47" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="22" cy="10" r="8" stroke={theme.colors.red['300']} strokeWidth="4" />
      <path d="M27.5 28C13 24.5 4.33333 37.0333 3 44.0333H23" stroke={theme.colors.red['300']} strokeWidth="4" />
      <line x1="29.4142" y1="34.5858" x2="40.0208" y2="45.1924" stroke={theme.colors.red['300']} strokeWidth="4" />
      <line x1="29.5858" y1="45.1924" x2="40.1924" y2="34.5858" stroke={theme.colors.red['300']} strokeWidth="4" />
    </svg>
  )
}
