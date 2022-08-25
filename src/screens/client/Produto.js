import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens
import camera from '../../assets/Camera.png';
// Icones

// Components
import Menu from '../../componets/menu';

//mudança de páginas

class Produto extends Component {
  render() {
    return (

      <div className='App-header' >


        <div className='Produto-container'>
          <p className='align-left'>Mais Vendido</p>
          <h3 className='Produto-title align-left'>Lavagem Completa</h3>
          <div className='favoritosItem'>
            <img src={camera} alt='camera' className='camera' />
          </div>
          <input type='text'className='inputLogin' name='select-Produto' placeholder='Escreva uma obisevação'/>


        
         

          <ul className='align-left'>
            <li>Lavagem de pintura</li>
            <li>Aspiração carpetes</li>
            <li>Limpeza de painel</li>
            <li>Aspiração de bancos</li>
            <li>Enceramento de pintura</li>
          </ul>
           <div >
            <h5 >R$ 60,00</h5><button>Confira Disponibilidade</button>
           </div>


        </div>
      </div>
    );
  }
}

export default Produto;