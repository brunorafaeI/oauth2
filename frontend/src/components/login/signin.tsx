import { FormEvent, useCallback, useState } from "react"

import { useAuth } from "../../hooks/auth"

interface FormLoginElement extends HTMLFormControlsCollection {
  name: HTMLInputElement
  email: HTMLInputElement
}

export function Signin() {
  const [isClicked, setIsClicked] = useState(false)
  const {isLoading, getAccessToken} = useAuth()

  const handleSubmitForm = useCallback( async (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const formLogin = form.target as HTMLFormElement
    const {elements} = formLogin

    if (elements.length) {
      const {name, email} = elements as FormLoginElement

      if (name.value && email.value) {
        const credential = { name: name.value, email: email.value }

        getAccessToken(
          credential,
          'login'
        )

        formLogin.reset()
      }
    }

  }, [])

  return (
    <>
      <form 
        onSubmit={handleSubmitForm}
      >
        <div className="form-control w-screen max-w-xs mb-6">
          <label className="label-text mb-1 ml-1" htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-screen max-w-xs mb-6">
          <label className="label-text mb-1  ml-1" htmlFor="email">Email : </label>
          <input type="text" name="email" id="email" className="input input-bordered w-full max-w-xs" />
        </div>

        <button
          type="submit" 
          className={`btn btn-secondary w-full mb-4 ${(isLoading && isClicked ? "loading" : "")}`}
          onClick={() => {
            setIsClicked(true)
          }}
        >
            Log in
        </button>
      </form>
    </>
  )
}