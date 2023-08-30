import { Icon } from '@iconify/react';
import './CartWidget.css';


const CartWidget = () => {
    const NotificacionCarrito = 3;
    return (
        <a className="carrito" href="">
            <Icon className="carrito-icono" icon="ion:cart" />
            <span className="carrito-numero">{NotificacionCarrito}</span>
        </a>
    )
}
export default CartWidget