import { LoginDesktopInfo } from '@/components/moleculas/LoginDesktopInfo'
import { LoginForm } from '@/components/organismos/LoginForm'

export default function Register() {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <LoginForm title="REGISTRAR" />
      <LoginDesktopInfo subtitle="Sua central de controle inteligente." title="Bem vindo de volta!" />
    </>
  )
}
