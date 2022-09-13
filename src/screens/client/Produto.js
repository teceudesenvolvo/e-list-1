import React from 'react';


//Imagens
import utiliderImg from '../../assets/utilider.png';
// Icones
import {
  FaStar,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcJcb,
  FaCcDiscover,
  FaHome,
  FaShoppingBag,
  FaShoppingCart
} from 'react-icons/fa';

// Components

import Test from '../../componets/test';

import SlideFeacures from '../../componets/slideFeactures';

//mudança de páginas
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Transition2 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="dom" ref={ref} {...props} />;
});

const Transition3 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function Produto() {


  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  return (

    <div className='App-header' >
      <div className='Produto-container'>
        <div className='utilider-header'>
        <a href='/'  ><FaHome /></a> 
          <img className='utilider-img'
            onClick={
              () => {
                window.location.href = "/utilider"
              }
            }
            src={utiliderImg}></img>
            <a href='/carrinho'  >< FaShoppingCart/></a> 
        </div>

        <p className='textoDestaquesUtilider'>Produto</p>
        <h1 className='Produto-titleUtilider'>BATERIA ALFACELL</h1>
        <div className='productId'>
          <Test></Test>

        </div>

        <div className='desc-productUtilider' >
          <h1 className='servico-descUtilider'>Descrição do produto </h1>
          <p className='txtProductUtilider'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
            {/* Carrosel */}
            <p className='textoDestaques'>Quem viu este, também comprou</p>
          <SlideFeacures></SlideFeacures>
        
        </div>
        
        <div className='price-buttomUtilider' >
          <div >
            <h5 >R$ 60,00</h5>
            <h5 > <FaStar color='#FF7A00' /> 4,9</h5>
          </div>

          <input onClick={
            () => {
              window.location.href = "/carrinho"
              // this.setState({id: aviso.id}, () => {
              // (this.props.clickButton(this.state))
              //   }
            }
          } type='button' value="Comprar" />
        </div>


      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className='utilider-header'>
          <img className='utilider-img' src={utiliderImg}></img>
        </div>
        <AppBar sx={{
          position: 'relative',
          boxShadow: '0px 2px 4px -1px rgb(255, 255, 255),0px 4px 5px 0px rgb(255, 255, 255),0px 1px 10px 0px rgb(255, 255, 255)'

        }}>
          <Toolbar sx={{ backgroundColor: '#fff' }}>
            <IconButton
              edge="start"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <div >
              <Typography sx={{ ml: 1, color: '#000', }} variant="h6" component="div" >
                Realizar Pagamento
              </Typography>


            </div>

          </Toolbar>
        </AppBar>
        <List sx={{ marginBottom: '90px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} >

          <div class="ProdutoCardUtilider">
            <img alt='produto' src='https://utilider.com/wp-content/uploads/2022/04/BATERIA-ALFACELL-LITHIUM-3V-CARTELA-C-2.webp'>
            </img>
            <div>
              <p>Titulo do produto</p>
              <p>R$ 190,00</p>
              <p>Descrição do produto</p>


            </div>
          </div>



        </List>

        {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Horários
            </Button> */}

        <div className='price-buttom price-buttom-calendar' backgroundColor='white' >
          <div >
            <h5>R$ 60,00</h5>
            <h5> <FaStar color='#FF7A00' /> 4,9</h5>
          </div>

          <input
            onClick={handleClickOpen2}

            type='button' value="Pagamento" />
        </div>

      </Dialog>
      <Dialog
        fullScreen
        open={open2}
        onClose={handleClose2}
        TransitionComponent={Transition2}
      >
        <div className='utilider-header'>
          <img className='utilider-img' src={utiliderImg}></img>
        </div>
        <AppBar sx={{
          position: 'relative',
          boxShadow: '0px 2px 4px -1px rgb(255, 255, 255),0px 4px 5px 0px rgb(255, 255, 255),0px 1px 10px 0px rgb(255, 255, 255)'

        }}>
          <Toolbar sx={{ backgroundColor: '#fff' }}>
            <IconButton
              edge="start"
              onClick={handleClose2}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <div >
              <Typography sx={{ ml: 1, color: '#000', marginTop: '0px' }} variant="h6" component="div" >
                Realizar Pagamento
              </Typography>


            </div>

          </Toolbar>
        </AppBar>
        <List sx={{ marginBottom: '90px' }}>
          <Divider />
          <div className="divPagamento">
            <div>
              <Typography sx={{ ml: 1, color: '#000', marginTop: '8px' }} variant="h7" component="div" >
                Seu serviço
              </Typography>
              <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
                Serviço
              </Typography>
              <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
                Taxa de serviço
              </Typography>
              <Typography sx={{ ml: 1, color: '#797979', marginTop: '25px', marginBottom: '8px' }} variant="p" component="div" >
                total
              </Typography>
            </div>
            <div>

              <Typography sx={{ ml: 1, color: '#797979', marginTop: '28px' }} variant="p" component="div" >
                R$ 60,00
              </Typography>
              <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
                R$ 6,00
              </Typography>
              <Typography sx={{ ml: 1, color: '#797979', marginTop: '25px', marginBottom: '8px' }} variant="p" component="div" >
                R$ 66,00
              </Typography>
            </div>
          </div>
          <Divider />
          <div className="divPagamento">
            <div>
              <Typography sx={{ ml: 1, color: '#000', marginTop: '8px' }} variant="h7" component="div" >
                Pagar com :   ViSA 8888
              </Typography>
              <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px', marginBottom: '10px' }} variant="p" component="div" >
                Cartão de crédito ou debito
              </Typography>
              <FaCcMastercard className='Cards' ></FaCcMastercard>
              <FaCcVisa className='Cards' ></FaCcVisa>
              <FaCcAmex className='Cards' ></FaCcAmex>
              <FaCcJcb className='Cards' ></FaCcJcb>
              <FaCcDiscover className='Cards' ></FaCcDiscover>
            </div>
            <div> <button onClick={handleClickOpen3}>adicionar</button></div>
          </div>
          <Divider />
          <div>
            <Typography sx={{ ml: 1, color: '#000', marginTop: '8px' }} variant="h7" component="div" >
              Politica de cancelamento
            </Typography>
            <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
              Cancelamento gratuito poderá ser solicitado 12 horas antes do horário agendado. Você reberá o reembolso menos a taxa de serviço.
            </Typography>
          </div>
        </List>


        {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Horários
            </Button> */}

        <div className='price-buttom price-buttom-calendar' backgroundColor='white' >

          <div >
            <h5>R$ 60,00</h5>
            <h5> <FaStar color='#FF7A00' /> 4,9</h5>
          </div>

          <input
            onClick={
              () => {
                window.location.href = "/pagamento"
                // this.setState({id: aviso.id}, () => {
                // (this.props.clickButton(this.state))
                //   }
              }
            }

            type='button' value="Concluir" />
        </div>

      </Dialog>

      <Dialog
        fullScreen
        open={open3}
        onClose={handleClose3}
        TransitionComponent={Transition3}
      >
        <div className='utilider-header'>
          <img className='utilider-img' src={utiliderImg}></img>
        </div>
        <AppBar sx={{
          position: 'relative',
          boxShadow: '0px 2px 4px -1px rgb(255, 255, 255),0px 4px 5px 0px rgb(255, 255, 255),0px 1px 10px 0px rgb(255, 255, 255)'

        }}>
          <Toolbar sx={{ backgroundColor: '#fff' }}>
            <IconButton
              edge="start"
              onClick={handleClose3}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <div >
              <Typography sx={{ ml: 1, color: '#000', marginTop: '0px' }} variant="h6" component="div" >
                Informações de  Pagamento
              </Typography>


            </div>

          </Toolbar>
        </AppBar>
        <List sx={{ marginBottom: '90px' }}>
          <form className='cartao'>
            <input type="number" placeholder="Número do cartão" className='inputCartao' />
            <div  >
              <input type="number" placeholder="Validade" className='inputCartao' />
              <input type="number" placeholder="CVV" className='inputCartao' />
            </div>

            <input type="text" placeholder="Nome" className='inputCartao' />
            <input type="text" placeholder="Sobre Nome" className='inputCartao' />
            <input type="number" placeholder="CPF" className='inputCartao' />

          </form>
          <Divider />
          <div>
            <Typography sx={{ ml: 1, color: '#000', marginTop: '8px' }} variant="h7" component="div" >
              Politica de cancelamento
            </Typography>
            <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
              Cancelamento gratuito poderá ser solicitado 12 horas antes do horário agendado. Você reberá o reembolso menos a taxa de serviço.
            </Typography>
          </div>
        </List>


        {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Horários
            </Button> */}

        <div className='price-buttom price-buttom-calendar' backgroundColor='white' >

          <div >
            <h5>R$ 60,00</h5>
            <h5> <FaStar color='#FF7A00' /> 4,9</h5>
          </div>

          <input
            onClick={handleClose3}

            type='button' value="Adicionar cartão" />
        </div>

      </Dialog>

    </div>
  );

};