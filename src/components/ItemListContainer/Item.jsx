import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
return (
    <Link to={"/detail/" + product.id} className='cards'>
        <img src={product.image[0]} alt="" className='imgCards'/>
        <h3>{product.name}</h3>
        <p>$ {product.price}</p>
    </Link>
)
}

export default Item