import React, { Component } from 'react';



//Imagens
import utiliderImg from '../../assets/utilider.png';
// Icones
import {
  FaStar,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcJcb,
  FaCcDiscover
} from 'react-icons/fa'
// Components
import ProductsUtilider from '../../componets/productsUtilider';

//mudança de páginas

class utilider extends Component {
  render() {
    return (

      <div className='App-header' >
        <div className='utilider-container'>
          <div className='utilider-header'>
            <img className='utilider-img' src={utiliderImg}></img>
          </div>
          <div class="ProdutoCardUtilider">
            <img alt='produto' src='https://utilider.com/wp-content/uploads/2022/04/BATERIA-ALFACELL-LITHIUM-3V-CARTELA-C-2.webp'>
            </img>
            <div>
              <p>Titulo do produto</p>
              <p>R$ 190,00</p>
              <p>Descrição do produto</p>


            </div>
          </div>
          <div class="ProdutoCardUtilider">
            <img alt='produto' src='https://utilider.com/wp-content/uploads/2022/04/BATERIA-ALFACELL-LITHIUM-3V-CARTELA-C-2.webp'>
            </img>
            <div>
              <p>Titulo do produto</p>
              <p>R$ 190,00</p>
              <p>Descrição do produto</p>


            </div>
          </div>



          <div className='price-buttomUtilider' >
          <div >
            <h5 >R$ 60,00</h5>
            <h5 > <FaStar color='#FF7A00' /> 4,9</h5>
          </div>

          <input  type='button' value="Comprar" />
        </div>
        </div>
      </div>
    );
  }
}

export default utilider;