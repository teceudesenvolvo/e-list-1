import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens

// Icones

// Components
import Teste from '../../componets/teste';

//mudança de páginas

class Minhas_Compras extends Component{
  render(){  
    return (   

        <div className='App-header' >

            <p>Minhas Compras</p>
            <div className='minhasCompras'>
                  <p>Não Tem Compras!</p>
                  <Teste/>
            </div>
           
        </div>
    );
  }
}

export default Minhas_Compras;