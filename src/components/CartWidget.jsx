import { Link } from "react-router-dom";
import cart from "../assets/imagenes/bag-heart.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const { countProducts } = useContext(CartContext);

    if (countProducts() > 0) {
        return (
            <Link to={"/cart"} className="btn btn-primary position-relative">
                <img src={cart} alt="carrito" width={32} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {countProducts()}
                </span>
            </Link>
        );
    }

    return null;
};

export default CartWidget;
