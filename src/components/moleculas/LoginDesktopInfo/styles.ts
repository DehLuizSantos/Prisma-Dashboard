import styled from '@emotion/styled'

export const LoginDesktopInfoWrapper = styled.div`
  display: none;
  border-radius: 120px 180px 120px 50px;
  background-color: ${(props) => props.theme.colors.leaf};
  width: 840px;
  padding: 120px 90px;
  height: 780px;
  text-align: left;

  img {
    width: 100%;
    margin: 30px 0;
  }

  h2 {
    font-weight: bold;
    font-size: ${(props) => props.theme.fonts.xxlarge};
  }

  p {
    color: ${(props) => props.theme.colors.grey['300']};
    margin-top: 15px;
    font-weight: 500;
    font-size: ${(props) => props.theme.fonts.large};
  }

  @media (min-width: 800px) {
    display: block;
  }
`
