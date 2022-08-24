import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css'

//Imagens
import camera from '../assets/Camera.png';

// Icones

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
        <input type="text" className='inputPesquisar' placeholder="Pesquisar" />
        <div className='conteinerHome'>

          {/* Carrosel */}
          <p className='textoDestaques'>Destaques</p>
          <SlideFeacures></SlideFeacures>


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