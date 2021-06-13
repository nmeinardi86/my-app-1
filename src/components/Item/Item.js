import '../../App.css';
import ItemCount from '../ItemCount/ItemCount.js';
import images from '../../components/ItemList/prod1.png'

let ItemList = [{id:1, 
                title:"prod 1",
                description:"producto para..",
                price:100,
                pictureURL : '"../ItemList/prod1.png"',
                stock: 5 },
                {id:2, 
                title:"prod 2",
                description:"producto para..",
                price:100,
                pictureURL : '../ItemList/prod1.png',
                stock: 5 },
                {id:3, 
                title:"prod 3",
                description:"producto para..",
                price:200,
                pictureURL : '../ItemList/prod1.png',
                stock: 6 }];

function Item(props){           
    return <> 
            <div className="Items">
                    {ItemList.map(I => 
                        <div className="card" key={I.id}>
                            <img src={images} className="card-img-top" alt="..."/>
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
        </>;
}

    export default Item;