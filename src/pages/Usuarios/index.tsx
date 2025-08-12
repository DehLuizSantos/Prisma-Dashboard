import Table, { Header } from '@/components/organismos/Table'
import { usersMock } from '@/mocks/users'
import { User } from '@/types/user'

import { UsuariosWrapper } from './styles'

export default function Usuarios() {
  const [pagination, setPagination] = useState(1)
  console.log(usersMock)
  const headers: Header<User>[] = [
    { key: 'email', label: 'Email' },
    { key: 'name', label: 'Nome' },
    { key: 'role', label: 'Tipo' },
    { key: 'updatedAt', label: 'Última att' },
  ]
  return (
    <UsuariosWrapper>
      <h2>Usuários</h2>

      <Table
        headers={headers}
        totalData={usersMock.length}
        paginationValue={pagination}
        onDelete={(e) => console.log(e)}
        onEdit={(e) => console.log(e)}
        onLogs={(e) => console.log(e)}
        rows={usersMock}
        setPaginationValue={setPagination}
      />
    </UsuariosWrapper>
  )
}
