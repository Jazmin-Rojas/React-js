import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-4 text-center p-5">
            <div className="card h-100 d-flex flex-column">
                <img src={item.imagen} className="card-img-top img-fluid" alt={item.nombre} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <p className="card-text text-uppercase">{item.nombre}</p>
                    <p className="card-text"><b>${item.precio}</b></p>
                    <p className="card-text">{item.descripcion}</p>
                    <Link to={"/item/" + item.id} className="btn btn-primary mt-auto">
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
