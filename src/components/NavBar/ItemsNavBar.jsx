import { Link, NavLink} from "react-router-dom";

const ItemsNavBar = () => {
    return (
        <>
        <Link to="/" className="navbar-brand"> <img src="../public/img/logo.png" alt="" width="70%" /></Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink to= "/" 
                   className={({ isActive }) => (isActive ? "nav-link active"  : "nav-link")} aria-current="page">INICIO</NavLink>  
            </li>
            <li className="nav-item">
            <NavLink to= "/category/navegacion" className={({ isActive }) => (isActive ? "nav-link active"  : "nav-link")}>NAVEGACIÓN</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to= "/category/trekking" className={({ isActive }) => (isActive ? "nav-link active"  : "nav-link")}>TREKKING</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to= "/category/tours" className={({ isActive }) => (isActive ? "nav-link active"  : "nav-link")}>NUESTROS TOURS</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to= "/contacto" className={({ isActive }) => (isActive ? "nav-link active"  : "nav-link")}>CONTACTO</NavLink>
            </li>
        </ul>
        </>
    )
}

export default ItemsNavBar