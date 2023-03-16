import React from 'react'
import './floating-nav.css';
import Nav from './Nav';
import Scrollspy from 'react-scrollspy';
import data from'./data';

const FloatingNav = () => {
  return (
    <ul id = "floating__nav">
    <Scrollspy offset = {-500} items = {['header', 'about', 'services', 'portfolio', 'contact']} 
    className = "scrollspy" currentClassName="active">
      { 
          data.map(item => <Nav item={item} key ={item.id}
          />)
      }
      </Scrollspy>
      
    </ul>
  )
}

export default FloatingNav