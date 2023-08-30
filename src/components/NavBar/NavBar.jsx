import { Link, NavLink } from "react-router-dom";
import ItemsNavBar from "./ItemsNavBar";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ItemsNavBar />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar