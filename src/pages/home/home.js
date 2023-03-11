import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from '../../components/NavBar/NavBar'
import Navigation from '../../components/Navigation/Navigation'

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <NavBar />
    </div>
  )
}