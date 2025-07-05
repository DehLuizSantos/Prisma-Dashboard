import { Outlet } from 'react-router-dom'

import { LoginTemplateWrapper } from './styles'

export default function LoginTemplate() {
  return (
    <LoginTemplateWrapper>
      <Outlet />
    </LoginTemplateWrapper>
  )
}
