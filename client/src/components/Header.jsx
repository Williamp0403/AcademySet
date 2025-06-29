import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";

export function Header () {
  return (
    <header className="sticky top-0 z-5 bg-zinc-100">
      <nav className="flex items-center justify-between py-8 px-8 sm:px-12">
        <h2 className="font-bold text-xl">AcademySet</h2>
        <ul className='hidden md:flex justify-between gap-x-20'>
          <li>
            <NavLink to='/' className={({ isActive }) => ` py-2 cursor-pointer font-bold relative ${ isActive ? "text-sky-500 after:w-full" : "text-black after:w-0 hover:text-sky-500" } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-400` }>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/libros' className={({ isActive }) => ` py-2 cursor-pointer font-bold relative ${ isActive ? "text-sky-500 after:w-full" : "text-black after:w-0 hover:text-sky-500" } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-400` }>
              Libros 
            </NavLink>
          </li>
          <li>
            <NavLink to='/usuarios' className={({ isActive }) => ` py-2 cursor-pointer font-bold relative ${ isActive ? "text-sky-500 after:w-full" : "text-black after:w-0 hover:text-sky-500" } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-400` }>
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to='/historial' className={({ isActive }) => ` py-2 cursor-pointer font-bold relative ${ isActive ? "text-sky-500 after:w-full" : "text-black after:w-0 hover:text-sky-500" } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-400` }>
              Historial
            </NavLink>
          </li>
        </ul>
        <BurgerMenu/>
      </nav>
    </header>
  )
}