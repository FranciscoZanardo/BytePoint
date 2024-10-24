import { useState, useEffect } from 'react'
import { traerProducts } from '../../data/data.js'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'

const ItemDetailContainer = () => {
const [product, setProducts] = useState({})

const { idProduct } = useParams()

useEffect( ()=> {
    traerProducts()
        .then( (data)=> {
            const productoEncontrado = data.find( (product)=> product.id === idProduct)
            setProducts(productoEncontrado)
        })
}, [idProduct])

    return (
    <ItemDetail product={product} />
)
}

export default ItemDetailContainer 