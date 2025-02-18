import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';
import { useDigitalDisplay } from '../../Shared/AppContext';
import { Flex } from '@mantine/core';

function UltraDokupi() {
  const { dokupi } = useDigitalDisplay();
  const ultraDokupi = dokupi.filter((item) =>
    item.kategorija.includes('prepaid')
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={'/dokupi-header-logo.svg'} title={'Dokupi'} />
      <Flex>
        <Flex></Flex>
      </Flex>
      <Footer />
    </motion.div>
  );
}

export default UltraDokupi;
