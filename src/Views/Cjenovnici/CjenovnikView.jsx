import classes from './CjenovnikView.module.css';
import { useDigitalDisplay } from '../../Shared/AppContext';
import Header from './../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import { motion } from 'framer-motion';

function CjenovnikView() {
  const { selectedCjenovnik } = useDigitalDisplay();
  console.log(selectedCjenovnik);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <div className={classes['table-container']}>
        <table>
          <tbody>
            {selectedCjenovnik.map((row, rowIndex) => {
              if (row.length === 1 && /^\d+$/.test(row[0])) {
                return null;
              }
              if (row.length > 0) {
                let rowClass = '';
                if (rowIndex === 0) rowClass = 'title';
                else if (rowIndex === 1) rowClass = 'cjenovnik-type';
                else if (rowIndex === 2) rowClass = 'valid-date';
                else if (rowIndex === 3) rowClass = 'description';
                return (
                  <tr key={rowIndex} className={classes[`${rowClass}`]}>
                    {row.map((cell, cellIndex) => {
                      let cellClass = '';
                      if (cell.toLowerCase().includes('paket'))
                        cellClass = 'bht-bg';
                      return (
                        <td key={cellIndex} className={classes[`${cellClass}`]}>
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </motion.div>
  );
}

export default CjenovnikView;
