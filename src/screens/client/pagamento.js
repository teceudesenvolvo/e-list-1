import React, { Component } from 'react';

//Imagens

// Icones
import {

    FaCheckCircle
} from 'react-icons/fa';
// Components

//mudança de páginas

class pagamento extends Component {
    render() {
        return (

            <div className='App-header' >
                <div className='Pagamento-container'>
                <FaCheckCircle className='ok-circle'></FaCheckCircle>
                    <h5>Pagamento Realizado Com Sucesso</h5>
                    
                   
                
                   
                </div>

            </div>
        );
    }
}

export default pagamento;