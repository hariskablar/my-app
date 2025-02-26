import classes from './Zabava.module.css';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import { motion } from 'framer-motion';
import { Flex } from '@mantine/core';
import { useState, useEffect, lazy } from 'react';

const GameCard = lazy(() => import('../../Components/GameCard/GameCard'));

function Zabava() {
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState(new Set());
  const [canFlip, setCanFlip] = useState(true);
  const colors = [
    'red',
    'blue',
    'grey',
    'brown',
    'green',
    'yellow',
    'magenta',
    'cyan',
  ];

  function initializeGame() {
    console.log('game initialized');
    const allColors = [...colors, ...colors];
    function shuffleCards() {
      for (let i = allColors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allColors[i], allColors[j]] = [allColors[j], allColors[i]];
      }
      setCards(allColors);
    }
    shuffleCards();
    setMoves(0);
    setMatches(0);
    setFlippedCards([]);
    setMatchedCards(new Set());
    setCanFlip(true);
  }
  function cardClick(index) {
    if (!canFlip || flippedCards.includes(index) || matchedCards.has(index))
      return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      setCanFlip(false);

      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatches((prev) => prev + 1);
        setMatchedCards((prev) => new Set([...prev, firstIndex, secondIndex]));
        setFlippedCards([]);
        setCanFlip(true);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
      }
    }
  }

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon='/zabava-logo.svg' title='zabava' />
      <Flex className={classes['game-container']}>
        <Flex className={classes['stats-container']}>
          <Flex className={classes['stats']}>
            <span className={classes['title']}>Potezi: </span>
            <span className={classes['value']}>{moves}</span>
          </Flex>
          <Flex className={classes['stats']}>
            <span className={classes['title']}>Pogodci: </span>
            <span className={classes['value']}>{matches}</span>
          </Flex>
        </Flex>
        <Flex className={classes['game-board']}>
          {cards?.map((card, index) => {
            return (
              <GameCard
                key={index}
                color={card}
                flipped={
                  flippedCards.includes(index) || matchedCards.has(index)
                }
                onClick={() => cardClick(index)}
              />
            );
          })}
        </Flex>

        <span className={classes['reset-button']} onClick={initializeGame}>
          Ponovi igru
        </span>
      </Flex>
      <Footer />
    </motion.div>
  );
}

export default Zabava;
