
import profilePicture from '../../assets/images/profile-picture.svg'
import logoToken from '../../assets/images/logo-token.svg'
import { useNavigate } from 'react-router-dom'

export default function HeaderProfile(){
    const navigate = useNavigate();
    return(
        <div className='d-flex-row b-surface-1 p-20 ai-center jc-center'>
            <span className="material-symbols-outlined pos-absolute left-40 fs-medium cursor-pointer c-on-surface" onClick={() => navigate(-1)}>undo</span>
            <img className='h-70 m-10' src={profilePicture} alt='Amélie Dubois' />
            <div className='d-flex-column m-10'>
                <p className='c-on-surface fw-500 ff-primary-font fs-normal-plus'>Amélie Dubois</p>
                <div className='d-flex-row jc-space-around ai-center w-90'>
                    <img style={{height: '13px'}} src={logoToken} alt="" />
                    <div style={{height: '1.2rem', width: '0.2rem', opacity: '0.6'}} className='b-on-surface-variant'></div>
                    <p className='ff-primary-font fs-normal fw-500 c-on-surface'>3</p>
                </div>
            </div>
        </div>
    )
}