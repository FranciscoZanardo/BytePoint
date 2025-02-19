import React from 'react'
import "./itemcount.css"
const ItemCountView = ( {contador, handlesumacontador, handlerestacontador, addproduct} ) => {
return (
    <div className='contador'>
        <div className="vistaBotones">
            <button onClick={handlerestacontador} className='resta'>-</button>
            <p>{contador}</p>
            <button onClick={handlesumacontador} className='suma'>+</button>
        </div>
        <div className="vistoBaotonAdd">
            <button onClick={()=> addproduct(contador)} className='agregar-carrito'>Agregar al Carrito</button>
        </div>
    </div>
)
}

export default ItemCountView