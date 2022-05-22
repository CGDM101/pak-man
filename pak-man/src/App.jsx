import './App.css'
import {BrowserRouter as Router, NavLink, Routes, Route, Navigate} from 'react-router-dom'
import Spel2 from './components/Spel2'
import Start from './components/Start'
import YatzyComponent from './components/Yatzy'

function App() {

  return (

    <Router>
    <div>
      <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/yatzy" element={<YatzyComponent />} />
        </Routes>
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
