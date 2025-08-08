import styled from '@emotion/styled'

export const PieChartContainer = styled.div`
  border-radius: 8px 12px 12px 8px;
  border: 4px solid ${(props) => props.theme.colors.dark};
  padding: 30px;
  box-shadow: 10px 10px 4px ${(props) => props.theme.colors.green['300']};
  height: 400px;
  width: 100%;
`

export const PieChartHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  h2 {
    margin-top: 0;
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.grey['300']};
    font-size: ${(props) => props.theme.fonts.large};
  }
`
