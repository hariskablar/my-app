import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { useDigitalDisplay } from '../../Shared/AppContext';
import { Flex, Stack, Checkbox } from '@mantine/core';
import MobitelComponent from '../../Components/MobitelComponent/MobitelComponent';
import classes from './MobilniTelefoni.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function MobilniTelefoni() {
  const { data } = useDigitalDisplay();
  const [visibleData, setVisibleData] = useState(data.slice(0, 3));
  const [activeFilters, setActiveFilters] = useState([]);
  const checkboxData = [
    { name: 'samsung', img: '/samsung-logo.svg' },
    { name: 'apple', img: '/apple-logo.svg' },
    { name: 'xiaomi', img: '/xiaomi-logo.svg' },
    { name: 'zte', img: '/zte-logo.svg' },
    { name: 'honor', img: '/honor-logo.svg' },
    { name: 'tcl', img: '/tcl-logo.svg' },
    { name: 'realme', img: '/realme-logo.svg' },
    { name: 'nokia', img: '/nokia-logo.png' },
    { name: 'oneplus', img: '/oneplus-logo.png' },
    { name: 'ulefone', img: '/ulefone-logo.svg' },
    { name: 'vivo', img: '/vivo-logo.svg' },
  ];
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setActiveFilters((prevFilters) =>
      checked
        ? [...prevFilters, value]
        : prevFilters.filter((filter) => filter !== value)
    );
  };
  const filterCards = checkboxData.map((item) => (
    <div className={classes['filter-item']} key={item.name}>
      <Checkbox
        type='checkbox'
        id={item.name}
        value={item.name}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={item.name}>
        <img src={item.img} alt={item.name} />
      </label>
    </div>
  ));

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-brend]'));
    elements.forEach((element) => {
      const brend = element.dataset.brend;
      element.style.display =
        activeFilters.length === 0 || activeFilters.includes(brend)
          ? 'flex'
          : 'none';
    });
  }, [activeFilters, visibleData]);

  useEffect(() => {
    setTimeout(() => {
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
      <div className={classes['filter-slider']}>{filterCards}</div>
      <Stack className={classes.sliderContainer}>
        <Flex className={classes.slider}>
          {visibleData &&
            visibleData.map((mobitel, index) => {
              return (
                <MobitelComponent
                  deviceData={mobitel}
                  key={index}
                  deviceBrend={mobitel.brend.toLowerCase()}
                />
              );
            })}
        </Flex>
      </Stack>
      <Footer />
    </motion.div>
  );
}

export default MobilniTelefoni;
