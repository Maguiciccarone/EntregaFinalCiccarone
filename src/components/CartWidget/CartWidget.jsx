import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { getCartQuantity } from '../../../utils';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const quantity = getCartQuantity(cart);

    return (

        <Link className="carrito" to={'/cart'}>

            <Icon className="carrito-icono" icon="ion:cart" />

            {quantity > 0 ? <span className="carrito-numero">{quantity}</span> : ""}

        </Link>
    )
};

export default CartWidget;
