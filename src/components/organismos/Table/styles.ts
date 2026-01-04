import styled from '@emotion/styled'

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 30px;
  border: 2px solid ${(props) => props.theme.colors.dark};
  border-radius: 8px;
  width: 90%;
  max-width: 1400px;
  /* padding: 15px; */

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    margin: 30px 0;
    overflow-x: visible;
  }
`

export const TableFiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`

export const TableContainer = styled.table`
  color: ${(props) => props.theme.colors.grey['300']};
  overflow-x: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;

  th {
    color: ${(props) => props.theme.colors.grey['500']};
    font-size: ${(props) => props.theme.fonts.small};
    text-align: left;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.leaf};
  }
  td {
    min-width: 150px;
    padding-left: 15px;
    font-size: ${(props) => props.theme.fonts.small};
    color: ${(props) => props.theme.colors.grey['300']};
  }
  tr {
    &:hover {
      opacity: 0.9;
    }
  }
`
export const TableTd = styled.div`
  display: flex;
  gap: 10px;
`
