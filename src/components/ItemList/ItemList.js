import '../../App.css';
import Item from '../Item/Item.js';

function ItemList(props){
    return <>
     <h2>Productos Seleccionados</h2>
    
    <Item item="item" />
    </>;
}

export default ItemList;