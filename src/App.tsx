import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => { console.log(`hello world`); }}>Hello</Button>
        <Button className="custom" disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger Small Button</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com/" target="_blank">Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com/" disabled>Baidu Link disabled</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
