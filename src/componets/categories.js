import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Imagen

// Icones
// import { 
//     FaCar,
//     FaChalkboardTeacher,
//     FaChild,
//     FaCut,
//     FaDog,
//     FaFutbol,
//     FaGamepad,
//     FaHeadphonesAlt
// } from "react-icons/fa";

import * as Icon from 'react-icons'


// Components

//mudança de páginas

class Categories extends Component {
    state = {
        categories: [
            {
                id: '1',
                icon: 'https://github.com/teceudesenvolvo/e-list-1/blob/master/src/assets/ICONS FOR SITE_Prancheta 1 cópia 2.png',
                desc: 'Carros'
            }, 
            {
                id: '2',
                icon: 'https://www.freeiconspng.com/thumbs/human-icon-png/human-icon-png-png-20.png',
                desc: 'Cursos'
            },
            {
                id: '3',
                icon: 'https://www.freeiconspng.com/thumbs/human-icon-png/human-icon-png-png-20.png',
                desc: 'Beleza'
            },
            {
                id: '4',
                icon: 'https://www.freeiconspng.com/thumbs/human-icon-png/human-icon-png-png-20.png',
                desc: 'Roupas'
            },
            {
                id: '5',
                icon: 'https://www.freeiconspng.com/thumbs/human-icon-png/human-icon-png-png-20.png',
                desc: 'Pet'
            },
            {
                id: '6',
                icon: 'https://www.freeiconspng.com/thumbs/human-icon-png/human-icon-png-png-20.png',
                desc: 'Fotebol'
            },
            {
                id: '7',
                icon: 'https://www.freeiconspng.com/thumbs/human-icon-png/human-icon-png-png-20.png',
                desc: 'Jogos'
            },
            {
                id: '8',
                icon: 'https://www.freeiconspng.com/thumbs/human-icon-png/human-icon-png-png-20.png',
                desc: 'Entreternimento'

            },
        ]
    }

   


    render() {
        const categories = this.state.categories 

        if(categories.length > 5){
            categories.length = 5
        }

        var Icon = categories.icon;
       

        const listCategories = categories.map((categorie) => 
        <li key={(categorie.id)} className="categoriasItem"
        // onClick={
        //   () => {this.setState({id: aviso.id}, () => {
        //     (this.props.clickButton(this.state))
        //     (window.location.href = "/item")
        //   })}
        // }
        >
                <img src={categorie.icon} width="50%" className='iconCategoria'/>
                <p className='descricaoCategoria' >{categorie.desc}</p>
      </li>
    )


        return (
            <>
                <ul className='categoriasHome'>
                    {listCategories}
                </ul>
            </>

        );
    }
}

export default Categories;
