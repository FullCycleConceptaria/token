import styles from './logIn.module.scss';

import Input from '../../components/Input/Input';
import logo from '../../assets/images/logo-token.svg';
import itsme from '../../assets/images/itsme.png';
import { useState } from 'react';
import { user } from '../../datas/user';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className='p-40 h-full d-flex-column ai-center jc-center'>
      <img src={logo} alt='logo' />
      <NavLink
        className='w-full h-45 d-flex-row ai-center jc-center bora-8'
        style={{ border: '2px solid #79747E', marginTop: '11rem' }}
        to='/home/requests'
      >
        <img src={itsme} alt='itsme' className='h-30 mr-16' />
        <p className='ff-primary-font c-on-surface-variant fs-normal fw-500'>
          S'identifier avec itsme
        </p>
      </NavLink>
      <div className={styles.divider} style={{ marginTop: '2.4rem' }}>
        <div></div>
        <p className='c-on-surface-variant'>ou</p>
      </div>
      <form
        className='d-flex-column w-full'
        onSubmit={(e) => {
          e.preventDefault();
          if (email === user[0].email && password === user[0].password) {
            navigate('/home/requests');
          }
        }}
      >
        <Input placeholder='Email' onInput={(e) => setEmail(e.target.value)} />
        <Input
          placeholder='Mot de passe'
          onInput={(e) => setPassword(e.target.value)}
        />
        <button
          className='w-full d-flex-row bora-8 h-45 b-primary ai-center jc-center mt-24 cursor-pointer'
          style={{ outline: 'none', border: 'none' }}
        >
          <p className='ff-primary-font c-on-primary fs-normal fw-500'>
            Se connecter
          </p>
        </button>
      </form>
      <div className='ff-primary-font c-on-surface-variant fs-small mt-16'>
        Pas de compte ? <NavLink className='c-primary' to='/sign-up'>S'inscrire</NavLink>
      </div>
      <a className='ff-primary-font c-primary fs-small mt-8'>
        Conditions d'utilisation
      </a>
      <a className='ff-primary-font c-primary fs-small mt-8'>
        Mot de passe oublié ?
      </a>
    </div>
  );
}
