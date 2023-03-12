import { NavLink } from 'react-router-dom'
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile'
import ProfileButtons from '../../components/ProfileButtons/ProfileButtons'
import Divider from '../../components/Divider/Divider'

export default function Profile(){
    return(
        <div className='d-flex-column w-full'>
            <HeaderProfile />
            <div>
                <ProfileButtons to='profile' symbol='account_circle' firstText='Profil' secondText='Modifier votre profil'/>
                <Divider />
                <ProfileButtons to='requests' symbol='handshake' firstText='Demandes' secondText='Vos demandes les plus récentes'/>
                <Divider />
                <ProfileButtons to='propositions' symbol='campaign' firstText='Propositions' secondText='Vos propositions les plus récentes'/>
                <Divider />
                <ProfileButtons to='success' symbol='workspace_premium' firstText='Niveaux et badges' secondText='Jetez un oeil à vos performances'/>
                <Divider />
                <ProfileButtons to='groups' symbol='diversity_3' firstText='Groupes' secondText='Groupes suivis'/>
                <Divider />
                <ProfileButtons to='asbl' symbol='volunteer_activism' firstText='ASBL' secondText='ASBL suivies'/>
                <Divider />
            </div>
            <NavLink><span></span></NavLink>
        </div>
    )
}