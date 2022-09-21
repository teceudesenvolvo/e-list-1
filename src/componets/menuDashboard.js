import React, { Component } from 'react';


//Imagens
import Logo from '../assets/logoLaranga.png';

// Icones
import {
    FaHome,
    FaBell,
    FaQuestionCircle,
    FaCog

} from "react-icons/fa";

// Components

//mudança de páginas

class menuDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            linkMenu: 'aDesktop',
            linkMenu2: 'aDesktop',
            linkMenu3: 'aDesktop',
            linkMenu4: 'aDesktop',
            linkMenu5: 'aDesktop',
            window: window.location.pathname,
        }
    }


    btnHome = () => {
        switch (this.state.window) {
            case `/`:
                return this.setState({ linkMenu: 'aDesktop link-desktop-active' })
            case `/favoritos`:
                return this.setState({ linkMenu2: 'aDesktop link-desktop-active' })
            case `/Compras`:
                return this.setState({ linkMenu3: 'aDesktop link-desktop-active' })
            case `/Notificacoes`:
                return this.setState({ linkMenu4: 'aDesktop link-desktop-active' })
            case `/Mais`:
                return this.setState({ linkMenu5: 'aDesktop link-desktop-active' })
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
            <nav className='menuDashboard'>

                <a href="#" className={this.state.linkMenu}>
                    <FaHome className='fas fa-home'></FaHome>
                    <span className='nav-item'>Home</span>
                </a>

             
                <a href="#" className={this.state.linkMenu4}>
                    <FaBell className='fas fa-Notificacoes'></FaBell>
                    <span className='nav-item'>Notificações</span>
                </a>
            
                <a href="#" className={this.state.linkMenu5}>
                    <FaCog className='fas fa-Ajuda'></FaCog>
                    <span className='nav-item'>Add</span>
                </a>

            </nav>

        );
    }
}

export default menuDashboard;