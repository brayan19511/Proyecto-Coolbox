import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
    <AppRouter />
  // {/* </BrowserRouter> */}

)

