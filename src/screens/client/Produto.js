import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens
import camera from '../../assets/Camera.png';

// Icones
import {
  FaStar
} from 'react-icons/fa'

// Components

//mudança de páginas

class Produto extends Component {
  render() {
    return (

      <div className='App-header' >


        <div className='Produto-container'>
          <p className='textoDestaques'>Serviço</p>
          <h1 className='Produto-title'>Lavagem Completa</h1>
          <div className='productId'>
            <img src={camera} alt='camera' className='camera' />
          </div>  
          <div className='desc-product' >
            <h1 className='servico-desc'>Descrição do serviço </h1>
            <p className='txtProduct'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>  
           <div className='price-buttom' >
            <div >
              <h5 >R$ 60,00</h5>
              <h5 > <FaStar color='#FF7A00'/> 4,9</h5>
            </div>

            <input type='button' value="Confira Disponibilidade"/>
           </div>


        </div>
      </div>
    );
  }
}

export default Produto;