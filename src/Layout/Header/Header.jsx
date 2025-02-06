import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import classes from './Header.module.css';

function Header({ icon, title }) {
  const navigate = useNavigate();
  return (
    <header>
      <div
        className={classes.backBtn}
        onClick={() => {
          navigate(-1);
        }}
      >
        <GoArrowLeft />
        <span>Nazad</span>
      </div>
      <div className={classes.headerSeparator}></div>
      <img
        className={classes.headerIcon}
        src={`${process.env.PUBLIC_URL}${icon}`}
        alt='header-icon'
      />
      <span className={classes.headerTitle}>{title}</span>
    </header>
  );
}

export default Header;
