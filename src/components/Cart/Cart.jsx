import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./cart.css"

const Cart = () => {

    const {cart, precioTotal, borrarProductoIndividual, borrarTodo} = useContext(CartContext)

    if (cart.length === 0) {
        return(
            <div className="carritoVacio">
                <h2>No hay productos en su carrito</h2>
                <Link to="/" className="botonCarritoVacio">Volver al inicio</Link>
            </div>
        )
    }

return (
    <div >
        <h2 className="tituloCart">Tu carrito</h2>
        {
            cart.map((productCart)=> (
                <div key={productCart.id} className='cardCarrito'>
                    <img src={productCart.image[0]} width={200} alt="" />
                    <h3 className="tituloCardCarrito">{productCart.name}</h3>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio C/U: ${productCart.price}</p>
                    <p>Precio parcial: ${productCart.price * productCart.quantity}</p>
                    <button className="botonDeleteCard" onClick={()=> borrarProductoIndividual(productCart.id)} >Borrar</button>
                </div>
            ))
        }
        <div className="containerCart">
            <button className="botonDeleteAll" onClick={borrarTodo}>Borrar todo lo del carrito</button>
            <Link to="/checkout">Terminar mi compra</Link>
            <h2 className="totalPrice">Precio tola del carrito: ${precioTotal()}</h2>
        </div>
    </div>
)
}

export default Cart