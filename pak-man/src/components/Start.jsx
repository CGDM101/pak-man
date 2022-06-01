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
          <article>

    {/* If...else statement  Shorthand */}  
                            {/*game.type === true ?  */}
              {Games.map(game =>    
                <a target="_blank" key={game.id} href={game.url}><img src={game.img} alt=""/>{game.name}</a>
                )}
            
    {/*----------- If...else statement  Longhand *-----------------/}

              {/* {Games.map(game => {
                if (game.type === true){
                  return(
                    <NavLink target="_blank" to={game.url}><img src={game.img} alt=""/>{game.name}
                    </NavLink>
                  )
                }else{
                  return(
                    <a target="_blank" href={game.url}><img src={game.img} alt=""/>{game.name}</a>
                    )
                  }
                })} */}
            
          </article>

          <Menu />

          {/* {displayResults()} */}
          
          <nav>
                           {/*game.type === true ?  */}
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