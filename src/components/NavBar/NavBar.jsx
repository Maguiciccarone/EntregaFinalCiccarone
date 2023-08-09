import ItemsNavBar from "./ItemsNavBar";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./public/img/logo.png" alt="" width="70%" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ItemsNavBar />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar