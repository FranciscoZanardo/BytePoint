import {mixed, object, string} from "yup"

let usershema = object({
    fullname: string().required("El campo nombre es requerido"),
    phone: mixed().required("El campo telefono es requerido"),
    email: string().email("El campo email debe tener un @")
})

const validarForm = async(dataForm)=> {
    try {
        await usershema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validarForm