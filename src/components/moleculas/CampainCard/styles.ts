import styled from '@emotion/styled'

export const CampainCardWrapper = styled.div`
  border: 4px solid ${(props) => props.theme.colors.dark};
  border-radius: 6px 28px 28px 6px;
  box-shadow: 10px 10px 4px ${(props) => props.theme.colors.grey['300']};
  padding: 15px;
  background-color: ${(props) => props.theme.colors.green['300']};
  width: 100%;
  margin: 30px 0;
  position: relative;
  transition: 0.5s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 10px black;
  }

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    width: 375px;
    margin: 0;
  }

  .header {
    display: flex;
    align-items: start;
    justify-content: space-between;

    h5 {
      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
      font-size: ${(props) => props.theme.fonts.large};
    }
    .status {
      border-radius: 8px;
      font-weight: bold;
      font-size: ${(props) => props.theme.fonts.xsmall};
      text-align: center;
      padding: 2px 10px;
    }
  }

  .aside {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }

  .link-campaingn {
    color: ${(props) => props.theme.colors.white};
    text-decoration: underline;
  }
`

export const CampainContent = styled.div`
  .chanel {
    margin: 5px 0;

    .label {
      color: ${(props) => props.theme.colors.grey['300']};
      font-size: ${(props) => props.theme.fonts.small};
      font-weight: bold;
    }

    .value {
      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
    }
  }
`
