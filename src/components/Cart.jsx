import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import trash from "../assets/imagenes/trash3.svg";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, countProducts, sumPriceProducts } = useContext(CartContext);

    if (countProducts() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">
                            <h2>No hay productos en el carrito</h2>
                            <Link to={"/"} className="btn btn-dark my-5">Volver al inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th colSpan={6} className="text-end">
                                    <button className="btn btn-dark" onClick={clear}>Vaciar Carrito</button>
                                </th>
                            </tr>
                            <tr>
                                <th>Producto</th>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Precio</th>
                                <th className="text-center">Cantidad</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-center">
                                        <img src={trash} width={24} alt="Eliminar Producto" onClick={() => removeItem(item.id)} style={{ cursor: 'pointer' }} />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}><b>Total</b></td>
                                <td className="text-center"><b>${sumPriceProducts()}</b></td>
                                <td className="text-end">
                                    <Link to={"/checkout"} className="btn btn-dark">Checkout</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
