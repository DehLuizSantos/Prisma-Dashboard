import { LoginDesktopInfo } from '@/components/moleculas/LoginDesktopInfo'
import { LoginForm } from '@/components/organismos/LoginForm'

import { LoginWrapper } from './styles'

export default function Login() {
  const location = useLocation()
  console.log(location)

  return (
    <LoginWrapper>
      <LoginForm title="title" />
      <LoginDesktopInfo subtitle="Sua central de controle inteligente." title="Bem vindo de volta!" />
    </LoginWrapper>
  )
}
