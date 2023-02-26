import { Signin } from "./signin";
import { SignInGoogle } from "./google";
import { SignInFacebook } from "./facebook";

export function NetworkButton() {
  return (
    <div className="card w-5/10 bg-base-100 flex items-center shadow-2xl m-10">
      
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