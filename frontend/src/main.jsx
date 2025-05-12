import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
import './main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App component being wrapped by browser router enables use of routing for react application  */}
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </StrictMode>,
)
