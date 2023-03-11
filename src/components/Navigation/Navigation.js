import styles from './Navigation.module.scss';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

export default function Navigation() {
  return (
    <div className='w-full pl-20 pr-20'>
      <div
        style={{ marginTop: '24px', overflowX: 'auto' }}
        className={`b-surface-1 d-flex-row jc-space-between ai-center w-full bora-100 ${styles.scroll}`}
      >
        <NavigationLinks
          text='Demandes'
          logo='emoji_people'
          to='/home/requests'
        />
        <NavigationLinks
          text='Propositions'
          logo='handshake'
          to='/home/propositions'
        />
        <NavigationLinks
          text='Groupes'
          logo='group'
          to='/home/groups'
        />
        <NavigationLinks
          text='ASBL'
          logo='diversity_3'
          to='/home/asbl'
        />
      </div>
    </div>
  );
}
