// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import './assets/styles/index.scss'
// import App from './App'
// import * as serviceWorker from './serviceWorker'
// library.add(fas)
// const root = createRoot(document.getElementById('root') as HTMLElement)
// root.render(
//     <React.StrictMode>
//         {/* history model */}
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// )
// serviceWorker.unregister()
// 组件库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export { default as Button } from './components/Button'
export { default as Menu } from './components/Menu'
export { default as AutoComplete } from './components/AutoComplete'
export { default as Icon } from './components/Icon'
export { default as Input } from './components/Input'
export { default as Progress } from './components/Progress'
export { default as Transition } from './components/Transition'
export { default as Upload } from './components/Upload'
