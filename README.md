## React Hooks + TypeScript 开发 UI 组件库

#### Log

组件测试痛点：以 App 为入口，每次需写繁琐的测试页面代码

App.tsx

```javascript
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { ButtonTest } from './views/ButtonTest'
import { MenuTest } from './views/MenuTest'
import NotFound from './views/NotFound'

function App() {
    return (
        <div className="App">
            <div className="test-context">
                <Link to="/button">Button 测试</Link>
                <Link to="/menu">Menu 测试</Link>
            </div>

            <div className="test-view">
                <Routes>
                    <Route path="/" element={<ButtonTest />} />
                    <Route path="/button" element={<ButtonTest />} />
                    <Route path="/menu" element={<MenuTest />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
```

index.tsx

```javascript
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

```

解决办法：采用 [Stroybook](https://storybook.js.org/docs/react/get-started/install) 方式管理，取消 App.tsx 入口

```bash
npx storybook@latest init
```

To run storybook you need to have node 16 or higher
