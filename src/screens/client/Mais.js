import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens

// Icones

// Components
import Menu from '../../componets/menu';

//mudança de páginas

class Mais extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <p>Mais</p>
            <a href='/login' className='linkLogin'>login</a>
            <a href='/register' className='linkRegister'>register</a>
        </div>
    );
  }
}

export default Mais;