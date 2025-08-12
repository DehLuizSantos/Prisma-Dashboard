import Icon from '@/components/atomos/Icon'
import { theme } from '@/styles/theme'

import setaBaixo from '../../../assets/icons/setaBaixo.svg'
import { PaginationButton, PaginationContainer } from './styles'

type PaginationProps = {
  total: number
  value: number
  onChange: (page: number) => void
  color?: string
}

export const Pagination = ({ total, value, onChange, color = 'black' }: PaginationProps) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1)

  const handleClick = (page: number) => {
    if (page >= 1 && page <= total) {
      onChange(page)
    }
  }

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => handleClick(value - 1)}
        disabled={value === 1}
        color={color}
        style={{ transform: 'rotate(90deg)' }}
      >
        <Icon svg={setaBaixo} fill={theme.colors.grey['300']} width={12} height={7} />
      </PaginationButton>

      {pages.map((page) => (
        <PaginationButton key={page} onClick={() => handleClick(page)} active={page === value} color={color}>
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => handleClick(value + 1)}
        disabled={value === total}
        color={color}
        style={{ transform: 'rotate(270deg)' }}
      >
        <Icon svg={setaBaixo} fill={theme.colors.dark} width={12} height={7} />
      </PaginationButton>
    </PaginationContainer>
  )
}
