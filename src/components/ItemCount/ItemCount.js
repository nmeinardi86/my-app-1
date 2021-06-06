import React, { useState} from 'react';
import './ItemCount.css';




const ItemCount = ({initial, stock, onAdd}) => {

    const [items, setItems] = useState(initial);

    const removeItem = () => {

        items > 0 ? setItems(items-1) : setItems(items)
        
    };

    const addItem = ()=> {
        items < stock ? setItems(items+1) : alert(`Stock máximo ${stock}`) 
        
    };

    const HandleAlert = ()=> {};


    return <>
        <div className="itemCountContainer">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light" onClick={removeItem}>-</button>
                <div className="itemcountcount">{items}</div>
                <button  type="button" class="btn btn-light" onClick={addItem}>+</button>
            </div>
            <div className="btncontainer">
                <button  type="button" class="btn btn-light" onClick={HandleAlert}>Agregar Items</button>
            </div>
            
        </div>
    </>;

}


export default ItemCount;