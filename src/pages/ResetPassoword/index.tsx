import { LoginDesktopInfo } from '@/components/moleculas/LoginDesktopInfo'
import { LoginForm } from '@/components/organismos/LoginForm'

export default function ResetPassword() {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <LoginForm title="RECUPERAR" />
      <LoginDesktopInfo subtitle="Acesse seu email para recuperar sua senha" title="Recupere sua senha" />
    </>
  )
}
