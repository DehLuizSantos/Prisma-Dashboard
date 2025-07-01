import Button from '@/components/Atomos/Button'
import Input from '@/components/Atomos/Input'

import email from '../../../assets/icons/email.svg'
import password from '../../../assets/icons/password.svg'
import logo from '../../../assets/LogoPrisma.svg'
import { LoginFormForm, LoginFormWrapper } from './styles'

type LoginFormProps = {
  title: string
}
export function LoginForm({ title }: LoginFormProps) {
  const navigate = useNavigate()

  return (
    <LoginFormWrapper>
      <img src={logo} alt="Prisma Analitcs" />
      <h2>{title}</h2>

      <LoginFormForm>
        <Input icon={email} variant="dark" type="email" autoComplete="username" placeholder="EMAIL" />
        <Input icon={password} variant="dark" type="password" autoComplete="current-password" placeholder="PASSWORD" />
        <div className="recuperar">
          <p>Esqueceu sua senha? </p>
          <span onClick={() => navigate('/recuperar')}>Recuperar</span>
        </div>
        <Button variant="primary">ENTRAR</Button>
      </LoginFormForm>
      <div className="recuperar mt-auto">
        <p>Não possui uma conta? </p>
        <span onClick={() => navigate('/registrar')}>Registrar</span>
      </div>
    </LoginFormWrapper>
  )
}
