import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { useDigitalDisplay } from '../../Shared/AppContext';

function MobilniTelefoni() {
  const { data } = useDigitalDisplay();
  return (
    <>
      <Header icon={'/icon _phone_.png'} title={'Mobilni uređaji'} />
      <Footer />
    </>
  );
}

export default MobilniTelefoni;
