import { useContext } from 'react'
import { MenuContext } from './TheMenu'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import '../App.css'


function Menu () {


	const [isOpen, setOpen] = useContext(MenuContext);

  const displayResults = () => {
    if (isOpen === true) {
      return(
        <menu>  
           <NavLink className="links"  to="/">Start</NavLink>
           <NavLink className="links"  to="/about">Om oss</NavLink>
		   <p>kategori :</p>

		   <ul>
		     <NavLink className="links"  to="/ourgames">Våra spel</NavLink>
           	 <NavLink className="links"  to="/externalgames">Externa spel</NavLink>
		   </ul>
		  	 
        </menu>
      )
    }
  }

    return(
        <div>
            {displayResults()}
        </div>
    )
}
export default Menu