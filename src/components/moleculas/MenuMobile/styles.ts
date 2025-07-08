import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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
    margin: 60px auto;
  }
`

export const Backdrop = styled(motion.div)`
  position: relative;
  top: 66px;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`
