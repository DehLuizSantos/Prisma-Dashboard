import { Outlet } from 'react-router-dom'

import { LoginForm } from '@/components/organismos/LoginForm'

import { LoginTemplateWrapper } from './styles'

export function LoginTemplate() {
  return (
    <LoginTemplateWrapper>
      <LoginForm title="title" />
      <Outlet />
      <div>exemplo</div>
    </LoginTemplateWrapper>
  )
}
