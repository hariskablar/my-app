// import MobilniTelefoni from '../../Views/Mobilni telefoni/MobilniTelefoni';
// import App from '../../App';
// import Akcije from '../../Views/Akcije/Akcije';
// import DokupiTourist from '../../Views/DokupiTourist/DokupiTourist';
import { lazy, Suspense } from 'react';
const App = lazy(() => import('../../App'));
const MobilniTelefoni = lazy(() =>
  import('../../Views/Mobilni telefoni/MobilniTelefoni')
);
const Akcije = lazy(() => import('../../Views/Akcije/Akcije'));
const DokupiTourist = lazy(() =>
  import('../../Views/DokupiTourist/DokupiTourist')
);

export const sitemap = [
  { component: <App />, path: '/' },
  { component: <MobilniTelefoni />, path: '/mobilni-telefoni' },
  { component: <Akcije />, path: '/akcije' },
  { component: <DokupiTourist />, path: '/dokupi-tourist' },
];
