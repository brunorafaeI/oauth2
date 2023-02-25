import { GoogleOAuthProvider } from '@react-oauth/google'
import ReactDOM from 'react-dom/client'

import Login from './pages/login'

import './global.css'

const clientId = import.meta.env.VITE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={clientId}>
    <Login />
  </GoogleOAuthProvider>,
)
