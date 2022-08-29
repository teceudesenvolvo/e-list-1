import React, { Component } from 'react';

//Imagens
import camera from '../../assets/Camera.png';
// Icones
import {

    FaStar
} from 'react-icons/fa';
// Components

//mudança de páginas

class pagamento extends Component {
    render() {
        return (

            <div className='App-header' >
                <div className='Produto-container'>
                    
                    <p>Realizar Pagamento</p>


                    <div className='price-buttom' >
                        <div >
                            <h5 >R$ 60,00</h5>
                            <h5 > <FaStar color='#FF7A00' /> 4,9</h5>
                        </div>

                        <input type='button' value="Concluir" />
                    </div>
                </div>

            </div>
        );
    }
}

export default pagamento;