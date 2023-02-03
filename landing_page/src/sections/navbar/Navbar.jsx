import Logo from '../../assets/logo.jpg';
import data from './data';
import {IoIosColorPalette} from 'react-icons/io';
import './navbar.css';

function Navbar() {
  return (
    <nav>
    <div className="container nav__container">
     {/*Link */}
      <a href = "index.html" className = 'nav__logo'>
        <img src={Logo} alt="Logo" />
      </a>
      {/*List */}
      <ul className = 'nav__menu'>
        {
          data.map(
            item => <li key = {item.id}><a href = {item.link}>{item.title}</a></li>)
        }
      </ul>
       {/*Button*/}
      <button id = 'theme__icon'><IoIosColorPalette/></button>
    </div>
    </nav>
  )
}

export default Navbar