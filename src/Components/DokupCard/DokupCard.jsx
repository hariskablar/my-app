import classes from './DokupCard.module.css';

function DokupCard({ cardData }) {
  const atributiSplit = cardData.atributi.split('\n');
  const atributi = atributiSplit.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div className={classes['card-wrapper']}>
      <div>
        <h4 className={classes['card-title']}>{cardData.naslov}</h4>
        <ul>{atributi}</ul>
        <p className={classes['card-description']}>{cardData.opis}</p>
      </div>
      <div className={classes['cards-bottom-container']}>
        <div className={classes['qr-code-container']}>
          <img src={cardData.qr} alt='QR code' />
        </div>
        <div className={classes['price-container']}>
          <span className={classes['price']}>{cardData.cijena} KM</span>
          <span className={classes['duration']}>{cardData.trajanje}</span>
        </div>
      </div>
    </div>
  );
}

export default DokupCard;
