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

//Imagen
import camera from '../assets/Camera.png';

// Icones


// Components

//mudança de páginas

class slideFeactures extends Component {
    state = {
        servicos: [
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 1'
            }, 
            {
                id: '2',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 2'
            },
            {
                id: '3',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 3'
            },
            {
                id: '4',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 4'
            },
            {
                id: '5',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 5'
            },
            {
                id: '6',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 6'
            },
            {
                id: '7',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 7'
            },
            {
                id: '8',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 8'

            },
            {
                id: '9',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 9'

            },
            {
                id: '10',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 10'

            },
            {
                id: '11',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do produto 11'

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
