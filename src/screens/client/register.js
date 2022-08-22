import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//Imagens
import logo from '../../assets/logoLaranga.png';
import google from '../../assets/google.png';
import face from '../../assets/face.png';
// Icones

// Components

//mudança de páginas


class register extends Component{
  render(){  
    return (      
        <div className='Container' >
            <img src={logo} alt="logo" className='logo'/>
            <h1>Seja bem-vindo!</h1>
            <form className='formLogin'>
                <input type="text" placeholder="Nome" className='inputLogin' />
                <input type="text" placeholder="CPF" className='inputLogin'/>
                <input type="text" placeholder="E-mail" className='inputLogin' />
                <input type="password" placeholder="Senha" className='inputLogin'/>
                <input type="password" placeholder="Confirmar senha" className='inputLogin'/>
                <input type="text" placeholder="Telefone" className='inputLogin'/>
                <input type="text" placeholder="CEP" className='inputLogin'/>
                <input type="text" placeholder="Número da casa" className='inputLogin'/>
                <input type="checkbox" placeholder="Complemento" className='inputLogin'/>
                <button className='buttonLogin'>Cadastrar</button>

            </form> <p>já tem uma conta? <a href='/login' className='linkLogin'>Fazer login</a></p>
            
        </div>
    );
  }
}            

export default register;