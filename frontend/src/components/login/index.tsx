import { Signin } from "./signin"
import { SignInGoogle } from "./google"
import { SignInFacebook } from "./facebook"

export function Login() {
  return (
    <div className="card w-[26.6rem] bg-base-100 flex items-center shadow-2xl m-[8.2rem]">
      
      <div className="card-body flex items-center">
        <h2 className="card-title mb-6">Sign In</h2>
          <Signin />
          
        <div className="card-actions">
          <SignInGoogle />
          <SignInFacebook />
        </div>
      </div>

    </div>
  )
}