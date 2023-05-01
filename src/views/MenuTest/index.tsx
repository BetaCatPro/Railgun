import React from 'react'

import Menu from '../../components/Menu/menu'
import MenuItem from '../../components/Menu/menuItem'
import SubMenu from '../../components/Menu/subMenu'

export const MenuTest = () => {
    return (
        <div>
            <div>horizontal</div>
            <Menu mode="horizontal">
                <MenuItem>test 1</MenuItem>
                <MenuItem>test 2</MenuItem>
                <MenuItem>test 3</MenuItem>
                <SubMenu title="dropdown">
                    <MenuItem>drop1</MenuItem>
                </SubMenu>
            </Menu>

            <div>vertical</div>
            <Menu defaultIndex={'0'} mode="vertical">
                <MenuItem>active</MenuItem>
                <MenuItem disabled>disabled</MenuItem>
                <MenuItem>xyz</MenuItem>
                <SubMenu title="dropdown">
                    <MenuItem>drop1</MenuItem>
                </SubMenu>
                <SubMenu title="opened">
                    <MenuItem>opened1</MenuItem>
                </SubMenu>
            </Menu>
        </div>
    )
}
