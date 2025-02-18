import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';
import { useDigitalDisplay } from '../../Shared/AppContext';

function ExtraDokupi() {
  const { dokupi } = useDigitalDisplay();
  const extraDokupi = dokupi.filter((item) =>
    item.kategorija.includes('postpaid')
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={'/dokupi-header-logo.svg'} title={'Dokupi'} />
      <h1>ExtraDokupi</h1>

      <Footer />
    </motion.div>
  );
}

export default ExtraDokupi;
