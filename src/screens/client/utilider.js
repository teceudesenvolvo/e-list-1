import React, { Component } from 'react';



//Imagens
import utiliderImg from '../../assets/utilider.png';
// Icones

// Components


//mudança de páginas

class utilider extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <div className='utilider-container'>
              <div className='utilider-header'>
                <img className='utilider-img' src={utiliderImg}></img>
              </div>
                
            </div>
        </div>
    );
  }
}

export default utilider;