import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens
import camera from '../../assets/Camera.png';
// Icones
import {
  FaStar
} from 'react-icons/fa'
// Components

import SwipeableEdgeDrawer from '../../componets/FullScreenDialog';
import Menu from '../../componets/menu';

//mudança de páginas


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


import CustomizeDayPicker from "../../componets/CustomizeDayPicker"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Produto() {
  

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    return (

      <div className='App-header' >
        <div className='Produto-container'>
          <p className='textoDestaques'>Serviço</p>
          <h1 className='Produto-title'>Lavagem Completa</h1>
          <div className='productId'>
            <img src={camera} alt='camera' className='camera' />
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

            <input  onClick={handleClickOpen} type='button' value="Confira Disponibilidade" />
          </div>


        </div>
        <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Selecionar a data
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
            Ver horários
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        <CustomizeDayPicker></CustomizeDayPicker>
        </List>
      </Dialog>

      </div>
    );

};