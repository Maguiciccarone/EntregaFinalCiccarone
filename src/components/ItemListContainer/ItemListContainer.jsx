import { useState, useEffect } from 'react';
import { getProducts } from '../../services';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);

        getProducts(categoryId).then((response) => {
            setItems(response);
            setIsLoading(false);
        });
    }, [categoryId]);
    return (
        <div className="container">
            <ItemList items={items} isLoading={isLoading} />

        </div>
    )
};

export default ItemListContainer