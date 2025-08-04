import { AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'

import { MenuButton, MenuItemStyled, MenuList, MenuWrapper } from './styles'

export type MenuItem = {
  label: string
  icon?: React.ReactNode
  onClick: () => void
}

type IconMenuProps = {
  icon: React.ReactNode
  items: MenuItem[]
}

export default function IconMenu({ icon, items }: IconMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Fecha ao clicar fora (extra)
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <MenuWrapper ref={ref}>
      <MenuButton onClick={() => setOpen(!open)}>{icon}</MenuButton>

      <AnimatePresence>
        {open && (
          <MenuList
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item, index) => (
              <MenuItemStyled
                key={index}
                onClick={() => {
                  item.onClick()
                  setOpen(false)
                }}
              >
                {item.icon}
                {item.label}
              </MenuItemStyled>
            ))}
          </MenuList>
        )}
      </AnimatePresence>
    </MenuWrapper>
  )
}
