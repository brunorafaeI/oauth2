import { useState } from "react"

import { useGoogleLogin } from "@react-oauth/google"
import { useAuth } from "../../hooks/auth"

export function SignInGoogle() {
  const [isClicked, setIsClicked] = useState(false)
  const {isLoading, getAccessToken} = useAuth()

  const SignInWithGoogle = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: response => {
      const { code } = response

      if (code) {
        getAccessToken(code, 'google')
      }
    },
    onError: () => console.log('Login Failed'),
  })
  
  return (
    <>
      <button className={`btn btn-primary ${(isLoading && isClicked ? " loading" : "")}`}
        onClick={() => {
          SignInWithGoogle()
          setIsClicked(true)
        }}
      >
        Google
      </button>
    </>
  )
}