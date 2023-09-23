import propTypes from "prop-types";
import { Link } from "react-router-dom";


const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <div className="d-flex align-items-center m-3" style={{ fontSize: "3rem", color: "#74b0bc" }}>
            <span role="status">Loading...</span>
            <div className="spinner-border ms-auto" style={{ width: "3rem", height: "3rem", color: "#74b0bc" }} aria-hidden="true"></div>
        </div>;
    }

    return (
        <div>
            <div style={{ color: "#74b0bc" }}>
                <h1 className="text-center">EXCURSIONES</h1>
            </div>
            <div className="container text-center" >
                <div className="row">

                    {items.map((item) => (
                        <div key={item.id} className="col-sm-4">
                            <div className="card mb-3 p-4" style={{ alignItems: "center", boxShadow: "8px 3px 5px  #74b0bc" }}>
                                <img src={`../public/img/portadas/${item.imageId}`} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h3 style={{ height: "60px" }}>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <Link to={`/item/${item.id}`}>
                                        <button className="btn btn-light" style={{ color: "#74b0bc", borderColor: "lightgrey" }}>VER EXCURSIÓN</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList
