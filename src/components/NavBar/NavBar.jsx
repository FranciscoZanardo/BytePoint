import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    
    return(
        <nav className="navbar">
            <Link to="/" className="home">DytePoint</Link>
            <ul className="categorias">
                <li className="categoria">
                    <Link to="/category/componentes">Componentes</Link>
                </li>
                <li className="categoria">
                    <Link to="/category/pc's">Pc's</Link>
                </li>
                <li className="categoria">
                    <Link to="/category/accesorios">Accesorios</Link>
                </li>
                
            </ul>
        <CartWidget/>
        </nav>
    )
}

export default NavBar