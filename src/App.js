import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/home/home.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer.js ';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

 return (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path={"/ItemDetailContainer/:Id"}>
          <ItemDetailContainer />
      </Route>


    </Switch> 

  </BrowserRouter>

 )
 
 /*
 */
}
export default App;
  