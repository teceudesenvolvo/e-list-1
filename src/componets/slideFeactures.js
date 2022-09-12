import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

//Imagen

// Icones


// Components

//mudança de páginas

class slideFeactures extends Component {
    state = {
        servicos: [
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/BATERIA-ALFACELL-LITHIUM-3V-CARTELA-C-2.webp',
                desc: 'Descrição do Produto  1',
              
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/PILHA-ALFACELL-COMUM-PQ-AA-1.5V-C-4-CARTELA.webp',
                desc: 'Descrição do  Produto 2',
              
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/PISTOLA-PCOLA-QUENTE.webp',
                desc: 'Descrição do Produto 3',
               
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/VDA06020-PETISQUEIRA-DE-VIDRO-D.webp',
                desc: 'Descrição do  Produto 4',
             
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/POTE-C-TAMPA-CLEAN-PRA.jpg',
                desc: 'Descrição do  Produto 5',
              
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/tabua-bambu-nv.webp',
                desc: 'Descrição do  Produto 6',
             
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/JARRA-DE-VIDRO-LOSANGO-416x416.jpg',
                desc: 'Descrição do  Produto 7',
              
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/POTE-DE-VIDRO-RT-C-DIV.jpg',
                desc: 'Descrição do  Produto 8',
                
            }, 
        ]
    }

   


    render() {
        const servicos = this.state.servicos 

        if(servicos.length > 8){
            servicos.length = 8
        }
        const randomObject = servicos[Math.floor(Math.random() * servicos.length)];

        const listServicos = servicos.map((servico) => 
        <SplideSlide key={(servico.id)} className="slidesFeacture"
        onClick={
            () => {
              window.location.href = "/produto"
              
            }
          }
        // onClick={
        //   () => {this.setState({id: aviso.id}, () => {
        //     (this.props.clickButton(this.state))
        //     (window.location.href = "/item")
        //   })}
        // }
        >
              {/* <img src={aviso.imageUrl}/> */}
            
              <img class="imagDestaques"  src={servico.image} alt=""></img>
              <div class="DestaquesDescricao" >
                <p>{servico.desc}</p>
              </div>
      </SplideSlide>
    )


        return (
            <>
                <Splide 
                options={{
                    perPage: 3,
                    focus  : 'center',
                    drag: 'free'
                }} aria-label="My Favorite Images" className='slideMatriz' >
                    {listServicos}
                </Splide>
            </>

        );
    }
}

export default slideFeactures;
