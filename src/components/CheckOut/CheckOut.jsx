import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../../utils";
import { createOrder } from "../../services";
import './Checkout.css';

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, clear } = useContext(CartContext);

    const total = getCartTotal(cart);

    const handleCheckout = () => {
        const order = {
            buyer: {
                name: "John",
                phone: "123456789",
                email: "john@gmail.com",
            },
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };

        setIsLoading(true);
        createOrder(order).then((docRef) => {
            setOrderId(docRef.id);
            setIsLoading(false);
            clear();
        });
    };

    return (
        <div className="container text-center">
            <h1 style={{ color: "#74b0bc" }}>CHECKOUT</h1>

            <h4 style={{ color: "grey" }}>Resumen de la compra</h4>

            {orderId && <p className="alert alert-success" role="alert">El id de la orden es: {orderId}</p>}

            {!orderId && (
                <>
                    <div>
                        <h4>Formulario de contacto</h4>


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