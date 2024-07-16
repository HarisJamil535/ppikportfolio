import React ,{useState} from 'react'
import './Navbar.scss'

const Navbar = () => {
  const [menuOpen, setMenuOpen]  = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
        <div className='logo'>P.S </div>
      
        <ul>
            <li><button>GET IN TOUCH</button></li>
            <li><button onClick={toggleMenu}>MENU</button></li>
        </ul>
        {menuOpen && (
        <div className='menu'>
          <button className='get-in-touch-btn' >GET IN TOUCH</button>
          <button className='close-button' onClick={toggleMenu}>CLOSE</button>
          <ul className='menu-items gothic-a1-black'>
            <li>Home</li>
            <li>PORTFOLIO</li>
            <li>SERVICES</li>
            <li>WORKFLOW</li>
            <li>CONTACT</li>
          </ul>
          <div className='bottom-menu'>
            <button>FIGMA</button>
            <button>LINKEDIN</button>
            <button>E-MAIL</button>
            <button>BEHANCE</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar