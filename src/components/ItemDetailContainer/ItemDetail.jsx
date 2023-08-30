import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (!item) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="container">
            <div className="card text-center mt-3">
            <h1>{item.name}</h1>
            <p>${item.price}</p>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};
export default ItemDetail;
