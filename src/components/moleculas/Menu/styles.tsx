import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const MenuWrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  /* padding: 8px; */
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuList = styled(motion.ul)`
  position: absolute;
  right: 0;
  top: calc(30%);
  background-color: ${(props) => props.theme.colors.dark};
  border-radius: 5px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.colors.white};
  width: 185px;
  padding: 18px 0;
  z-index: 1000;
  border: 2px solid ${(props) => props.theme.colors.white};
`

export const MenuItemStyled = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: bold;
  font-size: ${(props) => props.theme.fonts.xsmall};
  text-align: center;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-right: 8px;
  }
`
