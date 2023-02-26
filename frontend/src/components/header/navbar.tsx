import { useAuth } from "../../hooks/auth";
import { TopLeft } from "./top-left";
import { TopRight } from "./top-right";

export function NavBar() {
  const { isLoggedIn } = useAuth()
  
  return(
    <>
      <div className="navbar bg-base-100 flex justify-center shadow-xl">
        { isLoggedIn && (<TopRight />)}
        <div className="navbar-center">
          <a className="normal-case text-xl cursor-pointer font-bold">OAuth</a>
        </div>
        { isLoggedIn && (<TopLeft />) }
      </div>
    </>
  )
}