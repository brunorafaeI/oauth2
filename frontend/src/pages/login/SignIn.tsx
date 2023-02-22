import { useGoogleLogin } from "@react-oauth/google"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth-store"

export default function SignIn() {
  const [credential, setCredential] = useState('')
  const { isLoggedIn, getAccessToken, SignOut } = useAuth()

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: response => {
      const { code } = response

      if (code) {
        setCredential(code)
      }
    },
    onError: () => console.log('Login Failed'),
  })

  useEffect(() => {
    if (credential) {
      getAccessToken(credential)
    }
  }, [credential])

  return (
    <button
      onClick={() => isLoggedIn ? SignOut() : googleLogin()}
    >
      { isLoggedIn ? ("Sign out") : ("Sign in with Google")}
    </button>
  )
}

