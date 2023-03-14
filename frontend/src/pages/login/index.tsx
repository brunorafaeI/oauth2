import { useAuth } from "@hooks/auth"
import { UserStats } from "@components/indicator/user-stats"
import { Login } from "@components/login"

export default function LoginPage() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="h-screen flex flex-col justify-start items-center">
      { isLoggedIn && <UserStats /> }      
      { !isLoggedIn && <Login /> }
    </div>
  )
}

