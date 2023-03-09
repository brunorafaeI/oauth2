import { useState } from "react"

import { useGoogleLogin } from "@react-oauth/google"
import { useAuth } from "../../hooks/auth"
import IconGoogle from '../../icons/google.svg'

export function SignInGoogle() {
  const [ isClicked, setIsClicked ] = useState(false)
  const { isLoading, getAccessToken } = useAuth()

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
      <button 
        className={`btn btn-primary btn-outline border-0 lowercase ${(isLoading && isClicked ? " loading" : "")}`}
        onClick={() => {
          SignInWithGoogle()
          setIsClicked(true)
        }}
      >
        <img src={IconGoogle} alt="Icon Google" className="h-[2.2rem]" />oogle
      </button>
    </>
  )
}