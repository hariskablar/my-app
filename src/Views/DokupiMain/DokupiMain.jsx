import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';
import ListItem from '../../Components/ListItem/ListItem';
import classes from './DokupiMain.module.css';
import { Flex } from '@mantine/core';

function DokupiMain() {
  const dokupiData = [
    {
      title: 'ultra mobilne usluge',
      image: '/prepaid-logo.svg',
      path: '/ultra-dokupi',
    },
    {
      title: 'extra mobilne usluge',
      image: '/postpaid-logo.svg',
      path: '/extra-dokupi',
    },
    {
      subtitle: 'eSIM',
      title: 'tourist',
      image: '/tourist-logo.svg',
      image2: '/esim-logo.svg',
      path: '/esim',
    },
    {
      title: 'kombinovane mobilne usluge',
      image: '/kombinovani-logo.svg',
      path: '/kombinovani-dokupi',
    },
  ];
  const dokupiKartice = dokupiData.map((card) => (
    <ListItem key={card.title} cardData={card} cardType='dokupi' />
  ));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={'/dokupi-header-logo.svg'} title={'Dokupi'} />
      <Flex
        w='100%'
        h='75vh'
        direction='row'
        justify='center'
        align='center'
        wrap='wrap'
        m='auto'
      >
        <Flex className={classes['dokupi-grid']}>{dokupiKartice}</Flex>
      </Flex>
      <Footer />
    </motion.div>
  );
}

export default DokupiMain;
