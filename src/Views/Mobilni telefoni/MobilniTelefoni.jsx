import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { useDigitalDisplay } from '../../Shared/AppContext';
import { Flex, Stack } from '@mantine/core';
import MobitelComponent from '../../Components/MobitelComponent/MobitelComponent';
import classes from './MobilniTelefoni.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function MobilniTelefoni() {
  const { data } = useDigitalDisplay();
  const [visibleData, setVisibleData] = useState(data.slice(0, 3));

  useEffect(() => {
    setTimeout(() => {
      console.log('loaded all');
      setVisibleData(data);
    }, 1000);
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={'/icon _phone_.png'} title={'Mobilni uređaji'} />
      <Stack className={classes.sliderContainer}>
        <Flex className={classes.slider}>
          {visibleData &&
            visibleData.map((mobitel, index) => {
              return <MobitelComponent deviceData={mobitel} key={index} />;
            })}
        </Flex>
      </Stack>
      <Footer />
    </motion.div>
  );
}

export default MobilniTelefoni;
