import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css'

//Imagens
import camera from '../assets/Camera.png';
import barbearia from '../assets/Barbearia.png';
import lavajato from '../assets/Lava-jato.png';
import fotebol from '../assets/Fotebol.png';
// Icones

// Components
import Menu from '../componets/menu';

//mudança de páginas

class Home extends Component {
  render() {
    return (

      <div className='App-header' >
        <Menu />
        <input type="text" className='inputPesquisar' placeholder="Pesquisar" />
        <div className='conteinerHome'>
          <p className='textoDestaques'>Destaques</p>
          <div className='carrosselHome'>
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
          <p className='textoDestaques'>Ultimos Vistos</p>
          <div className=' vistosHome'>
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