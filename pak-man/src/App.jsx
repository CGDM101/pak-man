import './App.css'
import {BrowserRouter as Router, NavLink, Routes, Route, Navigate} from 'react-router-dom'
import TheMenu from './components/TheMenu'
import Start from './components/Start'
import YatzyComponent from './components/Yatze/Yatzy'
import AboutUs from './components/AboutUs/AboutUs'

function App() {

  return (

    <Router>
    <div>
      <TheMenu>
      <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/yatzy" element={<YatzyComponent />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        </TheMenu>
    </div>
  </Router>


    // <Router>
    //   <div>
    //     <header>
    //       <NavLink to=""> Startsida </NavLink>
    //       <NavLink to="/spel1"> Spel 1 </NavLink>
    //       <NavLink to="/spel2"> Spel 2 </NavLink>
    //     </header>
    //     <main>
    //       <Routes>
    //         <Route path="/spel1" element={<Spel1 />} />
    //         <Route path="/spel2" elememt={<Spel2 />} />
    //         <Route path="/" element={<Start />} />
    //       </Routes>
    //     </main>
    //     <footer>
    //       <p> Om oss... </p>
    //     </footer>
    //   </div>
    // </Router>
  )
}

export default App
