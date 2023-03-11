import './default.scss';

import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const storage = localStorage;
    storage.setItem('isLoggedIn', 'true');
    if (storage) {
      storage.getItem('isLoggedIn');
      if (storage.isLoggedIn === 'true') {
        navigate('/home');
        console.log('logged in');
      } else {
        navigate('/sign-up');
        console.log('not logged in');
      }
    }
  }, []);
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}
