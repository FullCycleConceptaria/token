import styles from './NavButtons.module.scss'

export default function NavButtons({icon, text}){
    return(
        <div className='d-flex-column ai-center'>
            <span className="material-symbols-outlined">{icon}</span>
            <p className='fs-small fw-500 ff-primary-font'>{text}</p>
        </div>
    )
}