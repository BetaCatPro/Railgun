import React from 'react'
import Button from '../../components/Button/button'
export var ButtonTest = function () {
    return React.createElement(
        'div',
        null,
        React.createElement(Button, { size: 'sm' }, 'Button'),
        React.createElement(
            Button,
            { btnType: 'primary', size: 'sm' },
            'Button'
        ),
        React.createElement(
            Button,
            { btnType: 'danger', size: 'lg' },
            'Button'
        ),
        React.createElement(
            Button,
            { btnType: 'warning', size: 'lg', disabled: true },
            'Button'
        ),
        React.createElement(
            Button,
            { btnType: 'link', href: 'https://bilibili.com' },
            'B\u7AD9'
        ),
        React.createElement(
            Button,
            { btnType: 'link', href: 'https://bilibili.com', disabled: true },
            'B\u7AD9'
        )
    )
}
