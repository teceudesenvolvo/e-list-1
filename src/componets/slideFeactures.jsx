import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

//Imagens


// Icones


// Components

//mudança de páginas

class slideFeactures extends Component {
    state = {
        servicos: [
            {
                id: '1',
                image: 'caminho'
            }, 
            {
                id: '2',
                image: 'caminho'
            },
            {
                id: '3',
                image: 'caminho'
            },
            {
                id: '4',
                image: 'caminho'
            },
            {
                id: '5',
                image: 'caminho'
            },
            {
                id: '6',
                image: 'caminho'
            },
            {
                id: '7',
                image: 'caminho'
            },
            {
                id: '8',
                image: 'caminho'
            },
        ]
    }

   


    render() {
        const servicos = this.state.servicos 

        if(servicos.length > 4){
            servicos.length = 4
        }

        const listServicos = servicos.map((servico) => 
        <SplideSlide key={servico.id}
        // onClick={
        //   () => {this.setState({id: aviso.id}, () => {
        //     (this.props.clickButton(this.state))
        //     (window.location.href = "/item")
        //   })}
        // }
        >
              {/* <img src={aviso.imageUrl}/> */}
              <h1> {servico.id} </h1>
      </SplideSlide>
    )


        return (
            <>
                <Splide aria-label="My Favorite Images">
                    {listServicos}
                </Splide>
            </>

        );
    }
}

export default slideFeactures;
