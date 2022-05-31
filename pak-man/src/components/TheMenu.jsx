import {useState, createContext } from 'react'

 export	const MenuContext = createContext()

	 const TheMenu = ({children}) => {

	const [isOpen, setOpen] = useState(false)
	return(
		<MenuContext.Provider value={[isOpen, setOpen]}>
			{children}
		</MenuContext.Provider>
	)
}

export default TheMenu