import React, { Component } from 'react';

//Imagens
import Logo from '../../assets/logoLaranga.png';

// Icones
import {

    FaSistrix,


} from "react-icons/fa";

// Components
import ProductsList from '../../componets/productsListHome';

//mudança de páginas

class categorias extends Component {
    render() {
        return (

            <div className='App-header' >
                <div className='header-home'>
                    <a href='/' className="logoDesktop" >
                        <img src={Logo} alt="logomarca e-list" ></img>
                    </a>
                    <div className='inputPesquisar' >
                        <p className='pPesquisar'  >Pesquisar</p>

                        <FaSistrix className='PesquisarLogo' />


                    </div>

                </div>

                <div className='conteinerCategorias'>
                    <div className='categoriesHeader'>
                        <div className='imgCategorias' >
                        <img alt="icone categoria" src='https://github.com/teceudesenvolvo/e-list-1/blob/master/src/assets/ICONS%20FOR%20SITE_Prancheta%201%20c%C3%B3pia%205.png?raw=true'  />
                        </div>
                        
                      
                        <p className='pCategories' >Cursos</p>
                    </div>


                    
                    <div className=''>
                        <ProductsList />
                    </div>

                </div>



            </div>
        );
    }
}

export default categorias;