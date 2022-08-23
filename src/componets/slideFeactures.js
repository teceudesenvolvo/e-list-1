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
                image: 'caminho1'
            }, 
            {
                id: '2',
                image: 'caminho2'
            },
            {
                id: '3',
                image: 'caminho3'
            },
            {
                id: '4',
                image: 'caminho4'
            },
            {
                id: '5',
                image: 'caminho5'
            },
            {
                id: '6',
                image: 'caminho6'
            },
            {
                id: '7',
                image: 'caminho7'
            },
            {
                id: '8',
                image: 'caminho8'
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
        // onClick={
        //   () => {this.setState({id: aviso.id}, () => {
        //     (this.props.clickButton(this.state))
        //     (window.location.href = "/item")
        //   })}
        // }
        >
              {/* <img src={aviso.imageUrl}/> */}
              <p> id: {servico.id} </p>
      </SplideSlide>
    )


        return (
            <>
                <Splide 
                options={{
                    perPage: 3,
                    focus  : 'center',
                }}   
                aria-label="My Favorite Images">
                    {listServicos}
                </Splide>
            </>

        );
    }
}

export default slideFeactures;
