import React, { Component } from 'react';



//Imagens

// Icones

// Components


//mudança de páginas

class Perfil extends Component {
    render() {
        return (

            <div className='App-header' >
                <p>Perfil</p>
                <form className='formLogin'>
                    <input type="text" placeholder="Leonardo" className='inputLogin' />
                    <input type="text" placeholder="076.***.***-**" className='inputLogin' />
                    <input type="text" placeholder="nome@email.com" className='inputLogin' />
                    <input type="text" placeholder="(85)99999-9999" className='inputLogin' />
                    <input type="text" placeholder="Rua Fulano de Tal - 55" className='inputLogin' />
                    <input type="text" placeholder="Master Card - Crédito **** **** **** 9898" className='inputLogin' />
                   
                    
                </form>
            </div>
        );
    }
}

export default Perfil;