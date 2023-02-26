import { NavBar } from "./components/header/navbar"
import { Footer } from "./components/layout/footer"
import Login from "./pages/login"

export function App() {
  return(
    <div data-theme="dark">
      <NavBar />
      <Login />
      <Footer />
    </div>
  )
}