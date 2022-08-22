import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css'

//Imagens
import camera from '../assets/Camera.png';
import categorias from '../assets/Categorias.png';
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
            <img src={categorias} alt='categorias' className='categorias' />
            <img src={categorias} alt='categorias' className='categorias' />
            <img src={categorias} alt='categorias' className='categorias' />
            <img src={categorias} alt='categorias' className='categorias' />
            <img src={categorias} alt='categorias' className='categorias' />
            <img src={categorias} alt='categorias' className='categorias' />
            
           
           </div> 
           <p className='textoDestaques'>Ultimos Vistos</p>
        </div>
      </div>
    );
  }
}

export default Home;