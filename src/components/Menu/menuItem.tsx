import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect) {
      if (context.onSelect && !disabled) {
        context.onSelect(index as number)
      }
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      { children }
    </li>
  )
}

export default MenuItem