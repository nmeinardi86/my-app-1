import '../../App.css';
import { useState, useEffect, useParams } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';


function ItemDetailContainer(props){

    let { itemIdParam } = useParams();
    console.log(itemIdParam);

    return <>
     
     <ItemDetail />

    </>;

}

export default ItemDetailContainer;