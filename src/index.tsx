import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './assets/styles/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

library.add(fas)

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        {/* history model */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

serviceWorker.unregister()
