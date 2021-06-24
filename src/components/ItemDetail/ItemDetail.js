import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../../App.css';
import ItemCount from '../ItemCount/ItemCount.js';
import {Link} from 'react-router-dom';



var ItemList = [{id:1, 
    title:"prod 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur atque quod, hic aperiam obcaecati blanditiis incidunt a. Consectetur at excepturi, cumque veritatis voluptatem molestias soluta ipsum eos et fugiat?",
    price:100,
    pictureURL : './assets/pan.jpg',
    stock: 5 },
    {id:2, 
    title:"prod 2",
    description:"producto 2 para..",
    price:100,
    pictureURL : "./assets/prod1.png",
    stock: 5 },
    {id:3, 
    title:"prod 3",
    description:"producto 3 para..",
    price:200,
    pictureURL : './assets/prod1.png',
    stock: 6 }];


function ItemDetail({item}){           

const [Items , setItem] = useState(0);
const [isClicked,setIsClicked] = useState(0);





let h  = useParams();



  useEffect(() => {
   new Promise((result, reject) => {
      setTimeout(() => {

        result(ItemList)
      }, 2000);
    } ).then((response) =>    { setItem(response)} );
  }, []); 
  
  let articuloSeleccionado = ItemList.find(e => e.id == h.Id);

  

  let articuloArray = [];

  
  articuloArray.push(articuloSeleccionado);

  const onAdd = (count) => {
      console.log(count);
      setIsClicked(true)
  };


      return (<>
                <div className="detail-container">

                {articuloArray.map(I => <div  key={I.id} className="" >
                            
                            <h2>Detalle de Producto</h2>
                            <h5 className="">{I.title}</h5>
                            <img src={I.pictureURL} className="" alt="imagen del detalle del producto"/>
                            
                            <div className="">
                            <p className="">Detalle:{I.description}</p>
                            <p className="">Precio: ${I.price} </p>
                            {isClicked ?  <div className="btncontainer">
                                <Link to="/cart">   <button  type="button" className="btn btn-light">Terminar Compra</button></Link>
                                        </div> : <ItemCount  initial={1} stock={I.stock} onAdd={onAdd}  />  
                                }
                                
                            </div>
                        </div>) }


            </div>
        </>)
        }



export default ItemDetail;