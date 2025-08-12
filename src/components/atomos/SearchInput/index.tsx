import search from '../../../assets/icons/search.svg'
import { IconCustumized, InputCustumized, SearchInputContainer } from './styles'

export default function SearchInput() {
  return (
    <SearchInputContainer>
      <div className="relative">
        <IconCustumized svg={search} />
        <InputCustumized />
      </div>
    </SearchInputContainer>
  )
}
