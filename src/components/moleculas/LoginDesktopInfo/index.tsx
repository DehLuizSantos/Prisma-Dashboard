import darksideprisma from '../../../assets/DarkSidePrisma.svg'
import { LoginDesktopInfoWrapper } from './styles'

type LoginDesktopInfoProps = {
  title: string
  subtitle: string
}

export function LoginDesktopInfo({ subtitle, title }: LoginDesktopInfoProps) {
  return (
    <LoginDesktopInfoWrapper>
      <img src={darksideprisma} alt="Prisma analitcs" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </LoginDesktopInfoWrapper>
  )
}
