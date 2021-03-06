import { useState, useEffect } from 'react';
import '../../App.css';
import ItemCount from '../ItemCount/ItemCount.js';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';



var ItemList = [{id:1, 
  title:"prod 1",
  description:"producto para..",
  price:100,
  pictureURL : './assets/prod1.png',
  stock: 5 },
  {id:2, 
  title:"prod 2",
  description:"producto para..",
  price:100,
  pictureURL : "./assets/prod1.png",
  stock: 5 },
  {id:3, 
  title:"prod ",
  description:"producto para..",
  price:200,
  pictureURL : './assets/prod1.png',
  stock: 6 }];


function Item(props){           

const [Items , setItems] = useState(0);
const [isClicked,setIsClicked] = useState(0);


  useEffect(() => {
   new Promise((result, reject) => {
      setTimeout(() => {

        result(Items)
      }, 2000);
    } ).then((response) =>    { setItems(response)} );
  }, []); 
  
  const onAdd = (count) => {
    console.log(count);
    setIsClicked(true)
};


      return (<> <div className="Items">
                  
                    {ItemList.map(I => 
                        <div  key={I.id} className="card" >
                            
                            <img src={I.pictureURL} className="card-img-top" alt="..."/>
                            
                            <div className="card-body">
                                <h5 className="card-title">{I.title}</h5>
                                <p className="card-text">{I.description}</p>
                                <p className="card-title">Price:{I.price} </p>
                                {isClicked ?  <div className="btncontainer">
                                <Link to="/cart">   <button  type="button" className="btn btn-light">Terminar Compra</button></Link>
                                        </div> : <ItemCount  initial={1} stock={I.stock} onAdd={onAdd}  />  
                                }
                                <NavLink activeClassName="selected" to={`/ItemDetailContainer/${I.id}`}>Ver Detalle</NavLink>
                            </div>
                        </div>
                        )
                     }
                </div>
        </>)
        }



export default Item;