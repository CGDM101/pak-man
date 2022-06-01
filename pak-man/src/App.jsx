import './App.css'
import {BrowserRouter as Router, NavLink, Routes, Route, Navigate} from 'react-router-dom'
import TheMenu from './components/TheMenu'
import Start from './components/Start'
import YatzyComponent from './components/Yatze/Yatzy'
import AboutUs from './components/AboutUs/AboutUs'
import OurGames from './components/Ourgames'
import ExternalGames from './components/Externalgames'

function App() {

  return (

    <Router>
    <div>
      <TheMenu>
      <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/yatzy" element={<YatzyComponent />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourgames" element={<OurGames />} />
          <Route path="/externalgames" element={<ExternalGames />} />
        </Routes>
        </TheMenu>
    </div>
  </Router>
    
  )
}

export default App
