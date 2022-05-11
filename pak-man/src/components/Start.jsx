import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'


function Start () {

    return(
        <div className="App">
        <main>
          <header>
          <img src="https://i.ibb.co/2qn1pGv/Arcade-game.png" alt="" width={200} height={150} /> 
          <h1 className="title">SPELHUBB</h1>
          </header>
          <article>Article</article>
          <nav>
            <div><NavLink to="/Spel1"> PAC MAN </NavLink></div>
            <div><NavLink to="/Spel2"> TIC TAC TOE </NavLink></div>
            <div><NavLink to="/Spel3"> SNAKE </NavLink></div>
          </nav>
          <aside>
            Author
          </aside>
          <footer>Footer</footer>
        </main>
      </div>
    )
}
export default Start