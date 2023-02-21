import { useGoogleLogin } from "@react-oauth/google";
import { useCallback, useEffect, useState } from "react";
import Api from "./http/api";

function App() {
  const [credential, setCredential] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: response => {
      const { code } = response

      if (code) {
        setCredential(code)
        setIsLoggedIn(true)
      }
    },
    onError: () => {
      console.log('Login Failed');
    },
  })

  const getAccessToken = useCallback( async () => {
    const { status, data } = await Api.post('/auth/google', { credential })

    if (status === 200) {
      console.log(data)
    }
    
  }, [credential])

  const SignOut = useCallback(() => {
    console.log('Sign Out')
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      getAccessToken()
    }
  }, [isLoggedIn])

  return (
    <button
      onClick={() => isLoggedIn ? SignOut() : googleLogin()}
    >
      { isLoggedIn ? ("Sign out") : ("Sign in with Google")}
    </button>
  )
}

export default App
