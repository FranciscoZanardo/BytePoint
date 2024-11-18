import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    
    return(
        <nav className="navbar">
            <Link to="/" className="home"><img width="64" height="64" src="https://img.icons8.com/nolan/64/rocket.png" alt="rocket"/>BytePoint</Link>
            <ul className="categorias">
                <li className="categoria">
                    <Link to="/category/componentes">Componentes</Link>
                </li>
                <li className="categoria">
                    <Link to="/category/accesorios">Accesorios</Link>
                </li>
                <li className="categoria">
                    <Link to="/category/perifericos">Perifericos</Link>
                </li>
                
            </ul>
        <CartWidget/>
        </nav>
    )
}

export default NavBar

