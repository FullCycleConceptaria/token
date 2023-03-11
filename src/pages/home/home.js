import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from '../../components/NavBar/NavBar'

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <NavBar />
    </div>
  )
}