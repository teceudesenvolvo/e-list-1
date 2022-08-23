import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css'

//Imagens
import camera from '../assets/Camera.png';
import barbearia from '../assets/Barbearia.png';
import lavajato from '../assets/Lava-jato.png';
import fotebol from '../assets/Fotebol.png';
// Icones
import { 
  FaCamera,
  FaCar,
  FaVolleyballBall
} from "react-icons/fa";

// Components
import SlideFeacures from '../componets/slideFeactures';

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

            <div className='categoriasItem'>
              <img src={barbearia} alt='barbearia' />

            </div>
            <div className='categoriasItem'>
              <img src={lavajato } alt='lavajato ' />
            </div>
            <div className='categoriasItem'>
              <img src={fotebol} alt='Fotebol' />
            </div>
            <div className='categoriasItem'>
              <img src={barbearia} alt='barbearia' />

            </div>
            <div className='categoriasItem'>
              <img src={barbearia} alt='barbearia' />
            </div>
            <div className='categoriasItem'>
              <img src={barbearia} alt='barbearia' />
            </div>

          </div>



          {/* View Latest */}
          <p className='textoDestaques'>Ultimos Vistos</p>
          <div className='vistosHome'>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>
            <div className='carrosselItem'>
              <img src={camera} alt='camera' className='camera' />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;