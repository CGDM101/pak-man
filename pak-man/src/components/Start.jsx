import { useContext } from 'react'
import { MenuContext } from './TheMenu'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import '../App.css'
import Menu from './Menu'
import Header from './Header'
import Games from './Games'


function Start () {

    return(
        <div>
           <div>
        <main>
          <Header />
          <article className='article-icons'>

    
              {Games.map(game =>    
                <a target="_blank" key={game.id} href={game.url}><img src={game.img} alt=""/>{game.name}</a>
                )}
            
          </article>

          <Menu />

          <nav>
              {Games.map(game =>    
                <a target="_blank" key={game.id} href={game.url}>{game.name}</a>
                )}
            
          </nav>

          <aside>

          </aside>
          <footer>
            <p>Copyright © 2022 Spelhubb - All Rights Reserved.</p>
          </footer>
        </main>
      </div>
        </div>
    )
}
export default Start