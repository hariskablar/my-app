import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';
import { useDigitalDisplay } from '../../Shared/AppContext';
import classes from './Akcije.module.css';
import AkcijaComponent from '../../Components/AkcijaComponent/AkcijaComponent';
import { Stack, Flex } from '@mantine/core';
import PaginationDots from '../../Components/PaginationDots/PaginationDots';
import { useRef, useState } from 'react';

function Akcije() {
  const { akcije } = useDigitalDisplay();
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handeScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = containerRef.current.scrollLeft;
    const itemWidth = containerRef.current.scrollWidth / akcije.length + 20;
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

  const handleDotClick = (index) => {
    if (!containerRef.current) return;
    const itemWidth = containerRef.current.scrollWidth / akcije.length;
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
      <Header icon={'/akcije-header-logo.svg'} title={'akcije'} />
      <Stack className={classes.sliderContainer}>
        <Flex
          className={classes.slider}
          ref={containerRef}
          onScroll={handeScroll}
        >
          {akcije &&
            akcije.map((item) => (
              <AkcijaComponent
                key={item.naslov}
                title={item.naslov}
                image={item.slika}
                description={item.opis}
                endDate={item.trajanje}
              />
            ))}
        </Flex>
      </Stack>
      <PaginationDots
        dataLength={akcije.length - 1}
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />
      <Footer />
    </motion.div>
  );
}

export default Akcije;
