import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { useDigitalDisplay } from '../../Shared/AppContext';
import { Flex, Stack } from '@mantine/core';
import MobitelComponent from '../../Components/MobitelComponent/MobitelComponent';
import classes from './MobilniTelefoni.module.css';

function MobilniTelefoni() {
  const { data } = useDigitalDisplay();
  return (
    <>
      <Header icon={'/icon _phone_.png'} title={'Mobilni uređaji'} />
      <Stack className={classes.sliderContainer}>
        <Flex className={classes.slider}>
          {data &&
            data.map((mobitel, index) => {
              // console.log(mobitel);
              return <MobitelComponent deviceData={mobitel} key={index} />;
            })}
        </Flex>
      </Stack>
      <Footer />
    </>
  );
}

export default MobilniTelefoni;
