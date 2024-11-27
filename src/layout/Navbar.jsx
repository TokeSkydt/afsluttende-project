import { NavLink } from "react-router-dom"
import './navbar.css'
import { useState } from "react"
import { GiHamburger } from "react-icons/gi"


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)


  return (
    <nav>
      
    <nav className="relative text-white bg-gray-700">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <p className="ml-4">dataservice afsluttende project</p>

          <button onClick={()=> setShowMenu (!showMenu)} className='mr-2 lg:hidden'><GiHamburger /></button>

          <menu className={`z-10 absolute top-0 lg:flex-row lg:h-auto lg:flex lg:left-0 lg:static lg:p-1 lg:w-auto flex-col h-screen p-10 ${showMenu === true ? "left-0" : "-left-full"} transition-all duration-1000 bg-white`}>
            
          <li className="mx-4 my-5 text-black ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-4 my-5 text-black">
            <NavLink to="/viborghaveservice1">ViborgHaveservice1</NavLink>
          </li>
          <li className="mx-4 my-5 text-black">
            <NavLink to="/viborghaveservice2">ViborgHaveservice2</NavLink>
          </li>
          <li className="mx-4 my-5 text-black">
            <NavLink to="/vejret">Vejret</NavLink>
          </li>
          <li className="mx-4 my-5 text-black">
            <NavLink to="/energidata">Energidata</NavLink>
          </li>
          <li className="mx-4 my-5 text-black">
            <NavLink to="/opgave4">Opgave 4 - frit valg</NavLink>
          </li>
          </menu>
        </div>
      </div>
      
    </nav>

    </nav>
  )
}

export default Navbar