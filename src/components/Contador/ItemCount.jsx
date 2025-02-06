import { useState } from 'react'
import ItemCountView from './ItemCountView'
import "./ItemCount.css"


const ItemCount = ({stock, addproduct}) => {
    const [ contador, setContador ] = useState(1)

const handlesumacontador = () => {
    if (contador < stock) {
        setContador(contador + 1 )
    }
}

const handlerestacontador = () => {
    if (contador > 1) {
        setContador(contador - 1 )
    }
}

return (
    <ItemCountView contador={contador} handlesumacontador={handlesumacontador} handlerestacontador={handlerestacontador} addproduct={addproduct}/>
)
}

export default ItemCount
