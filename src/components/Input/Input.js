import styles from './Input.module.scss';

export default function Input({ placeholder, onInput }) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={styles.input}
      onFocus={(e) => (e.target.style.border = '.3rem solid #6750A4')}
      onBlur={(e) => (e.target.style.border = '.2rem solid #79747E')}
      style={{ margin: '2.4rem 0 0 0' }}
      onInput={onInput}
    />
  );
}
