import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children })=> {
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (newproduct) =>{
        const condicion = enElCart(newproduct.id)
        if (condicion) {
            const nuevoCarrito = [...cart]
            const encontrarIdice = nuevoCarrito.findIndex((productCart)=> productCart.id === newproduct.id)
            nuevoCarrito[encontrarIdice].quantity = nuevoCarrito[encontrarIdice].quantity + newproduct.quantity
            setCart(nuevoCarrito)
        }else {
            setCart([...cart, newproduct])
        }
    }

    const cantidadProductosCart = ()=> {
        const cantidadCarrito = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return cantidadCarrito
    }

    const precioTotal = ()=> {
        const totalDelPrecio = cart.reduce((total, productCart)=> total + (productCart.quantity * productCart.price), 0)
        return totalDelPrecio
    }

    const borrarProductoIndividual = (idProduct)=> {
        const productoFiltrado = cart.filter((productCart)=> productCart.id != idProduct)
        setCart(productoFiltrado)
    }

    const enElCart = (idProduct)=> {
        return cart.some((productCart)=> productCart.id === idProduct)
    }

    const borrarTodo = ()=> {
        setCart([])
    }

    return(
        <CartContext.Provider value={ {cart, agregarAlCarrito, cantidadProductosCart, precioTotal, borrarProductoIndividual, borrarTodo, enElCart} }>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider, CartContext }