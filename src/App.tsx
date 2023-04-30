import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { ButtonTest } from './views/ButtonTest'
import NotFound from './views/NotFound'

function App() {
    return (
        <div className="App">
            <div className="test-context">
                <Link to="/button">Button 测试</Link>
            </div>

            <div className="test-view">
                <Routes>
                    <Route path="/" element={<ButtonTest />} />
                    <Route path="/button" element={<ButtonTest />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
