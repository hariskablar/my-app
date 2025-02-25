import classes from './GameCard.module.css';

function GameCard({ color, onClick, flipped }) {
  return (
    <div
      className={
        flipped
          ? classes['game-card-wrapper-flipped']
          : classes['game-card-wrapper']
      }
      onClick={onClick}
    >
      <div className={classes['card-front']}>
        <img src='/card-front.svg' alt='card front' />
      </div>
      <div className={classes['card-back']} style={{ background: color }}></div>
    </div>
  );
}

export default GameCard;
