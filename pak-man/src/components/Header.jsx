import { useState, useContext } from 'react'
import { MenuContext } from './TheMenu'
import Hamburger from 'hamburger-react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import '../App.css' 


function Header () {

	
  const [isOpen, setOpen] = useContext(MenuContext);

	return(
		<header>
           <div className='hamburger-menu'>
              <Hamburger color="#ffffff"  toggled={isOpen} toggle={setOpen}/>
              

              
              {/* // onToggle= { () => {
              //   if (isOpen === true) {
              //     return(
              //       <h1>open a menu</h1>
              //     )
                  
              //   } else {
              //     return(
              //       <h1>open a menu</h1>
              //     )
                  
              //   }
              // }}  */}

              
           </div>
       

            <div className='header-left-side'>
              <img src="https://i.ibb.co/2qn1pGv/Arcade-game.png" alt=""  /> 
            </div>
          
           <h1 className='title'>SPELHUBB</h1>

           <div className='header-right-side'>
              <NavLink className="links"  to="/">Start</NavLink>
              <NavLink className="links"  to="/about">Om oss</NavLink>
           </div>
    </header>
	)

}

export default Header