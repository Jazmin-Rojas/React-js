import { Link } from "react-router-dom";

const Error404 = () => {
    return (

        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Error</h1>
                    <h2>404</h2>
                    <p>LA PAGINA QUE BUSCA NO EXISTE!</p>
                    <p className="my-5"><Link to={"/"}>VUELVE A LA PAGINA INICIAL</Link></p>
                </div>
            </div>
        </div>

    )
};

export default Error404;