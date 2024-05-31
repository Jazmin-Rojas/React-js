import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <img src={item.imagen} className="img-fluid rounded" alt={item.nombre} />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-4 text-uppercase">{item.nombre}</h1>
                    <p className="h4 text-success fw-bold">${item.precio}</p>
                    <p className="mb-4">{item.descripcion}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
