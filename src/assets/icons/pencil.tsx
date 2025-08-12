import React from 'react'

export const Pencil = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 44 47" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="22" cy="10" r="8" stroke="#3D2FB8" strokeWidth="4" />
      <path d="M27.5 28C13 24.5 4.33333 37.0333 3 44.0333H23" stroke="#3D2FB8" strokeWidth="4" />
      <rect
        x="37.7808"
        y="31.4142"
        width="5.79872"
        height="10.418"
        transform="rotate(45 37.7808 31.4142)"
        stroke="#3D2FB8"
        strokeWidth="2"
      />
      <path d="M35 42.8717L29 43.7808L29.0294 43.6337L30 38.7808" stroke="#3D2FB8" strokeWidth="2" />
    </svg>
  )
}
