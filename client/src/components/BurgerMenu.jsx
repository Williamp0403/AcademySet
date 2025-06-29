import { useState } from "react"
import { NavLink } from "react-router-dom"
import MenuIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/CloseOutlined';

export function BurgerMenu () {
 const [ isOpen, setIsOpen ] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='block relative md:hidden'>
      <MenuIcon className='cursor-pointer' fontSize='large' onClick={toggleMenu}/>
       <div className={`${ isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-screen w-[calc(100vw-100px)] bg-zinc-200 transition-transform duration-300 ease-in-out z-50`}>
         <div className="p-2">
          <div className="flex justify-end mb-10">
            <CloseIcon className='cursor-pointer' fontSize='large' onClick={toggleMenu}/>
          </div>
          <ul className="flex flex-col justify-center items-start">
            <li className="border-t border-zinc-500 w-full">
               <NavLink className="p-4 font-semibold w-full block" to="/" onClick={toggleMenu}>
                Inicio
              </NavLink>
            </li>
            <li className="border-t border-zinc-500 w-full">
               <NavLink className="p-4 font-semibold w-full block" to="/libros" onClick={toggleMenu}>
                Libros
              </NavLink>
            </li>
            <li className="border-t border-zinc-500 w-full">
               <NavLink className="p-4 font-semibold w-full block" to="/usuarios" onClick={toggleMenu}>
                Usuarios
              </NavLink>
            </li>
            <li className="border-t border-zinc-500 w-full">
               <NavLink className="p-4 font-semibold w-full block" to="/historial" onClick={toggleMenu}>
                Historial
              </NavLink>
            </li>            
            </ul>
          </div>
       </div>
        {
          isOpen && <div onClick={toggleMenu} className="fixed top-0 right-0 left-0 bottom-0 h-screen bg-zinc-700 opacity-75"></div>
        }
    </nav>
  )
}