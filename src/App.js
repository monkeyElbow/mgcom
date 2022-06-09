import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CinqueTerre from './show/CinqueTerre';

import './App.css'

function App() {
  return (

<>
<Router>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/cinque-terre-italy" element={<CinqueTerre />} />
{/* <HomePage /> */}
</Routes>
</Router>
</>

  )
}

export default App;
