import React, { useState, createContext } from 'react'
import classNames from 'classnames'

// 使用type字面量来表示
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [ currentActive, setActive ] = useState(defaultIndex)
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  } 
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style}>
      {/* 这里把context 注入到Provider里面了，可以直接通过value来拿了 */}
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu