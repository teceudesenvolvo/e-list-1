import React, { Component } from 'react';

//Imagen

// Icones


// Components

//mudança de páginas

class ProductsList extends Component {
    state = {
        products: [
            {
                id: '1',
                image: 'https://autolider-ok6fhsopc-felipe00007.vercel.app/img/limpeza.jpg',
                desc: 'Limpeza Técnica',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://autolider-ok6fhsopc-felipe00007.vercel.app/img/motor.jpg',
                desc: 'Limpeza detalhada de motor',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://autolider-ok6fhsopc-felipe00007.vercel.app/img/rodas.jpg',
                desc: 'Limpeza detalhada Em Rodas',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://autolider-ok6fhsopc-felipe00007.vercel.app/img/moto.jpg',
                desc: 'Limpeza Em Motocicletas',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/POTE-C-TAMPA-CLEAN-PRA.jpg',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/tabua-bambu-nv.webp',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/JARRA-DE-VIDRO-LOSANGO-416x416.jpg',
                desc: 'Descrição do serviço 1',
                value: '192,50' 
            }, 
            {
                id: '1',
                image: 'https://utilider.com/wp-content/uploads/2022/04/POTE-DE-VIDRO-RT-C-DIV.jpg',
                desc: 'Descrição do serviço que vai',
                value: '192,50' 
            }, 
        ]
    }

   


    render() {
        const products = this.state.products 

        if(products.length > 10){
            products.length = 10
        }
        
        const listCategories = products.map((product) => 
        <li key={(product.id)} className="productItem"
        onClick={
          () => {
              window.location.href = "/Servico"
            // this.setState({id: aviso.id}, () => {
            // (this.props.clickButton(this.state))
        //   }
        }
        }
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
