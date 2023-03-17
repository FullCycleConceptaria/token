import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from '../../components/NavBar/NavBar'
import Navigation from '../../components/Navigation/Navigation'
import ModaleAdd from "../../components/ModaleAdd/ModaleAdd";

export default function Home() {
  const [add, setAdd] = useState(false);
  return (
    <div className='w-full h-full d-flex-column pos-relative' style={{maxHeight: '100%'}}>
      {add && (
        <ModaleAdd setAdd={setAdd}/>
      )}
      <Header />
      <Navigation />
      <Outlet />
      <NavBar setAdd={setAdd}/>
    </div>
  )
}