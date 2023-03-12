import HeaderProfileEditing from "../../../components/HeaderProfileEditing/HeaderProfileEditing";
import HeaderProfile from '../../../components/HeaderProfile/HeaderProfile'
import ContactInformation from "../../../components/ContactInformation/ContactInformation";

export default function ProfileEditing(){
    return(
        <div>
            <HeaderProfileEditing />
            <div>
                <HeaderProfile />
                <ContactInformation />
                <p>Changer de mot de passe</p>
                <p>Supprimer mon compte</p>
            </div>
        </div>
    )
}