import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Games from './Games'
import Header from './Header'
import Menu from './Menu'
import '../App.css'

function ExternalGames () {

    return(
        <div>
            <div>
        <main>
          <Header />
          <article className='art-page'>

		    <div className='page-title'>
			   <p>Externa spel</p>
			</div>

			<div className='article-icons'>
				{Games.map(game => (game.category === 'external' ?     
					<a target="_blank" key={game.id} href={game.url}><img src={game.img} alt=""/>{game.name}</a>
					:null
					))}
            </div>
          </article>

          <Menu />

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
export default ExternalGames