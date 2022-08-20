import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//Imagens
import logo from '../../assets/logoLaranga.png';
// Icones

// Components

//mudança de páginas

class loginClient extends Component{
  render(){  
    return (      
        <div className='Container' >
            <img src={logo} alt="logo" className='logo'/>
            <h1>loginClient</h1>
            <p>from <b>Meta</b></p>
        </div>
    );
  }
}

export default loginClient;