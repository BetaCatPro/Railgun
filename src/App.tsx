import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
        <Button>Hello</Button>
        <Button btnType={ButtonType.Primary}>ew</Button>
        <Button size={ButtonSize.Large}>ew</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">sa</Button>
    </div>
  );
}

export default App;
