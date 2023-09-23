import { Icon } from '@iconify/react';
import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { getCartQuantity } from '../../../utils';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const quantity = getCartQuantity(cart);

    return <div> <a className="carrito" href="">
        <Icon className="carrito-icono" icon="ion:cart" />
        <span className="carrito-numero">{quantity > 0 ? quantity : ""}</span>
    </a></div>;
};

export default CartWidget;
