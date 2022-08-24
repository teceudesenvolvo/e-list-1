import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//Imagens
import Logo from '../assets/logo.png';

// Icones
import {
    FaHome,
    FaHeart,
    FaShoppingBag,
    FaBell,
    FaBars
} from "react-icons/fa";

// Components

//mudança de páginas

class menuDesktop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            linkMenu: 'linkMenu',
            linkMenu2: 'linkMenu',
            linkMenu3: 'linkMenu',
            linkMenu4: 'linkMenu',
            linkMenu5: 'linkMenu',
            window: window.location.pathname,
        }
    }


    btnHome = () => {
        switch (this.state.window) {
            case `/`:
                return this.setState({ linkMenu: 'linkMenu link-active' })
            case `/favoritos`:
                return this.setState({ linkMenu2: 'linkMenu link-active' })
            case `/Compras`:
                return this.setState({ linkMenu3: 'linkMenu link-active' })
            case `/Notificacoes`:
                return this.setState({ linkMenu4: 'linkMenu link-active' })
            case `/Mais`:
                return this.setState({ linkMenu5: 'linkMenu link-active' })
            default:
                return null
        }
    }

    componentDidMount() {
        const loadPage = () => {
            this.btnHome()
        }

        loadPage()
    }


    render() {
        return (
            <nav className='menuDesktop'>

                <a href='/' className="logoDesktop" >
                    <img src={Logo}  ></img>
                    <h1 className='h1-logo'>| List</h1>
                </a>

                <a href="/" className="aDesktop">
                    <FaHome className='fas fa-home'></FaHome>
                    <span className='nav-item'>Home</span>
                </a>

                <a href="/favoritos" className="aDesktop">
                    <FaHeart className='fas fa-favoritos'></FaHeart>
                    <span className='nav-item'>favoritos</span>
                </a>

                <a href="/Compras" className="aDesktop">
                    <FaShoppingBag className='fas fa-Compras'></FaShoppingBag>
                    <span className='nav-item'>Compras</span>
                </a>

                <a href="/Notificacoes" className="aDesktop">
                    <FaBell className='fas fa-Notificacoes'></FaBell>
                    <span className='nav-item'>Notificações</span>
                </a>

                <a href="/Mais" className="aDesktop">
                    <FaBars className='fas fa-Mais'></FaBars>
                    <span className='nav-item'>Mais</span>
                </a>




            </nav>

        );
    }
}

export default menuDesktop;