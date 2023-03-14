import { useState } from "react"

import IconFacebook from '../../icons/facebook.svg'
import { useAuth } from "../../hooks/auth"

export function SignInFacebook() {
  const [ isClicked, setIsClicked ] = useState(false)
  const { isLoading } = useAuth()
  
  return (
    <>
      <button className={`btn btn-primary btn-outline border-0 lowercase ${isLoading && isClicked ? " loading" : ""}`}
        onClick={() => {
          alert("Facebook login")
          setIsClicked(true)
        }}
      >
      <img src={IconFacebook} alt="Icon Facebook" className="h-[2.4rem]" />acebook
      </button>
    </>
  )
}