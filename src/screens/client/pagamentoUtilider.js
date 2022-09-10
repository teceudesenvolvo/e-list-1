import React, { Component } from 'react';

//Imagens
import utiliderImg from '../../assets/utilider.png';
// Icones
import {

    FaCheckCircle
} from 'react-icons/fa';
// Components

//mudança de páginas


class pagamentoUtilider extends Component {
    render() {
        return (

            <div className='App-header' >
                <div className='utilider-container'>
                    <div className='utilider-header'>
                        <img className='utilider-img' src={utiliderImg}></img>
                    </div>

                    <div className='utilider-Pag-Tilulo'>
                        <h3>Compra realizada!</h3>
                    </div>
    
                    <div className='utilider-Desc-Pag'>
                        <h5>Compra paga com</h5>
                        <p>Cartão de crédito - ViSA - 8888</p>
                    </div>
  
                    <div className='utilider-Desc-Produtos'>
                        <h5>Produto</h5>
                        <p>Itens comprado 1</p>
                        <p>Itens comprado 2</p>
                       <h7>Total</h7>

                    </div>
               
                    <div className='utilider-Ir-minhasCompras'>
                          <a href="/Compras" >Ir para minhas compras</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default pagamentoUtilider;