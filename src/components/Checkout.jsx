import { useEffect, useState } from "react";
import { addDoc, collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [cart, setItems] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setCart(snapShot.docs.map(item => ({id:item.data})));
            }
        });

    },[]);




    const calcularTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);
    }

    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telefono:telefono}
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const order = {buyer:buyer, items:items, total:calcularTotal()};
        const db = getFirestore();
        const ordenCollection = collection(db, "orden");
        addDoc(ordenCollection, order).then(data => {
            setOrderId(data.id);
        });

        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        })

    }

    return(
        <div className="container my-05">
            <div className="row">
                <div className="col">
                <form>
             <div className="mb-3">
               <label className="form-label">Nombre</label>
                 <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
             </div>
             <div className="mb-3">
                <label className="form-label">Email</label>
                   <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
             </div>
             <div class="mb-3">
                <label className="form-label">Telefono</label>
                   <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
             </div>
             
                    <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                </form>

                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><br>Total</br></td>
                                <td className="text-end"><br>${calcularTotal()}</br></td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
            <div className="row my-5">
                <div className="col tet-center">
                <div className="alert alert-warning" role="alert">
                   {orderId ? <div className="alert alert-warning" role="alert">Tu ID de compras es: <b> {orderId} </b></div> : ""}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout; 