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
import Menu from '../../componets/menu';
import CustomizeDayPicker from '../../componets/CustomizeDayPicker';


//mudança de páginas

class Mais extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <p className='Mais-title'>Mais</p>
            <div className='Mais-content'>
              <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
             <div className='Mais-item'>
                <a href='/' className='Mais-icon' >
                  <FaHome/>
                  <span className='Mais-item-title'>Home</span>
                </a>
             </div>
            </div>

            <a href='/login' className='linkLogin'>login</a>
            <a href='/register' className='linkRegister'>register</a>
            
         
        </div>
    );
  }
}

export default Mais;