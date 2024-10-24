import React from 'react'

const ItemDetail = ({product}) => {
return (
    <div>
        <img src={product.image} alt="" />
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
        </div>
    </div>)
}

export default ItemDetail