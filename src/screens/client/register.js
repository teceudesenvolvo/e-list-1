import React, { Component } from 'react';

//Imagens
import logo from '../../assets/logoLaranga.png';

// Icones

// Components

//mudança de páginas


class register extends Component {
  render() {
    return (
      <div className='App-header' >
        <div className='Container' >
          <img src={logo} alt="logo" className='logo' />
          <h1>Seja bem-vindo!</h1>
          <form className='formLogin'>
            <input type="text" placeholder="Nome" className='inputLogin' />
            <input type="text" placeholder="CPF" className='inputLogin' />
            <input type="text" placeholder="E-mail" className='inputLogin' />
            <input type="password" placeholder="Senha" className='inputLogin' />
            <input type="password" placeholder="Confirmar senha" className='inputLogin' />
            <input type="text" placeholder="Telefone" className='inputLogin' />
            <input type="text" placeholder="CEP" className='inputLogin' />
            <input type="text" placeholder="Número da casa" className='inputLogin' />

            <div className="checkbox-politicas">
              <input type="checkbox" placeholder="Complemento" className='inputLogin' />
              <p> Concordo com os termos de uso e as politicas de privacidade. </p>
            </div>

            <button className='buttonLogin'>Cadastrar</button>

          </form> <p>já tem uma conta? <a href='/login' className='linkLogin'>Fazer login</a></p>

        </div>

      </div>
    );
  }
}

export default register;