import React from 'react'


const FormCheckout = ({dataForm, handleChangeImput, handleSubmitForm}) => {
return (
        <form onSubmit={handleSubmitForm}> 
            <label>Nombre</label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeImput} />

            <label>Telefono</label>
            <input type="numero" name="phone" value={dataForm.phone} onChange={handleChangeImput} />

            <label>Email</label>
            <input type="text" name="email" value={dataForm.email} onChange={handleChangeImput} />
            
            <button type="submit">Enviar mi orden</button>
        </form>
)
}

export default FormCheckout