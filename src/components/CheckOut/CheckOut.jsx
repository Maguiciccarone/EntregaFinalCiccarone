import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../../utils";
import { createOrder } from "../../services";
import './Checkout.css';

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        message: "",
        email: "",
        name: "",
    });
    const { cart, clear } = useContext(CartContext);

    const total = getCartTotal(cart);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleReset();
    };
    const handleCheckout = () => {
        const order = {
            buyer: formData,
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };

        setIsLoading(true);
        createOrder(order)
            .then((docRef) => {
                setOrderId(docRef.id);
                setIsLoading(false);
                clear();
            });
    };

    return (
        <div className="container text-center">
            <h1 style={{ color: "#74b0bc" }}>CHECKOUT</h1>

            <h4 style={{ color: "grey" }}>Resumen de la compra</h4>

            {orderId && <p className="alert alert-success" role="alert"> {formData.name},  el id de la orden es: {orderId}</p>}

            {!orderId && (
                <>
                    <div>
                        <p style={{ color: "grey" }}>Dejanos tus datos para poder brindarte el número de orden</p>
                        <form className="container" onSubmit={handleSubmit}>
                            <div className="form-contact">
                                <label className="label-form" htmlFor="name">Nombre: </label>
                                <input className="input-form"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-contact">
                                <label className="label-form" htmlFor="email">Email:</label>
                                <input className="input-form"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-contact">
                                <label className="label-form" htmlFor="message">Mensaje: </label>
                                <textarea className="input-form"
                                    value={formData.message}
                                    name="message"
                                    id="message"
                                    onChange={handleChange}
                                />
                            </div>
                        </form>

                    </div>

                    <div>
                        <h4 style={{ color: "#74b0bc" }}>PRODUCTOS</h4>


                        <ul className="Container div-container">
                            {cart.map((item) => (
                                <li className="liStyle card mb-3 p-4" style={{ alignItems: "center", boxShadow: "8px 3px 5px  #74b0bc" }} key={item.id} >
                                    <p>{item.name}</p>
                                    <img src={`../public/img/portadas/${item.imageId}`} style={{ width: 200, height: 100 }} alt="" />
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio por unidad: ${item.price}</p>
                                    <p>Subtotal: ${item.price * item.quantity}</p>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <p style={{ color: "grey" }}>TOTAL DE LA COMPRA: $ {total}</p>

                    <button className="btn btn-light mb-4" style={{ color: "#74b0bc", borderColor: "lightgrey" }} onClick={handleCheckout}>Finalizar compra</button>

                    {isLoading && <p>Procesando compra...</p>}
                </>
            )}
        </div>
    );
};

export default Checkout;