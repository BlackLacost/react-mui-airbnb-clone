import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppThemeProvider from './themes/AppThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
)
