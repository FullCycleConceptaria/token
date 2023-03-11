import styles from './Navigation.module.scss'
import NavigationLinks from '../NavigationLinks/NavigationLinks';

export default function Navigation() {
    return (
      <div className='w-full pl-20 pr-20'>
        <div
          style={{ marginTop: '95px', overflowX: 'auto' }}
          className={`b-surface-1 d-flex-row jc-space-between ai-center w-full bora-100 ${styles.scroll}`}
        >
          <NavigationLinks text='Demandes' logo='emoji_people' />
          <NavigationLinks text='Propositions' logo='handshake' />
          <NavigationLinks text='Groupes' logo='group' />
          <NavigationLinks text='ASBL' logo='diversity_3' />
        </div>
      </div>
    );
}