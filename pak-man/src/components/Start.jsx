import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'


function Start () {

    return(
        <div className="App">
        <main>
          <header>
          <img src="https://i.ibb.co/2qn1pGv/Arcade-game.png" alt="" width={200} height={150} /> 
          <h1 className="title">SPELHUBB</h1>
          </header>
          <article>

          </article>
          <nav>
            <div>
            <a href="https://stirring-dodol-875e35.netlify.app/">PACMAN</a>
            </div>
            <div>
              <a href="https://playsnake.org/?msclkid=7c3f6cadd15711ec851ff395b16ea1d1">SNAKE</a>
            </div>
            <div>
              <a href="https://playtictactoe.org/">TIC TAC TOE</a>
            </div>
          </nav>
          <aside>
            
          </aside>
          <footer>

          </footer>
        </main>
      </div>
    )
}
export default Start