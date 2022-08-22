import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//Imagens
import home from '../assets/home.png';
import love from '../assets/love.png';
import shopping from '../assets/shopping.png';
import alarm from '../assets/alarm.png';
import menuLogo from '../assets/menu.png';

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
