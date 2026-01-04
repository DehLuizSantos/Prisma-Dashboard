import { LogsUser } from '@/assets/icons/LogsUser'
import { Pencil } from '@/assets/icons/pencil'
import { Trash } from '@/assets/icons/trash'
import { IconButton } from '@/components/atomos/IconButton'
import Tooltip from '@/components/atomos/ToolTip'
import { Pagination } from '@/components/moleculas/Pagination'
import { theme } from '@/styles/theme'

import { TableContainer, TableTd, TableWrapper } from './styles'

export type Header<T> = {
  key: keyof T
  label: string
}

type Props<T> = {
  headers: Header<T>[]
  rows: T[]
  totalData: number
  paginationValue: number
  setPaginationValue: ((value: number) => void) | undefined
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  onLogs?: (row: T) => void
}
const PAGE_SIZE = 5 // define o número de registros por página fixo

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TableCustomized<T extends { [key: string]: any }>({
  headers,
  rows,
  onEdit,
  totalData,
  onDelete,
  paginationValue,
  setPaginationValue,
  onLogs,
}: Props<T>) {
  const totalPages = Math.ceil(totalData / PAGE_SIZE)

  return (
    <TableWrapper>
      {rows!.length === 0 ? (
        <div className="no-data-table-wrapper">
          <p>Não há dados disponíveis</p>
        </div>
      ) : (
        <>
          <TableContainer>
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={String(header.key)}>{header.label}</th>
                ))}
                {(onEdit || onDelete) && <th></th>}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header) => (
                    <td key={String(header.key)}>
                      {Array.isArray(row[header.key]) ? row[header.key].join(', ') : row[header.key]}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td>
                      <TableTd>
                        {onEdit && (
                          <Tooltip position="top" content="Editar">
                            <IconButton
                              icon={<Pencil width={20} height={20} fill={theme.colors.blue['500']} />}
                            ></IconButton>
                          </Tooltip>
                        )}
                        {onDelete && (
                          <Tooltip position="top" content="Deletar">
                            <IconButton
                              icon={<Trash width={20} height={20} fill={theme.colors.red['300']} />}
                            ></IconButton>
                          </Tooltip>
                        )}
                        {onLogs && (
                          <Tooltip position="top" content="Ver logs">
                            <IconButton
                              icon={<LogsUser width={20} height={20} fill={theme.colors.green['500']} />}
                            ></IconButton>
                          </Tooltip>
                        )}
                      </TableTd>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </TableContainer>

          <Pagination
            total={totalPages}
            value={paginationValue}
            onChange={(e) => setPaginationValue!(e)}
            color={theme.colors.grey['300']}
          />
        </>
      )}
    </TableWrapper>
  )
}
