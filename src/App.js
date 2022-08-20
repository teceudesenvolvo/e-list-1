import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom'


//Screen Home
import Home from '../src/screens/home'
import login from './screens/client/login';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={login}/>

      </Switch>
    </div>
  );
}

export default App;
