import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';
import { useDigitalDisplay } from '../../Shared/AppContext';
import { useState, useRef } from 'react';
import { Stack, Flex } from '@mantine/core';
import PaginationDots from '../../Components/PaginationDots/PaginationDots';
import DokupCard from '../../Components/DokupCard/DokupCard';
import classes from './KombinovaniDokupi.module.css';

function KombinovaniDokupi() {
  const { dokupi } = useDigitalDisplay();
  const kombinovaniDokupi = dokupi.filter((item) =>
    item.kategorija.includes('kombinovani')
  );
  const containerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = containerRef.current.scrollLeft;
    const itemWidth =
      containerRef.current.scrollWidth / kombinovaniDokupi.length + 40;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (
      scrollPosition >=
      containerRef.current.scrollWidth - window.innerWidth
    ) {
      setActiveIndex(newIndex + 1);
    } else {
      setActiveIndex(newIndex);
    }
  };

  const handleClick = (index) => {
    if (!containerRef.current) return;
    const itemWidth =
      containerRef.current.scrollWidth / kombinovaniDokupi.length;
    containerRef.current.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={'/dokupi-header-logo.svg'} title={'Dokupi'} />
      <Stack className={classes['content-container']}>
        <Flex className={classes['content-heading']}>
          <img src='/kombinovani-logo.svg' alt='kombinovani logo' />
          <h1>Dokupi za kombinovane pakete</h1>
        </Flex>
        <Flex
          ref={containerRef}
          className={classes['slider']}
          onScroll={handleScroll}
        >
          {kombinovaniDokupi &&
            kombinovaniDokupi.map((dokup, index) => {
              return <DokupCard key={index} cardData={dokup} />;
            })}
        </Flex>
        <Flex align='center' justify='center' h='13vh'>
          <PaginationDots
            dataLength={kombinovaniDokupi.length - 3}
            activeIndex={activeIndex}
            onDotClick={handleClick}
          />
        </Flex>
      </Stack>
      <Footer />
    </motion.div>
  );
}

export default KombinovaniDokupi;
