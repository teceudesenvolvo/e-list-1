import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens

// Icones

// Components
import Menu from '../../componets/menu';

//mudança de páginas

class Notificacoes extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <Menu/>
            <p>Notificações</p>
          
        </div>
    );
  }
}

export default Notificacoes;