import styles from './logIn.module.scss';

import Input from '../../components/Input/Input';
import Logo from '../../assets/img/Logo.svg';
import { useState } from 'react';
import { user } from '../../datas/user';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className='p-40 h-full d-flex-column ai-center jc-center'>
      <img src={Logo} alt='logo' />
      <div className={styles.divider}>
        <div></div>
        <p>ou</p>
      </div>
      <form
        className='d-flex-column w-full'
        onSubmit={(e) => {
          e.preventDefault();
          if (email === user[0].email && password === user[0].password) {
            navigate('/home');
          } else {
            console.log(password);
          }
        }}
      >
        <Input placeholder='Email' onInput={(e) => setEmail(e.target.value)} />
        <Input placeholder='Mot de passe' onInput={(e) => setPassword(e.target.value)} />
        <button
          className='w-full d-flex-row bora-8 h-45 b-primary ai-center jc-center mt-24'
          style={{ outline: 'none', border: 'none' }}
        >
          <p className='ff-primary-font c-on-primary fs-normal fw-500'>
            Se connecter
          </p>
        </button>
      </form>
    </div>
  );
}
