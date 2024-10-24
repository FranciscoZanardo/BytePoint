import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemCountView from './ItemCountView'

const ItemCount = () => {
    const [ contador, setContador ] = useState(1)

const sumacontador = () => {
    if (contador < 10) {
        setContador(contador + 1 )
    }
}

const restacontador = () => {
    if (contador > 1) {
        setContador( contador - 1 )
    }
}



return (
    <ItemCountView contador={contador} sumacontador={sumacontador} restacontador={restacontador} />
)
}

export default ItemCount
