import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';
import ListItem from '../../Components/ListItem/ListItem';
import classes from './CjenovniciUsluga.module.css';
import { Flex } from '@mantine/core';

function CjenovniciUsluga() {
  const dokupiData = [
    {
      title: 'ultra mobilne usluge',
      image: '/prepaid-logo.svg',
      path: '/cjenovnik-usluge',
    },
    {
      title: 'extra mobilne usluge',
      image: '/postpaid-logo.svg',
      path: '/cjenovnik-usluge',
    },
    {
      title: 'kombinovane mobilne usluge',
      image: '/kombinovani-logo.svg',
      path: '/cjenovnik-usluge',
    },
    {
      title: 'moja tv usluga',
      image: '/mojatv-logo.svg',
      path: '/cjenovnik-usluge',
    },
    {
      title: 'usluge pristupa internetu',
      image: '/internet-logo.svg',
      path: '/cjenovnik-usluge',
    },
    {
      title: 'fiksne usluge',
      image: '/fiksna-logo.svg',
      path: '/cjenovnik-usluge',
    },
  ];
  const dokupiKartice = dokupiData.map((card) => (
    <ListItem key={card.title} cardData={card} cardType='izvodi' />
  ));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={''} title={'Cjenovnici'} />
      <Flex
        w='100%'
        h='75vh'
        direction='column'
        justify='center'
        align='center'
        wrap='wrap'
        m='auto'
      >
        <Flex className={classes['cards-title']}>
          <p>Cjenovnici usluga</p>
        </Flex>
        <Flex className={classes['izvodi-grid']}>{dokupiKartice}</Flex>
      </Flex>
      <Footer />
    </motion.div>
  );
}

export default CjenovniciUsluga;
