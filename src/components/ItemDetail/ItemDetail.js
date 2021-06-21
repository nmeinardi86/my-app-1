import { useState, useEffect, useParams } from 'react';
import '../../App.css';



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


function ItemDetail(props){           

const [Items , setItem] = useState(0);




  useEffect(() => {
   new Promise((result, reject) => {
      setTimeout(() => {

        result(ItemList)
      }, 2000);
    } ).then((response) =>    {console.log(response) ;
                                  setItem(response)} );
  }, []); 
  


      return (<>
                <div className="media d-flex align-self-center mr-3">

                {ItemList.map(I => <div key={I.id} >
                                    <div id="carouselExampleSlidesOnly" className="carousel slide"
                                        data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={I.pictureURL} className="d-block w-100" alt="" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="..." className="d-block w-100" alt="" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="..." className="d-block w-100" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        {I.description}
                                    </div>
                                    <div className="">
                                        {I.precio}
                                    </div>  
                                </div>) }


            </div>
        </>)
        }



export default ItemDetail;