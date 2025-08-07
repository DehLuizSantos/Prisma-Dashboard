import ModulesCard from '@/components/moleculas/ModulesCard'

import RonRon from '../../assets/Logos/LogoRonron.svg'
import { ModulesContainer, ModulesWrapper } from './styles'

export default function Modulos() {
  const modules = [
    {
      name: 'RonRon CatShop',
      link: '',
      image: RonRon,
    },
  ]
  return (
    <ModulesWrapper>
      <h2>Bem vindo de volta</h2>
      <p>Escolha um môdulo</p>

      <ModulesContainer>
        {modules.map((module) => (
          <ModulesCard image={module.image} key={module.name} />
        ))}
      </ModulesContainer>
    </ModulesWrapper>
  )
}
