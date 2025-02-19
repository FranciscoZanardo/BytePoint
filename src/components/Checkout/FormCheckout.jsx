import React from 'react'
import "./FormCheckout.css"


const FormCheckout = ({dataForm, handleChangeImput, handleSubmitForm}) => {
return (
        <form onSubmit={handleSubmitForm} className="form"> 
        <h2>Registro para tu compra</h2>
            <label>Nombre</label>
            <input className="controls"  type="text" name="fullname" value={dataForm.fullname} placeholder="Francisco" onChange={handleChangeImput} />

            <label>Telefono</label>
            <input className="controls"  type="numero" name="phone" value={dataForm.phone} placeholder="11-2222-2222" onChange={handleChangeImput} />

            <label>Email</label>
            <input  className="controls" type="text" name="email" value={dataForm.email} placeholder="correo@gmail.com" onChange={handleChangeImput} />
            
            <button className="botonForm" type="submit">Enviar mi orden</button>
        </form>
)
}

export default FormCheckout

