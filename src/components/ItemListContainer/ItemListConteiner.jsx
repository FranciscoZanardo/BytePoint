import { useState, useEffect } from "react"
import Itemlist from "./Itemlist.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

const ItemListConteiner = (props) => {
    const {idCategory} = useParams()

    const {titulo} = props

    const [products, setProducts] = useState([])

    const traerProductos = ()=> {
        const productosRef = collection(db, "productos")
        getDocs(productosRef)
        .then((dataDb)=> {
            const productosDb = dataDb.docs.map((productoDb)=> {
                return { id: productoDb.id, ...productoDb.data() }
            })
            setProducts(productosDb)
        })
    }

    const traerProductosPorCategoria = ()=> {
        const productosRef = collection(db, "productos")
        const consultaCategoria = query(productosRef, where("category", "==", idCategory))
        getDocs(consultaCategoria)
        .then((dataDb)=> {
            const productoDb = dataDb.docs.map((productoDb)=> {
                return { id: productoDb.id, ...productoDb.data() }
            })
            setProducts(productoDb)
        })
    }


useEffect( ()=> {
    if (idCategory) {
        traerProductosPorCategoria()
    }else{
        traerProductos()
    }
}, [idCategory])


    return (
    <div className="container-itemlist">
        <h2>{titulo}</h2>
        <Itemlist products={products} />
    </div>
)
}

export default ItemListConteiner