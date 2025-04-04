import classes from './Footer.module.css';
import { useNavigate } from 'react-router';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <img
        src='/footer-logo.svg'
        alt='home-logo'
        onClick={() => {
          navigate('/');
        }}
      />
      <div className={classes.footerSeparator}></div>
      <p className={classes.poslovnicaTitle}>
        <span className={classes.bold}>
          Dobrodošli &nbsp;&nbsp;/&nbsp;&nbsp;
        </span>
        Franca Lehara 7
      </p>
      <div className={classes.whiteBtn}>Ocijeni poslovnicu</div>
      <div
        className={classes.blueBtn}
        onClick={() => {
          navigate('/zabava');
        }}
      >
        Pokreni igru
      </div>
      <div
        className={classes.orangeBtn}
        onClick={() => {
          navigate('/cjenovnici-usluga');
        }}
      >
        Cjenovnik usluga
      </div>
      <div
        className={classes.orangeBtn}
        onClick={() => {
          navigate('/cjenovnici-uredjaja');
        }}
      >
        Cjenovnik uređaja
      </div>
    </footer>
  );
}

export default Footer;
