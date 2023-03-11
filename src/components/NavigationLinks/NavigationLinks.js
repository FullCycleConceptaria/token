import { NavLink } from "react-router-dom";

export default function NavigationLinks({text}){
    return(
        <NavLink className="c-on-surface-variant ff-primary-font fw-500 pt-8 pl-16 pr-16 pb-8 bora-100" style={{fontSize: '1.4rem'}}>{text}</NavLink>
    )
}