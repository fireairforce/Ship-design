import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <Button className="custom">hello</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType="primary" size="lg">Large Primary Button</Button>
      <Button btnType="danger" size="sm">Small Danger Button</Button>
      <Button btnType="link" href="http://www.baidu.com" target="__blank">Link Button</Button>
      <Button btnType="link" href="http://www.baidu.com" disabled>Disabled Link Button</Button>
      <hr />
      <Menu defaultIndex={0} onSelect={ (index) => { alert(index) } }>
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1} disabled>
          cool link2
        </MenuItem>
        <MenuItem index={2}>
          cool link3
        </MenuItem>
      </Menu>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
