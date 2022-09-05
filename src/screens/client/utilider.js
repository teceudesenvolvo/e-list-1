import React, { Component } from 'react';



//Imagens
import utiliderImg from '../../assets/utilider.png';
// Icones

// Components
import ProductsUtilider from '../../componets/productsUtilider';

//mudança de páginas

class utilider extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <div className='utilider-container'>
              <div className='utilider-header'>
                <img className='utilider-img' src={utiliderImg}></img>
              </div>

                <img className='utilider-banner' src='https://utilider.com/wp-content/uploads/2022/04/BALDE-PARA-CERVEJA-76L.jpg'  ></img>
                <ProductsUtilider></ProductsUtilider>
            </div>
        </div>
    );
  }
}

export default utilider;