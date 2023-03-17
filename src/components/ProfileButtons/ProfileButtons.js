import { NavLink } from "react-router-dom"

export default function ProfileButtons({symbol, firstText, secondText, to}){
    return(
        <NavLink to={to} className='cursor-pointer d-flex-row w-full jc-space-between ai-center pl-40 pr-40 pt-15'>
            <div className='b-surface-1 p-10 bora-8'><span className="material-symbols-outlined fs-medium c-on-surface">{symbol}</span></div>
            <div className='d-flex-row w-full jc-space-between pl-40 ai-center c-on-surface'>
                <div>
                    <p className='ff-primary-font c-on-primary-container fs-normal-plus fw-500 c-on-surface'>{firstText}</p>
                    <p className='ff-primary-font c-on-primary-container fs-normal fw-300 c-on-surface-variant'>{secondText}</p>
                </div>
                <span className="material-symbols-outlined fs-medium c-on-surface">chevron_right</span>
            </div>
        </NavLink>
    )
}