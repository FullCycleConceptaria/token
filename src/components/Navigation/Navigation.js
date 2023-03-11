import styles from './Navigation.module.scss'
import NavigationLinks from '../NavigationLinks/NavigationLinks';

export default function Navigation(){
    return(
        <div className='w-full pl-20 pr-20'>
            <div style={{marginTop: '95px'}} className='b-surface-1 d-flex-row jc-space-between ai-center w-full bora-100'>
                <NavigationLinks text='Demandes' />
                <NavigationLinks text='Propositions' />
                <NavigationLinks text='Groupes' />
                <NavigationLinks text='ASBL' />
            </div>
        </div>
    )
}