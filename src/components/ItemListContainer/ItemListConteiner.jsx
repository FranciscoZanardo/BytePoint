import { useState, useEffect } from "react"
import { traerProducts } from "../../data/data.js"
import Itemlist from "./Itemlist.jsx"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListConteiner = (props) => {
    const { idCategory } = useParams()

    const {titulo} = props

    const [products, setProducts] = useState([])

useEffect( ()=> {
    traerProducts()
    .then((data) => {
        if (idCategory){
            const filtrarProductos = data.filter((producto)=> producto.category === idCategory )
            setProducts(filtrarProductos)
        } else{
            setProducts(data)
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally (() => {
        console.log("finalizo la promesa")
    })
}, [idCategory])


    return (
    <div className="container-itemlist">
        <h2>{titulo}</h2>
        <Itemlist products={products} />
    </div>
)
}

export default ItemListConteiner