import React from 'react';



//Imagens
import Logo from '../../assets/logoLaranga.png';
// Icones
import {

  FaSistrix,


} from "react-icons/fa";

// Components
import CustomizeDayPicker from "../../componets/CustomizeDayPicker";
import Test from '../../componets/test';



//mudança de páginas




import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import Divider from '@mui/material/Divider';





export default function Pesquisar() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

      onKeyDown={toggleDrawer(anchor, false)}
    >
      <button onClick={toggleDrawer(anchor, false)}>Fechar</button>
      <Divider />
      <CustomizeDayPicker></CustomizeDayPicker>

    </Box>
  );



  return (

    <div className='App-header' >

      <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        {/* Search */}
        <div className='header-home'>
          <a href='/' className="logoDesktop" >
            <img src={Logo}  ></img>
          </a>
          <div className='inputPesquisar' >
            <p className='pPesquisar'  >Pesquisar</p>

            <FaSistrix className='PesquisarLogo' />
          </div>
           

        </div>
        <Test></Test>
      </div>


    </div>
  );

};