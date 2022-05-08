import './App.css'
import {BrowserRouter as Router, NavLink, Routes, Route, Navigate} from 'react-router-dom'
import Spel1 from './components/Spel1'
import Spel2 from './components/Spel2'

function App() {

  return (
    <Router>
      <div>
        <header>
          <NavLink to=""> Startsida </NavLink>
          <NavLink to="/spel1"> Spel 1 </NavLink>
          <NavLink to="/spel2"> Spel 2 </NavLink>
        </header>
        <main>
          <Routes>
            <Route path="/spel1" element={<Spel1 />} />
            <Route path="/spel2" elememt={<Spel2 />} />
            <Route path="/" element={<Start />} />
          </Routes>
        </main>
        <footer>
          <p> Om oss... </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
