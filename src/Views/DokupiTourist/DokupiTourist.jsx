import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';

function DokupiTourist() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={'/dokupi-header-logo.svg'} title={'Dokupi'} />
      <Footer />
    </motion.div>
  );
}

export default DokupiTourist;
