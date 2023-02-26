import { SignInGoogle } from "../../components/login/google"
import { Signin } from "../../components/login/signin"
import { useAuth } from "../../hooks/auth"
import { UserStats } from "../../components/indicator/user-stats"
import { NetworkButton } from "../../components/login/section-networks"

export default function Login() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="h-[42.3rem] flex flex-col justify-start items-center">
      { isLoggedIn && (<UserStats />) }      
      { !isLoggedIn && (<NetworkButton />)}
    </div>
  )
}

