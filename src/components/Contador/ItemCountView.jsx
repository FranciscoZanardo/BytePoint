import React from 'react'
import "./ItemCount.css"
const ItemCountView = ( {contador, sumacontador, restacontador, agregarcarrito} ) => {
return (
    <div className='contador'>
        <button onClick={sumacontador} className='suma'>+</button>
        <p>{contador}</p>
        <button onClick={restacontador} className='resta'>-</button>
        <button onClick={agregarcarrito} className='agregar-carrito'>Agregar al Carrito</button>
    </div>
)
}

export default ItemCountView