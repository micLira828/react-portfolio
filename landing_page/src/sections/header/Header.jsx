import HeaderImage from '../../assets/header.jpg'
import './header.css'
import data from './data'

function Header() {
  return (
   <header id = "header">
   <div className="container header__container">
    <div className="header__profile">
    <img src = {HeaderImage} alt = "Header Portrait"/>
    </div>
    <h3>Hajia Bintu</h3>
    <p>You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!</p>
   <div className="header__cta">
     <a href="#contact" className = 'btn primary'>Let's Talk</a>
     <a href="#portfolio" className="btn light">My work</a>
   </div>
   <div className="header__socials">
    {data.map(item => <a rel = "noopener noreferror"key = {item.id} target="_blank" href = {item.link} >{item.icon}</a>)}
   </div>
   </div>
   </header>
  )
}

export default Header