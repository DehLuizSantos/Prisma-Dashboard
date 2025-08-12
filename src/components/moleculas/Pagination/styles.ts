import styled from '@emotion/styled'

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
  margin-top: 15px;
`

export const PaginationButton = styled.button<{ active?: boolean; color: string }>`
  padding: 6px 10px;
  border: 1px solid ${({ color }) => color};
  background: ${({ active, color }) => (active ? color : 'transparent')};
  color: ${({ active, color }) => (active ? '#fff' : color)};
  cursor: pointer;
  border-radius: 4px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background: ${({ active, color }) => (active ? color : `${color}22`)};
  }
`
