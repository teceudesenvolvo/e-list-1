import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens

// Icones

// Components
import SlideFeactures from '../../componets/slideFeactures';

//mudança de páginas

class Minhas_Compras extends Component{
  render(){  
    return (   

        <div className='App-header' >

            <p>Minhas Compras</p>
            <div className='minhasCompras'>
                  <p>Não Tem Compras!</p>
                  <SlideFeactures/>
            </div>
           
        </div>
    );
  }
}

export default Minhas_Compras;