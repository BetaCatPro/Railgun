import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header>
        <Menu onSelect={(index)=>{console.log(index)}} mode="veetical">
          <MenuItem>demo 0</MenuItem>
          <SubMenu title={'dropitem'}>
            <MenuItem>demo 11</MenuItem>
            <MenuItem>demo 22</MenuItem>
          </SubMenu>
          <MenuItem>demo 1</MenuItem>
          <MenuItem>demo 2</MenuItem>
        </Menu>
      </header>
        <Button>Hello</Button>
        <Button btnType={ButtonType.Primary}>ew</Button>
        <Button size={ButtonSize.Large}>big</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">baidu</Button>
    </div>
  );
}

export default App;
