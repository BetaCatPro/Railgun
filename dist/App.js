import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ButtonTest } from './views/ButtonTest'
import { MenuTest } from './views/MenuTest'
import NotFound from './views/NotFound'
function App() {
    return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(
            'div',
            { className: 'test-context' },
            React.createElement(Link, { to: '/button' }, 'Button \u6D4B\u8BD5'),
            React.createElement(Link, { to: '/menu' }, 'Menu \u6D4B\u8BD5')
        ),
        React.createElement(
            'div',
            { className: 'test-view' },
            React.createElement(
                Routes,
                null,
                React.createElement(Route, {
                    path: '/',
                    element: React.createElement(ButtonTest, null)
                }),
                React.createElement(Route, {
                    path: '/button',
                    element: React.createElement(ButtonTest, null)
                }),
                React.createElement(Route, {
                    path: '/menu',
                    element: React.createElement(MenuTest, null)
                }),
                React.createElement(Route, {
                    path: '*',
                    element: React.createElement(NotFound, null)
                })
            )
        )
    )
}
export default App
