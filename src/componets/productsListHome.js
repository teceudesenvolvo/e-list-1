import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Imagen

// Icones


// Components

//mudança de páginas

class ProductsList extends Component {
    state = {
        products: [
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/cropped-cropped-cropped-utilider-azul-04-1-1024x338.png',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
        ]
    }

   


    render() {
        const products = this.state.products 

        if(products.length > 10){
            products.length = 10
        }

        var Icon = products.icon;
       

        const listCategories = products.map((product) => 
        <li key={(product.id)} className="productItem"
        // onClick={
        //   () => {this.setState({id: aviso.id}, () => {
        //     (this.props.clickButton(this.state))
        //     (window.location.href = "/item")
        //   })}
        // }
        >
                <img src={product.image} width="50%" className='imgProduct'/>
            <div className='areaTextDescProduct' >
                <p className='valueProduct' >R$ {product.value}</p>
                <p className='descricaoProduct' >{product.desc}</p>
            </div>
      </li>
    )


        return (
            <>
                <ul className='vistosHome'>
                    {listCategories}
                </ul>
            </>

        );
    }
}

export default ProductsList;
