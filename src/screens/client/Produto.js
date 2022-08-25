import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens
import camera from '../../assets/Camera.png';
// Icones

// Components

//mudança de páginas

class Produto extends Component {
  render() {
    return (

      <div className='App-header' >


        <div className='Produto-container'>
          <p className='textoDestaques'>Mais Vendido</p>
          <h1 className='Produto-title'>Lavagem Completa</h1>
          <div className='productId'>
            <img src={camera} alt='camera' className='camera' />
          </div>    
          <h1 className='servico-desc'>Descrição do serviço </h1>
          <p className='txtProduct'>
            Lorem
          </p>
           <div >
            <h5 >R$ 60,00</h5><button>Confira Disponibilidade</button>
           </div>


        </div>
      </div>
    );
  }
}

export default Produto;