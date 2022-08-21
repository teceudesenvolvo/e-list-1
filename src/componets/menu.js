import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//Imagens
import home from '../assets/home.png';
import love from '../assets/love.png';
import shopping from '../assets/shopping.png';
import alarm from '../assets/alarm.png';
import menuLogo from '../assets/menu.png';

// Icones

// Components

//mudança de páginas

class menu extends Component{
  render(){  
    return (      
        <nav className='menu'>
            
            <a href='/' className='linkMenu'> <img src={home}  /></a>
            <a href='/favoritos' className='linkMenu'> <img src={love}  /></a>
            <a href='/Compras' className='linkMenu'> <img src={shopping}  /></a>
            <a href='/Notificacoes' className='linkMenu'> <img src={alarm}  /></a>
            <a href='/Mais' className='linkMenu'> <img src={menuLogo}  /></a>
               
        </nav>

    );
  }
}

export default menu;
