import '../../App.css';
import Item from '../item/Item.js';

function ItemList(props){
    return <>
     <h2>Nuestro Productos</h2>
    
    <Item item="item" />
    </>;
}

export default ItemList;