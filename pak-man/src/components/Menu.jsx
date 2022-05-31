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
		   {/* <a href="">kategori</a> */}
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