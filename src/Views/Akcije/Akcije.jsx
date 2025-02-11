import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';

function Akcije() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header icon={'/akcije-header-logo.svg'} title={'akcije'} />
      <Footer />
    </motion.div>
  );
}

export default Akcije;
