import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 3px solid ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px;
    justify-content: space-between;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 7px;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.white};
  margin: 30px;

  h2 {
    font-size: ${(props) => props.theme.fonts.large};
    font-weight: 400;
  }

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    margin: 0;
  }
`

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;

  .menu-mobile {
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      margin-top: 5px;
      width: 30px;
      height: 30px;
      cursor: pointer;

      @media (min-width: ${(props) => props.theme.responsive.laptop}) {
        display: none;
      }
    }
  }

  .menu-user {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
  gap: 7px;

  p {
    margin-right: 15px;
    font-weight: normal;
  }

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.white};
    justify-content: center;
  }
`

export const MenuContainer = styled(motion.div)`
  position: fixed;
  background-color: ${(props) => props.theme.colors.dark};
  width: 100%;
  top: 66px;
  left: 0;
  height: 100vh;
  z-index: 1000;
  text-align: center;

  img {
    margin: 90px auto;
  }
`

export const Backdrop = styled(motion.div)`
  position: relative;
  top: 66px;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`
