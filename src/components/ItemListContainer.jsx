const ItemListContainer = (props) => {
    const {greeting} = props;
    return (
<div className="container">
    <h1 className="greeting-container">{greeting}</h1>
</div>
    )
}

export default ItemListContainer