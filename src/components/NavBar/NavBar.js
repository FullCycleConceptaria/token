import NavButtons from "../NavButtons/NavButtons";
import { NavLink } from "react-router-dom";

export default function NavBar({setAdd}){
    return(
        <nav className='b-surface-1 d-flex-row ai-center w-full p-16 jc-space-around'>
            <NavButtons setAdd={setAdd} icon='search' text='Chercher' />
            <NavButtons setAdd={setAdd} icon='add' text='Ajouter' />
            <NavLink to='/profile'><NavButtons icon='person' text='Profil' to='/profile'/></NavLink>
        </nav>
    )
}