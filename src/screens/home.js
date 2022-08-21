import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css'

//Imagens

// Icones

// Components
import Menu from '../componets/menu';

//mudança de páginas

class Home extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <Menu/>
            <h1>Home</h1>
            <a href='/login' className='linkLogin'>login</a>
            <a href='/register' className='linkRegister'>register</a>
        </div>
    );
  }
}

export default Home;