import React from 'react'

import Button from '@/components/atomos/Button'
import Input from '@/components/atomos/Input'

import email from '../../../assets/icons/email.svg'
import password from '../../../assets/icons/password.svg'
import user from '../../../assets/icons/user.svg'
import logo from '../../../assets/LogoPrisma.svg'
import { LoginFormForm, LoginFormWrapper } from './styles'

type LoginFormProps = {
  title: string
}
type RouteKey = 'login' | 'registrar' | 'recuperar'

export function LoginForm({ title }: LoginFormProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const route = location.pathname.replace('/', '') as 'login' | 'registrar' | 'recuperar'

  const RenderInputsByRoute = useCallback(() => {
    const routes: Record<RouteKey, React.ReactNode> = {
      login: (
        <>
          <Input autoFocus icon={email} variant="dark" type="email" autoComplete="username" placeholder="EMAIL" />
          <Input
            icon={password}
            variant="dark"
            type="password"
            autoComplete="current-password"
            placeholder="PASSWORD"
          />
        </>
      ),
      registrar: (
        <>
          <Input autoFocus icon={user} variant="dark" type="text" autoComplete="name" placeholder="USUÁRIO" />
          <Input icon={email} variant="dark" type="email" autoComplete="username" placeholder="EMAIL" />
          <Input
            icon={password}
            variant="dark"
            type="password"
            autoComplete="current-password"
            placeholder="PASSWORD"
          />
        </>
      ),
      recuperar: (
        <Input autoFocus icon={email} variant="dark" type="email" autoComplete="username" placeholder="EMAIL" />
      ),
    }

    return routes[route] ?? null
  }, [route])

  return (
    <LoginFormWrapper>
      <img src={logo} alt="Prisma Analitcs" />
      <h2>{title}</h2>

      <LoginFormForm>
        {RenderInputsByRoute()}
        {route === 'login' && (
          <div className="recuperar">
            <p>Esqueceu sua senha? </p>
            <span onClick={() => navigate('/recuperar')}>Recuperar</span>
          </div>
        )}
        <Button variant="primary">ENTRAR</Button>
      </LoginFormForm>

      <div className="recuperar mt-auto">
        <p>{route === 'login' ? 'Não' : 'Já'} possui uma conta? </p>
        {route === 'login' ? (
          <span onClick={() => navigate('/registrar')}>Registrar</span>
        ) : (
          <span onClick={() => navigate('/login')}>Logar</span>
        )}
      </div>
    </LoginFormWrapper>
  )
}
