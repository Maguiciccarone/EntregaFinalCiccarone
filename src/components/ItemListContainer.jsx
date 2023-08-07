const ItemListContainer = (props) => {
    const {title} = props;
    return (
<div className="container">
    <h1 className="title-container">{title}</h1>
</div>
    )
}

export default ItemListContainer