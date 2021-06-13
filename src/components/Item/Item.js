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
                title:"prod ",
                description:"producto para..",
                price:200,
                pictureURL : '../ItemList/prod1.png',
                stock: 6 }];





                
function Item(props){           

    const task = new Promise((resolve, reject) => {
        console.log('Buscando productos...');
      
        setTimeout(() => {
          resolve(ItemList);
          
        }, 3000);
      });
      
      task.then(res => {
        console.log(res);
        return (<> 
            <div className="Items">
                    {res.map(I => 
                        <div  key={I.id} className="card" >
                            <img src={images} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{I.title}</h5>
                                <p className="card-text">{I.description}</p>
                                <p className="card-title">Price:{I.price} </p>
                                <ItemCount initial={1} stock={I.stock}  />  
                            </div>
                        </div>
                        )
                     };
            </div>
        </>);
        })
        .catch(e => {
          console.log(e.message);
        });
}

export default Item;