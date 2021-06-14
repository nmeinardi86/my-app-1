import { useState, useEffect } from 'react';
import '../../App.css';
import ItemCount from '../ItemCount/ItemCount.js';




var ItemList = [{id:1, 
                title:"prod 1",
                description:"producto para..",
                price:100,
                pictureURL : '%PUBLIC_URL%/assets/prod1.png',
                stock: 5 },
                {id:2, 
                title:"prod 2",
                description:"producto para..",
                price:100,
                pictureURL : "%PUBLIC_URL%/assets/prod1.png",
                stock: 5 },
                {id:3, 
                title:"prod ",
                description:"producto para..",
                price:200,
                pictureURL : '%PUBLIC_URL%/assets/prod1.png',
                stock: 6 }];





                
function Item(props){           

const [Items , setItems] = useState(0);

  useEffect(() => {
   new Promise((result, reject) => {
      setTimeout(() => {

        result(ItemList)
      }, 2000);
    } ).then((response) =>    {console.log(response) ;
                                  setItems(response)} );
  }, []); 
  


      return (<> <div className="Items">
                    {ItemList.map(I => 
                        <div  key={I.id} className="card" >
                            <img src={I.pic} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{I.title}</h5>
                                <p className="card-text">{I.description}</p>
                                <p className="card-title">Price:{I.price} </p>
                                <ItemCount initial={1} stock={I.stock}  />  
                            </div>
                        </div>
                        )
                     }
                </div>
        </>)
        }



export default Item;