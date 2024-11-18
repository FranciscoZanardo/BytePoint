import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore'
import validarForm from '../../utils/validateForm.js'
import db from '../../db/db'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./FormCheckout.css"


const Checkout = () => {
    const [dataForm, setdataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)
    const {cart, precioTotal, borrarTodo} = useContext(CartContext)

    const handleChangeImput = (event)=> {
        setdataForm({...dataForm, [event.target.name]: event.target.value})
    }   

    const handleSubmitForm = async(event)=> {
        event.preventDefault()
        const order = {
            buyer: {...dataForm},
            product: [...cart],
            date: Timestamp.fromDate(new Date),
            total: precioTotal()
        }
        try {
            const respuesta = await validarForm(dataForm)
            if (respuesta.status === "error") throw new erorr(respuesta.message)

            toast.success("Su compra fue realizada")
            subirOrden(order)
        } catch (error) {
            toast.error("Debes completar todos los campos")
        }
    }

    const subirOrden = (newOrder)=> {
        const orderRef = collection( db, "orders")
        addDoc(orderRef, newOrder)
            .then((respuesta)=> setIdOrder(respuesta.id))
            .catch ((error)=> console.log(error))
            .finally(()=> {
                subirDataStock()
            })
    }

    const subirDataStock = ()=> {
        cart.map(( {id, quantity, ...dataProduct} )=> {
            const productRef = doc(db, "productos", id)
            setDoc(productRef, {...dataProduct, stock: dataProduct.stock - quantity})
        })
        borrarTodo()
    }

return (
    <div className="checkoutContainer">
        {
            idOrder === null ? (
                <FormCheckout 
                dataForm={dataForm} 
                handleChangeImput={handleChangeImput} 
                handleSubmitForm={handleSubmitForm}/>
            ) : (
                <div className="chekoutSegundo">
                    <h2>Gracias por su cumpra!</h2>
                    <p>Este es su numero de seguimiento: {idOrder}</p>
                    <Link to="/" className="botonFinal">Volver al incio</Link>
                </div>
            )
        }
    </div>
)
}

export default Checkout