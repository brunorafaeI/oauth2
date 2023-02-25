import { useGoogleLogin } from "@react-oauth/google"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth-store"

export function GoogleLogin() {
  const [credential, setCredential] = useState('')
  const { isLoggedIn, getAccessToken, SignOut } = useAuth()

  const SignInGoogle = useGoogleLogin({
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
    <>
      <div data-theme="halloween">
        <button className="btn btn-secondary"
          onClick={() => isLoggedIn ? SignOut() : SignInGoogle()}
        >
          { isLoggedIn ? ("Sign out") : ("Sign in with Google")}
        </button>
      </div>
    </>
  )
}