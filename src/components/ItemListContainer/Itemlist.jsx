import React from 'react'
import Item from './Item'

const Itemlist = ({products}) => {
return (
    <div className='itemlistCards'>
    {
        products.map( (product)=> (
        <Item product={product} key={product.id} />
        ))
    }
    </div>
    )
}

export default Itemlist