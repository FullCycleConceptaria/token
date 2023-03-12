import { NavLink } from "react-router-dom"

export default function NavButtons({icon, text}){
    return(
        <div className='d-flex-column ai-center cursor-pointer'>
            <span className="material-symbols-outlined c-on-surface-variant">{icon}</span>
            <p className='fs-small fw-500 ff-primary-font c-on-surface-variant'>{text}</p>
        </div>
    )
}