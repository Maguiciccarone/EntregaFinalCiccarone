
import PropTypes from "prop-types";



const ItemDetail = ({ item, isLoading, addItem }) => {
    if (isLoading) {
        return <div className="d-flex align-items-center m-3" style={{ fontSize: "3rem", color: "#74b0bc" }}>
            <span role="status">Loading...</span>
            <div className="spinner-border ms-auto" style={{ width: "3rem", height: "3rem", color: "#74b0bc" }} aria-hidden="true"></div>
        </div>;
    }
    if (!item) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="container">
            <div className="card text-center mt-3">
                <h1>{item.name}</h1>
                <img src={`../public/img/portadas/${item.imageId}`} alt="" className="card-img-top" />
                <p>${item.price}</p>
                <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
};
export default ItemDetail;
