import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens

// Icones

// Components
import Menu from '../../componets/menu';

//mudança de páginas

class Minhas_Compras extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <Menu/>
            <h1>Compras</h1>
            <a href='/login' className='linkLogin'>login</a>
            <a href='/register' className='linkRegister'>register</a>
        </div>
    );
  }
}

export default Minhas_Compras;