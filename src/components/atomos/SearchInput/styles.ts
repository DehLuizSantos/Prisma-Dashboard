import styled from '@emotion/styled'

import Icon from '../Icon'

export const SearchInputContainer = styled.div`
  .relative {
    position: relative;
  }
`

export const InputCustumized = styled.input`
  width: 100%;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.white};
  padding: 8px 8px 8px 40px;
  font-size: 0.875rem;
  box-shadow: 5px 5px 4px ${(props) => props.theme.colors.green['300']};
  color: ${(props) => props.theme.colors.grey['500']};
  font-weight: 900;

  &::placeholder {
    color: var(--gray-icons);
  }
`

export const IconCustumized = styled(Icon)`
  position: absolute;
  top: 60%;
  left: 12px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.grey['300']};
`
