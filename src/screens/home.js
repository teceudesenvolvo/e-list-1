import React, { Component } from 'react';
import '../App.css'

//Imagens
import Logo from '../assets/logoLaranga.png';

// Icones
import {
 
  FaSistrix,
  

} from "react-icons/fa";

// Components
import SlideFeacures from '../componets/slideFeactures';
import Categories from '../componets/categories';
import ProductsList from '../componets/productsListHome';

//mudança de páginas

class Home extends Component {
  render() {
    return (

      <div className='App-header' >

        {/* Search */}
        <div className='header-home'>
          <a href='/' className="logoDesktop" >
            <img src={Logo} alt="Logo" />
          </a>
          <div className='inputPesquisar' >
            <p className='pPesquisar'  >Pesquisar</p>

            <FaSistrix className='PesquisarLogo'/>
          </div>

        </div>

        <div className='conteinerHome'>

          {/* Carrosel */}
          <p className='textoDestaques'>Destaques</p>
          <SlideFeacures/>


          {/* Categories */}


          <p className='textoDestaques'>Categorias</p>
          <div className='categoriasHome'>
            <Categories />
          </div>



          {/* View Latest */}
          <p className='textoDestaques'>Ultimos Vistos</p>
          <div className=''>
            <ProductsList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;