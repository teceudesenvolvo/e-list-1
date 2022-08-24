import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom'


//Screen Home
import Home from '../src/screens/home'
import login from './screens/client/login';
import register from './screens/client/register';
import favoritos from './screens/client/favoritos';
import Minhas_Compras from './screens/client/Minhas_Compras';
import Notificacoes from './screens/client/Notificacoes';
import Mais from './screens/client/Mais';

import Menu from './componets/menu';
import MenuDesktop from './componets/menuDesktop';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={login}/>
        <Route path="/register" component={register}/>
        <Route path="/favoritos" component={favoritos}/>
        <Route path="/Compras" component={Minhas_Compras}/>
        <Route path="/Notificacoes" component={Notificacoes}/>
        <Route path="/Mais" component={Mais}/>
          

      </Switch>
      <Menu/>
      <MenuDesktop/>
    </div>
  );
}

export default App;
