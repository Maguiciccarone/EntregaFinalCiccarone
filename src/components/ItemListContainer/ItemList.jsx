import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1 className="text-center">EXCURSIONES</h1>
            <div className="container text-center" >
                <div className="row">

                    {items.map((item) => (
                        <div key={item.id} className="col">
                            <div className="card mb-3 p-4" style={{ alignItems: "center", boxShadow: "8px 3px 5px lightgreen" }}>
                                <img src={item.img} alt="" width="300px" height="200px" />
                                <div className="card-body">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <Link to={`/item/${item.id}`}>
                                        <button className="btn btn-success">VER EXCURSION</button>
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
