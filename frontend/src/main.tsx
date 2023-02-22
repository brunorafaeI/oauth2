import { GoogleOAuthProvider } from '@react-oauth/google'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignIn from './pages/login/SignIn'

const clientId = import.meta.env.VITE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={clientId}>
    <SignIn />
  </GoogleOAuthProvider>,
)
