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
            <p>Minhas Compras</p>
            <div className='minhasCompras'>
                
                  <p>Não Tem Compras!</p>
            </div>
           
        </div>
    );
  }
}

export default Minhas_Compras;