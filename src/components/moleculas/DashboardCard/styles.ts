import styled from '@emotion/styled'

export const DashboardCardContainer = styled.div`
  border: 3px solid ${(props) => props.theme.colors.dark};
  border-radius: 6px 28px 28px 6px;
  padding: 15px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.leaf};
  margin-top: 30px;
  box-shadow: 10px 10px 4px ${(props) => props.theme.colors.green['300']};

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    width: 250px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${(props) => props.theme.colors.green['300']};
      font-weight: bold;
      font-size: ${(props) => props.theme.fonts.xxlarge};
    }
  }

  .content {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-top: 15px;

    .description {
      p {
        font-size: ${(props) => props.theme.fonts.medium};
        color: ${(props) => props.theme.colors.grey['300']};
        font-weight: 600;
      }

      h5 {
        margin-top: 10px;
        color: ${(props) => props.theme.colors.grey['300']};
        font-weight: bold;
      }
    }
  }
`
