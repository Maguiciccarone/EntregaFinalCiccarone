
import PropTypes from "prop-types";
import './ItemDetail.css';


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
        <div className="container text-center">
            <div className="mb-3 p-4" style={{ alignItems: "center" }}>
                <h1 style={{ color: "#74b0bc" }} >{item.name}</h1>
                <img src={`../public/img/portadas/${item.imageId}`} alt="" className="card-img-top" style={{ width: 400, height: 300 }} />
                <p className="text_justify mt-3">{item.description}</p>
                <br />
                <p style={{ color: "grey", fontSize: 20 }}>PRECIO: ${item.price}</p>
                <button className="mb-5 btn btn-light" style={{ color: "#74b0bc", borderColor: "lightgray" }} onClick={() => addItem(item, 1)}>Agregar al carrito</button>
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
