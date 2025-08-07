import { IconButtonWrapper } from './styles'

interface IconButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: React.ReactNode
}

export const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return <IconButtonWrapper {...props}>{icon}</IconButtonWrapper>
}
