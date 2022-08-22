import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens
import camera from '../../assets/Camera.png';
// Icones

// Components
import Menu from '../../componets/menu';

//mudança de páginas

class favoritos extends Component {
  render() {
    return (

      <div className='App-header' >

        <p>Favoritos</p>
        <div className='favoritos'>
          <div className='favoritosItem'>
            <img src={camera} alt='camera' className='camera' />
          </div>
          <div className='favoritosItem'>
            <img src={camera} alt='camera' className='camera' />
          </div>
          <div className='favoritosItem'>
            <img src={camera} alt='camera' className='camera' />
          </div>
          <div className='favoritosItem'>
            <img src={camera} alt='camera' className='camera' />
          </div>
          <div className='favoritosItem'>
            <img src={camera} alt='camera' className='camera' />
          </div>
          <div className='favoritosItem'>
            <img src={camera} alt='camera' className='camera' />
          </div>
        </div>
      </div>
    );
  }
}

export default favoritos;