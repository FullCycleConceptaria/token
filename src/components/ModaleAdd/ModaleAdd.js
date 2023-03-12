import { useState } from 'react'
import styles from './ModaleAdd.module.scss'

export default function ModaleAdd({setAdd}){
    return(
        <div onClick={() => setAdd(false)} className={styles.modaleAdd}>
            <div className={styles.modaleAddBlock}>
                <p className='ff-primary-font fs-normal'>Bientôt disponible...</p><span className="material-symbols-outlined fs-normal-plus c-on-surface pl-5 mb-5">engineering</span>
            </div>
        </div>
    )
}