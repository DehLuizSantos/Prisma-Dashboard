import Button from '@/components/atomos/Button'
import Icon from '@/components/atomos/Icon'

import { ModulesCardWrapper } from './styles'

type ModulesCardProps = {
  image: string
}

export default function ModulesCard({ image }: ModulesCardProps) {
  return (
    <ModulesCardWrapper>
      <Icon svg={image} width={100} height={100} />
      <Button variant="primary">ENTRAR</Button>
    </ModulesCardWrapper>
  )
}
