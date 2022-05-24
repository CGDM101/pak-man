import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import '../App.css'
import imgpakman from '../img/imgpakman.jpg'
import imgsnake from '../img/imgsnake.jpg'
import imgtictactoe from '../img/imgtictactoe.jpg'
import imgbattleship from '../img/imgbattleship.jpg'
import imgspaceinvaers from '../img/imgspaceinvaers.jpg'
import imgpong from '../img/imgpong.jpg'
import imgyatzy from '../img/imgyatzy.jpg'


function Start () {

    return(
        <div>
           <div>
        <main>
          <header>
          <img src="https://i.ibb.co/2qn1pGv/Arcade-game.png" alt="" width={200} height={150} /> 
          <h1 className="title">SPELHUBB</h1>
          <NavLink to="/about">About Us</NavLink>
          </header>

          <article>
            
              <a target="_blank" href="https://stirring-dodol-875e35.netlify.app/"><img src={imgpakman} alt=""/>PAC-MAN</a>
              <NavLink target="_blank" to="/yatzy"><img src={imgyatzy} alt=""/>Yatzy</NavLink>
              <a target="_blank" href="https://playsnake.org/?msclkid=7c3f6cadd15711ec851ff395b16ea1d1"><img src={imgsnake} alt="" /> <br />SNAKE</a>
              <a target="_blank" href="https://playtictactoe.org/"><img src={imgtictactoe} alt="" /> <br />TIC-TAC-TOE</a>
              <a target="_blank" href="http://www.battleship-online.org/ai"><img src={imgbattleship} alt="" /> <br />BATTLESHIP</a>
              <a target="_blank" href="https://www.spaceinvadersflash.com/?msclkid=6a5634cdd15d11eca2672ba97ffc8a94"><img src={imgspaceinvaers} alt="" /> <br />SPACE INVADERS</a>
              <a target="_blank" href="https://www.ponggame.org/?msclkid=985c7090d15811ec910f02f2a128bddf"><img src={imgpong} alt="" /> <br />PONG GAME</a>
              
              
            
          </article>
          <nav>
            <a target="_blank" href="https://stirring-dodol-875e35.netlify.app">PACMAN</a>
            <NavLink target="_blank" to="/yatzy">Yatzy</NavLink>
            <a target="_blank" href="https://playsnake.org/?msclkid=7c3f6cadd15711ec851ff395b16ea1d1">SNAKE</a>
            <a target="_blank" href="https://playtictactoe.org/">TIC-TAC-TOE</a>
            <a target="_blank" href="http://www.battleship-online.org/ai">BATTLESHIP</a>
            <a target="_blank" href="https://www.spaceinvadersflash.com/?msclkid=6a5634cdd15d11eca2672ba97ffc8a94">SPACE INVADERS</a>
            <a target="_blank" href="https://www.ponggame.org/?msclkid=985c7090d15811ec910f02f2a128bddf">PONG GAME</a>
          </nav>
          <aside>

          </aside>
          <footer>

          </footer>
        </main>
      </div>
        </div>
    )
}
export default Start