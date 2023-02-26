import { SignInGoogle } from "../../components/login/signin-google"
import { Signin } from "../../components/login/signin"
import { useAuth } from "../../hooks/auth"
import { UserStats } from "../../components/indicator/user-stats"

export default function Login() {
  const { isLoggedIn } = useAuth()

  return (
    <>
      { isLoggedIn && (<UserStats />)}
      
      <div className="card w-96 bg-base-100 shadow-2xl shadow-gray-700 m-10">
      
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>
            <Signin />
            
          <div className="card-actions">
            <SignInGoogle />
          </div>
        </div>

      </div>
    </>
  )
}

