import { useState } from "react"

import { useAuth } from "../../hooks/auth"

export function SignInFacebook() {
  const [isClicked, setIsClicked] = useState(false)
  const {isLoading} = useAuth()
  
  return (
    <>
      <button className={`btn btn-primary ${(isLoading && isClicked ? " loading" : "")}`}
        onClick={() => {
          alert("Facebook login")
          setIsClicked(true)
        }}
      >
        Facebook
      </button>
    </>
  )
}