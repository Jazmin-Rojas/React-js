import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    
    const [contador, SetContador] = useState (1);
    const [itemStock, SetItemStock] = useState (stock);
    const [visible, setvisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            SetContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            SetContador(contador - 1);
        }
    }

    const addToCart = () =>{
        if (contador <= itemStock) {

            SetItemStock(itemStock - contador)
            onAdd(contador);
            SetContador(1);
            setvisible(false);
        }
    }

    useEffect(() => {
        SetItemStock(stock);
    }, [stock])
    


    return (

        <div className="container">
        <div className="row">
            <div className="col">
                <div className="btn-group" role="group" aria-label="Basic example"></div>
                <button type="button" className="btn-primary" onClick={decrementar}>-</button>
                <button type="button" className="btn-primary">{contador}</button>
                <button type="button" className="btn-primary" onClick={incrementar}>+</button>
            </div>
        </div>
        <div className="row">
            <div className="col">
                {visible ? <button type="button" className="btn btn-danger" onClick={addToCart
                }>Agregar al Carrito</button> : <Link to={"/Cart"} className="btn btn-danger rounded-0" >Terminar Compra</Link> }
            </div>
        </div>
        </div>
    )
}

export default ItemCount; 