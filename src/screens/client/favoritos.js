import React, { Component } from 'react';

//Imagens
import camera from '../../assets/Camera.png';
// Icones

// Components

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