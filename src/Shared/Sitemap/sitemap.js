import { lazy } from 'react';
const App = lazy(() => import('../../App'));
const MobilniTelefoni = lazy(() =>
  import('../../Views/Mobilni telefoni/MobilniTelefoni')
);
const Akcije = lazy(() => import('../../Views/Akcije/Akcije'));
const DokupiMain = lazy(() => import('../../Views/DokupiMain/DokupiMain'));
const UltraDokupi = lazy(() => import('../../Views/UltraDokupi/UltraDokupi'));
const ExtraDokupi = lazy(() => import('../../Views/ExtraDokupi/ExtraDokupi'));
const KombinovaniDokupi = lazy(() =>
  import('../../Views/KombinovaniDokupi/KombinovaniDokupi')
);
const Esim = lazy(() => import('../../Views/Esim/Esim'));

export const sitemap = [
  { component: <App />, path: '/' },
  { component: <MobilniTelefoni />, path: '/mobilni-telefoni' },
  { component: <Akcije />, path: '/akcije' },
  { component: <DokupiMain />, path: '/dokupi-main' },
  { component: <UltraDokupi />, path: '/ultra-dokupi' },
  { component: <ExtraDokupi />, path: '/extra-dokupi' },
  { component: <KombinovaniDokupi />, path: '/kombinovani-dokupi' },
  { component: <Esim />, path: '/esim' },
];
