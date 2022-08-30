import React from 'react';


//Imagens

// Icones
import {
  FaStar
} from 'react-icons/fa'
// Components
import CustomizeDayPicker from "../../componets/CustomizeDayPicker";
import Test from '../../componets/test';
import Horarios from '../../componets/horarios';


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



export default function Produto() {


  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

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

  return (

    <div className='App-header' >
      <div className='Produto-container'>
        <p className='textoDestaques'>Serviço</p>
        <h1 className='Produto-title'>Lavagem Completa</h1>
        <div className='productId'>
          <Test></Test>
        </div>
        <div className='desc-product' >
          <h1 className='servico-desc'>Descrição do serviço </h1>
          <p className='txtProduct'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div className='price-buttom' >
          <div >
            <h5 >R$ 60,00</h5>
            <h5 > <FaStar color='#FF7A00' /> 4,9</h5>
          </div>

          <input onClick={handleClickOpen} type='button' value="Confira Disponibilidade" />
        </div>


      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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
              <Typography sx={{ ml: 1, color: '#000', marginTop: '25px' }} variant="h6" component="div" >
                Selecionar data do serviço
              </Typography>
              <p className='pData'>Selecione um dia disponível.</p>

            </div>

          </Toolbar>
        </AppBar>
        <List>
          <CustomizeDayPicker></CustomizeDayPicker>
          <Divider />
          <div className='horariosDiv'>
            <Typography sx={{ color: '#000' }} variant="h6" component="div" >
              Selecionar horário do serviço
            </Typography>
            <Horarios></Horarios>
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
              <Typography sx={{ ml: 1, color: '#000', marginTop: '25px' }} variant="h6" component="div" >
                Realizar Pagamento
              </Typography>


            </div>

          </Toolbar>
        </AppBar>
        <List> 
          <Divider />
          <Typography sx={{ ml: 1, color: '#000', marginTop: '8px' }} variant="h7" component="div" >
            Seu serviço
          </Typography>
          <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
            Serviço
          </Typography>
          <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
            Taxa de serviço
          </Typography>
          <Typography sx={{ ml: 1, color: '#797979', marginTop: '30px' }} variant="p" component="div" >
            total
          </Typography>
          <Divider />

          <Typography sx={{ ml: 1, color: '#000', marginTop: '8px' }} variant="h7" component="div" >
            Pagar com 
          </Typography>
          <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
            Cartão de crédito ou debito
          </Typography>
          <Divider />
          <Typography sx={{ ml: 1, color: '#000', marginTop: '8px' }} variant="h7" component="div" >
            Politica de cancelamento
          </Typography>
          <Typography sx={{ ml: 1, color: '#797979', marginTop: '5px' }} variant="p" component="div" >
          Cancelamento gratuito poderá ser solicitado 12 horas antes do horário agendado. Você reberá o reembolso menos a taxa de serviço.
          </Typography>
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

    </div>
  );

};