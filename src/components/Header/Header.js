import logoCarre from '../../assets/images/logo-carre.svg'
import profilePicture from '../../assets/images/profile-picture.svg'

import styles from './Header.module.scss'

export default function Header(){
    return(
        <header className='d-flex-row pos-absolute b-surface-1 p-16 w-full pl-40 pr-40 jc-space-between ai-center'>
            <div className='d-flex-row ai-center'>
                <img className='h-40 cursor-pointer pr-8' src={logoCarre} alt="Token" />
                <div className={styles.headerCarre}></div>
                <p className='fs-normal-plus fw-500 ff-primary-font c-on-surface pl-8'>3</p>
            </div>
            <div className='d-flex-row ai-center jc-space-around'>
                <span style={{fontSize : '28px'}} className="material-symbols-outlined c-on-surface cursor-pointer">notifications</span>
                <img className='h-45 pl-15 cursor-pointer' src={profilePicture} alt="Token" />
            </div>
        </header>
    )
}