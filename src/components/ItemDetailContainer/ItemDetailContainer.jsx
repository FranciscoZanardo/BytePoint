import { useState, useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore"
import db from '../../db/db.js'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import "./itemdetails.css"

const ItemDetailContainer = () => {
const [product, setProducts] = useState({})
const { idProduct } = useParams()

const traerProductosPorId = ()=> {
    const docRef = doc(db, "productos", idProduct)
    getDoc(docRef)
        .then((dataDb)=> {
            const productoDb = { id: dataDb.id, ...dataDb.data()}
            setProducts(productoDb)
        })
}



useEffect( ()=> {
    traerProductosPorId()
}, [idProduct])

    return (
        <>
        <ItemDetail product={product}  />
        </>
    )
}

export default ItemDetailContainer 