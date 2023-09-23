
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
            <div className="card mb-3 p-4" style={{ alignItems: "center", boxShadow: "8px 3px 5px  #74b0bc" }}>
                <h1 style={{ color: "#74b0bc" }} >{item.name}</h1>
                <img src={`../public/img/portadas/${item.imageId}`} alt="" className="card-img-top" style={{ width: 400, height: 300 }} />
                <br />
                <p className="text_justify">{item.description}</p>
                <br />
                <p className="alert alert-success" role="alert" style={{ backgroundColor: "#74b0bc", color: "white" }}>PRECIO: ${item.price}</p>
                <button className="mb-5 btn btn-light" style={{ color: "#74b0bc" }} onClick={() => addItem(item, 1)}>Agregar al carrito</button>
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
