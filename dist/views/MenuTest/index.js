import React from 'react'
import Menu from '../../components/Menu/menu'
import MenuItem from '../../components/Menu/menuItem'
import SubMenu from '../../components/Menu/subMenu'
export var MenuTest = function () {
    return React.createElement(
        'div',
        null,
        React.createElement('div', null, 'horizontal'),
        React.createElement(
            Menu,
            { mode: 'horizontal' },
            React.createElement(MenuItem, null, 'test 1'),
            React.createElement(MenuItem, null, 'test 2'),
            React.createElement(MenuItem, null, 'test 3'),
            React.createElement(
                SubMenu,
                { title: 'dropdown' },
                React.createElement(MenuItem, null, 'drop1')
            )
        ),
        React.createElement('div', null, 'vertical'),
        React.createElement(
            Menu,
            { defaultIndex: '0', mode: 'vertical' },
            React.createElement(MenuItem, null, 'active'),
            React.createElement(MenuItem, { disabled: true }, 'disabled'),
            React.createElement(MenuItem, null, 'xyz'),
            React.createElement(
                SubMenu,
                { title: 'dropdown' },
                React.createElement(MenuItem, null, 'drop1')
            ),
            React.createElement(
                SubMenu,
                { title: 'opened' },
                React.createElement(MenuItem, null, 'opened1')
            )
        )
    )
}
