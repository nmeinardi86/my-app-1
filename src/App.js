import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {




 return <>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossOrigin="anonymous"
  />
  
   <NavBar />
   
   <p>{new Date().toLocaleDateString()}</p>
   
   <ItemListContainer greetings="Mensaje para la itemlistcontainer" />
   
  </>;
}
export default App;
  