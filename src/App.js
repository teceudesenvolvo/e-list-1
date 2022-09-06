import './App.css';

import {Switch, Route} from 'react-router-dom'


//Screen Navigate
import Home from '../src/screens/home'
import favoritos from './screens/client/favoritos';
import Minhas_Compras from './screens/client/Minhas_Compras';
import Notificacoes from './screens/client/Notificacoes';
import Mais from './screens/client/Mais';
import Servico from './screens/client/Servico';
import Produto from './screens/client/Produto';
import Carinho from './screens/client/carinho';
import pagamento from './screens/client/pagamento';
import Pesquisar from './screens/client/pesquisa';
import categorias from './screens/client/categorias';
import utilider from './screens/client/utilider';



// SingIn / SignUp
import login from './screens/client/login';
import register from './screens/client/register';

// Navigate Components
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
        <Route path="/Servico" component={Servico}/>
        <Route path="/Produto" component={Produto}/>
        <Route path="/Carinho" component={Carinho}/>
        <Route path="/pesquisar" component={Pesquisar}/>
        <Route path="/categorias" component={categorias}/>
        <Route path="/pagamento" component={pagamento}/>
        <Route path="/utilider" component={utilider}/>
        
          

      </Switch>
      <Menu/>
      <MenuDesktop/>
      
    </div>
  );
}

export default App;
