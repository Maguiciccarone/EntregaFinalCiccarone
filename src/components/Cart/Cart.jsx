import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Cart.css'


const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);


    return (
        <div>
            <h1 className="text-center mb-4 mt-4" style={{ color: "#74b0bc" }}>MI COMPRA</h1>
            <div className="container d-flex flex-column align-items-center" >

                {cart.length >= 1 ? (
                    cart.map((item) => (

                        <div key={item.id} className="mt-4 cart-container">
                            <img src={`../public/img/portadas/${item.imageId}`} style={{ width: 300, height: 200 }} alt="" />
                            <div className="mx-5">
                                <h3 className="mb-4">{item.name}</h3>
                                <p className="text-color">CANTIDAD: {item.quantity}</p>
                                <p className="text-color">PRECIO DE LA EXCURSIÓN: ${item.price}</p>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="ms-1 badge text-bg" style={{ color: "#74b0bc" }}>Eliminar</button>
                        </div>
                    ))) : <h3 className="text-center" style={{ color: "#74b0bc" }}> El carrito esta vacio </h3>
                }
                <div className="my-5 d-flex justify-content-center">
                    {cart.length == 0 ?
                        <div>
                            <Link to='/' className="btn btn-light" style={{ color: "#74b0bc", borderColor: "grey" }}>VER EXCURSIONES </Link>
                        </div> :
                        <div>
                            <button onClick={clear} className="btn btn-light m-5" style={{ color: "#74b0bc", borderColor: "grey" }}> Eliminar Carrito </button>

                            <Link to='/checkout' className="btn btn-light" style={{ color: "#74b0bc", borderColor: "grey" }} disabled>Checkout</Link>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Cart;