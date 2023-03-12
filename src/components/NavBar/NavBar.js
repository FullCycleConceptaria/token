import NavButtons from "../NavButtons/NavButtons";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className='b-surface-1 d-flex-row ai-center w-full p-16 jc-space-around'>
            <NavButtons icon='search' text='Chercher' />
            <NavButtons icon='add' text='Ajouter' />
            <NavLink to='/profile'><NavButtons icon='person' text='Profil' to='/profile'/></NavLink>
        </nav>
    )
}