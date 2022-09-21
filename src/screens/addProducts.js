import React, { Component } from 'react';



//Imagens

// Icones


// Components
import MenuDashboard from '../componets/menuDashboard';


//mudança de páginas

class addProducts extends Component {
    render() {
        return (

            <div className='App-header' >
                <MenuDashboard />
                <div className='conteinar-Add-Products'>
                    <div>
                        
                    <h1>Lavagem Completa</h1>
                    <input type="text" placeholder="Nome Do Serviço" />
                    <input type="text" placeholder="Tempo" />
                    <input type="text" placeholder="Preço" />
                    <textarea placeholder="Descrição"></textarea>
                    </div>
                    <div className='addImg'>
                    
                   
                    
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default addProducts;