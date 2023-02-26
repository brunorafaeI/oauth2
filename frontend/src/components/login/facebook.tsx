import { useGoogleLogin } from "@react-oauth/google"
import { useAuth } from "../../hooks/auth"

export function SignInFacebook() {
  const { isLoading, isLoggedIn, getAccessToken, SignOut } = useAuth()

  const SignInWithGoogle = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: response => {
      const { code } = response

      if (code) {
        getAccessToken(code)
      }
    },
    onError: () => console.log('Login Failed'),
  })
  
  return (
    <>
      <button className={`btn btn-primary ${(isLoading ? " loading" : "")}`}
        onClick={() => isLoggedIn ? SignOut() : SignInWithGoogle()}
      >
        { isLoggedIn ? ("Sign out") : ("Facebook")}
      </button>
    </>
  )
}