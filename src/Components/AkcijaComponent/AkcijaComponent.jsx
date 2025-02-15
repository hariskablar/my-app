import classes from './AkcijaComponent.module.css';

function AkcijaComponent({ image, title, description, endDate }) {
  return (
    <article>
      <div className={classes['card-wrapper']}>
        <div className={classes['image-container']}>
          <img
            src={image}
            alt='slika akcije'
            className={classes['akcija-image']}
          />
        </div>
        <div className={classes['text-container']}>
          <h2>{title}</h2>
          <p className={classes['description']}>{description}</p>
          <p className={classes['akcije-duration']}>
            Akcija traje do {endDate}.
          </p>
          <p className={classes['end-tag']}>
            Pronađi više na{' '}
            <span className={classes['highlighted']}>www.bhtelecom.ba</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default AkcijaComponent;
