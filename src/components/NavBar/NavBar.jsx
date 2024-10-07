import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    
    return(
        <nav className="navbar">
            <h1>DytePoint</h1>
            <ul>
                <li>
                    <a href="">Componentes</a>
                    <a href="">Pc's</a>
                    <a href="">Accesorios</a>
                </li>
            </ul>
        <CartWidget/>
        </nav>
    )
}

export default NavBar