import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';
import ListItem from '../../Components/ListItem/ListItem';
import classes from './CjenovniciUsluga.module.css';
import { Flex } from '@mantine/core';

function CjenovniciUredjaja() {
  const cjenovniciUredjaja = [
    {
      title: 'Moja TV paket',
      image: '/prepaid-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'Moja TV GO paket',
      image: '/postpaid-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'Govorna BH Line paketi',
      image: '/kombinovani-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'Govorna BH Mobile paketi',
      image: '/mojatv-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'Assistant paketi',
      image: '/internet-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'Teen paketi',
      image: '/fiksna-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'Student paketi',
      image: '/fiksna-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'Internet paketi putem fiksne mreže',
      image: '/fiksna-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'NET GO',
      image: '/fiksna-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
    {
      title: 'NET TO GO',
      image: '/fiksna-logo.svg',
      path: '/cjenovnik-uredjaja',
    },
  ];
  const cjenovniciKartice = cjenovniciUredjaja.map((card) => (
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
          <p>Cjenovnici uređaja</p>
        </Flex>
        <Flex className={classes['izvodi-grid']}>{cjenovniciKartice}</Flex>
      </Flex>
      <Footer />
    </motion.div>
  );
}

export default CjenovniciUredjaja;
