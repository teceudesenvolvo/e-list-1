import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//Imagens


// Icones
import { 
  FaHome,
  FaHeart,
  FaShoppingBag,
  FaBell,
  FaBars
} from "react-icons/fa";

// Components

//mudança de páginas

class menu extends Component{
  render(){  
    return (      
        <nav className='menu'>
            
            <a href='/' className='linkMenu active'> <FaHome /> </a>
            <a href='/favoritos' className='linkMenu'> <FaHeart /> </a>
            <a href='/Compras' className='linkMenu'> <FaShoppingBag /> </a>
            <a href='/Notificacoes' className='linkMenu'> <FaBell /> </a>
            <a href='/Mais' className='linkMenu'> <FaBars /> </a>
               
        </nav>

    );
  }
}

export default menu;
