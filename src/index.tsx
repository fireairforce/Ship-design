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
      <Menu />
      <MenuItem />
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
