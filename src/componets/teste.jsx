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

class teste extends Component {


    render() {
        return (
            <>
                <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src="image1.jpg" alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="image2.jpg" alt="Image 2" />
                    </SplideSlide>
                </Splide>
            </>

        );
    }
}

export default teste;
