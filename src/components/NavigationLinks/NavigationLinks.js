import { NavLink } from "react-router-dom";

export default function NavigationLinks({text}){
    return(
        <NavLink className="c-on-surface-variant ff-primary-font fw-500 pt-16 pl-24 pr-24 pb-16 bora-100" style={{fontSize: '1.4rem'}}>{text}</NavLink>
    )
}