import classes from './ListItem.module.css';
import { useNavigate } from 'react-router-dom';
import { useDigitalDisplay } from '../../Shared/AppContext';

function ListItem({ cardData, cardType }) {
  const { title, subtitle, image, image2, path } = cardData;
  const navigate = useNavigate();
  const {
    setSelectedCjenovnik,
    cjenovnikUredjajaMojaTV,
    cjenovnikUredjajaExtra,
  } = useDigitalDisplay();

  const handleClick = () => {
    let selectedCjenovnik;
    if (title.toLowerCase().includes('extra'))
      selectedCjenovnik = cjenovnikUredjajaExtra;
    if (title.toLowerCase().includes('moja'))
      selectedCjenovnik = cjenovnikUredjajaMojaTV;
    setSelectedCjenovnik(selectedCjenovnik);
    navigate(`${path}`);
  };

  return (
    <div
      className={`${classes[`${cardType}-card-wrapper`]}`}
      onClick={() => {
        handleClick();
      }}
    >
      <div className={classes['image-container']}>
        <img src={image} alt='card logo' />
      </div>
      <div className={classes['text-container']}>
        <span
          className={
            subtitle === undefined
              ? `${classes['hidden']}`
              : `${classes['subtitle']}`
          }
        >
          {subtitle}
        </span>
        <span className={classes['title']}>{title}</span>
      </div>
      <div
        className={
          image2 === undefined
            ? `${classes['hidden']}`
            : `${classes['horizontal-separator']}`
        }
      ></div>
      <div
        className={
          image2 === undefined
            ? `${classes['hidden']}`
            : `${classes['image-container']}`
        }
      >
        <img src={image2} alt='card logo' />
      </div>
    </div>
  );
}

export default ListItem;
