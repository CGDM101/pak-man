import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../Header'
import Menu from '../Menu'
import './/AboutUs.css'

function AboutUs () {

    return(
        <div>
            <div>
        <main>
          <Header />
          <article className='about-arti'>
            <h1>Om oss</h1>
            <p>
                <b> Vår vision är enkel:</b> alla ska kunna spela spel oavsett dator.
                Allt du behöver är en internetuppkoppling. På Spelhubb kan du spela spel som är lätta att komma igång och spela, men svåra att bemästra. Allt med en retrokänsla!
            </p>
            <p>Är det något du saknar på Spelhubb? Ta gärna kontakt med oss: </p>
            <p>hej@spelhubb.se</p>
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
export default AboutUs