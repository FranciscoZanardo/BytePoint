import { useState } from 'react'
import React from 'react'
import ItemCountView from '../Contador/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./itemdetails.css"
import { toast } from 'react-toastify'

const ItemDetail = ({product}) => {

    if (!product || !Array.isArray(product.image) || product.image.length === 0) {
        return <p className="loading">Cargando producto...</p>;
}

    const [mostrarItemCount, setmostrarItemCount] = useState(true)

    const {agregarAlCarrito} = useContext(CartContext)

    const [currentImg, setCurrentImg] = useState(product.image[0]);

    const filtroDeImagen = product.image?.filter((image) => image !== currentImg) || []

    const addproduct = (contador) => {
        const productoCarrito = {...product, quantity: contador}
        agregarAlCarrito(productoCarrito)
        setmostrarItemCount(false)
        toast.success('Se agrego el producto al carrito')
    }

return (
    <div className="itemDetails">
        <div className="detailsGeneral">
            <div className="ImagenMap">
                {
                    filtroDeImagen.map((image, index)=> (
                    <img  src={image} key={index} onClick={()=> setCurrentImg(image)} className="thumbnail" />
                    ))
                }
            </div>
            <div className="imagePrincipal">
                <img src={currentImg}/>
            </div>
            <div className="textoDetails">
                <h2 >{product.name}</h2>
                <p className="textoDetailsH2">{product.description}</p>
                <h3>Precio: ${product.price}</h3>
                <div className="purchase-options">
                    {
                    mostrarItemCount === true ? (
                        <ItemCountView stock={product.stock} addproduct={addproduct} />
                    ):(
                        <Link to="/cart" className="botonEndBuy">Ir al carrito</Link>
                    )
                    }
                </div>
            </div>
        </div>
    </div>)
}

export default ItemDetail