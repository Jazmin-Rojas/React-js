import { Link, NavLink } from "react-router-dom";
import logo from "../assets/imagenes/logo.jpg"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid bg-info p-3">
            <div className="row align-items-center">
                <div className="col-md-2 text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="img-fluid" style={{ maxHeight: '100px' }} />
                    </Link>
                </div>
                <div className="col-md-8 text-center">
                    <h1 className="text-white">HOUSE CLEAN</h1>
                </div>
                <div className="col-md-2 d-flex justify-content-end align-items-center">
                    <NavLink to="/cart" className="nav-link text-white">
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/category/maquinaria"}>Maquinaria</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/category/quimicos"}>Quimicos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
