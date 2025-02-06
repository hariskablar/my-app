import MobilniTelefoni from '../../Views/Mobilni telefoni/MobilniTelefoni';
import App from '../../App';
import Akcije from '../../Views/Akcije/Akcije';
import DokupiTourist from '../../Views/DokupiTourist/DokupiTourist';

export const sitemap = [
  { component: <App />, path: '/' },
  { component: <MobilniTelefoni />, path: '/mobilni-telefoni' },
  { component: <Akcije />, path: '/akcije' },
  { component: <DokupiTourist />, path: '/dokupi-tourist' },
];
