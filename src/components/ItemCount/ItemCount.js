import React, { useState} from 'react';
import './ItemCount.css';




const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);
    

    const removeItem = () => {

        count > 0 ? setCount(count-1) : setCount(count)
        
    };

    const addItem = ()=> {
        count < stock ? setCount(count+1) : alert(`Stock máximo ${stock}`) 
        
    };

    

    return <>
        <div className="itemCountContainer">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light" onClick={removeItem}>-</button>
                <div className="itemcountcount">{count}</div>
                <button  type="button" className="btn btn-light" onClick={addItem}>+</button>
            </div>
            <div className="btncontainer">
                <button  type="button" className="btn btn-light" onClick = {() => onAdd(count)}>Agregar</button>
            </div>
            
        </div>
    </>;

}


export default ItemCount;