import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import AppRouter from './router/AppRouter.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <Provider store={store}>
    <AppRouter />
  </Provider>
  // {/* </BrowserRouter> */}

)
