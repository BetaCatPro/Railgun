import React from 'react'

import Menu from '../../components/Menu/menu'
import MenuItem from '../../components/Menu/menuItem'

export const MenuTest = () => {
    return (
        <div>
            <div>horizontal</div>
            <Menu mode="horizontal">
                <MenuItem>test 1</MenuItem>
                <MenuItem>test 2</MenuItem>
                <MenuItem>test 3</MenuItem>
            </Menu>

            <div>vertical</div>
            <Menu mode="vertical">
                <MenuItem>test 1</MenuItem>
                <MenuItem>test 2</MenuItem>
                <MenuItem>test 3</MenuItem>
            </Menu>
        </div>
    )
}
