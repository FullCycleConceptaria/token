import NavButtons from "../NavButtons/NavButtons";

export default function NavBar(){
    return(
        <nav className='b-surface-1 d-flex-row ai-center w-full p-16 jc-space-around'>
            <NavButtons icon='search' text='Chercher' />
            <NavButtons icon='add' text='Ajouter' />
            <NavButtons icon='person' text='Profil' to='/profile'/>
        </nav>
    )
}