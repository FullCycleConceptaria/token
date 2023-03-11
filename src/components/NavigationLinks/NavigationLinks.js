import { NavLink } from 'react-router-dom';

export default function NavigationLinks({ text, logo }) {
  return (
    <NavLink
      className='d-flex-row ai-center ff-primary-font fw-500 pt-16 pl-24 pr-24 pb-16 bora-100'
      style={{ fontSize: '2rem' }}
    >
      <span
        class='material-symbols-outlined c-on-surface-variant mr-8'
        style={{ fontSize: '2.5rem' }}
      >
        {logo}
      </span>
      <p style={{color: '#49454F'}}>{text}</p>
    </NavLink>
  );
}
