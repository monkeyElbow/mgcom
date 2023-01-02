import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
// import { createBrowserHistory } from "history";
// import { useEffect } from 'react';
import ReactGA from 'react-ga4'


import CinqueTerre from './show/CinqueTerre';
import Venice from './show/Venice';

import './App.css'
// import ShowHome from './show/ShowHome';
import Tonnara from './show/Tonnara';
import ItalianAlleyway from './show/ItalianAlleyway';
import GreeceInOrange from './show/GreeceInOrange';
import GondolasInVenice from './show/GondolasInVenice';
import HallstattAustria from './show/HallstattAustria';
import BoatsInThailand from './show/BoatsInThailand';
import EiffelTowerInFall from './show/EiffelTowerInFall';
import QuaintStreet from './show/QuaintStreet';
import ItalianStreet from './show/ItalianStreet';
import VeniceInReds from './show/VeniceInReds';
import Tangier from './show/Tangier';
import CherryBlossoms from './show/CherryBlossoms';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  ReactGA.initialize("G-J22WGCRS41");
  ReactGA.send({ hittype:"pageview", page: window.location.pathname });


  return (

<>
<BrowserRouter>
<Routes>

<Route path="/" element={<HomePage />} />


{/* show pages */}
<Route path="show/cinque-terre-italy" element={<CinqueTerre />} />
<Route path="show/venice" element={<Venice />} />
<Route path="show/tonnara-di-scopello" element={<Tonnara />} />
<Route path="show/italian-alleyway" element={<ItalianAlleyway />} />
<Route path="show/greece-in-orange" element={<GreeceInOrange />} />
<Route path="show/gondolas-in-venice" element={<GondolasInVenice />} />
<Route path="show/hallstatt-austria" element={<HallstattAustria />} />
<Route path="show/boats-in-thailand" element={<BoatsInThailand />} />
<Route path="show/eiffel-tower-in-fall" element={<EiffelTowerInFall />} />
<Route path="show/quaint-street" element={<QuaintStreet />} />
<Route path="show/italian-street" element={<ItalianStreet />} />
<Route path="show/venice-in-reds" element={<VeniceInReds />} />
<Route path="show/tangier" element={<Tangier />} />
<Route path="show/cherry-blossoms" element={<CherryBlossoms />} />
{/* <Route path="show" element={<ShowHome />} /> */}

<Route path="*" element={<NotFoundPage />} />


</Routes>
</BrowserRouter>
</>

  )
}

export default App;
