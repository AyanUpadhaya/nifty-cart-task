import { useContext } from "react";
import { ProductsContext } from "../ProductsProvider/ProductsProvider";

const Header = () => {
    const {cart} = useContext(ProductsContext);
    return (
        <div>
            <nav className={'navbar navbar-expand-lg bg-dark fixed-top w-100 text-white":"navbar navbar-expand-lg bg-dark w-100 text-white'}>
                <div className="container">
                    <a className="navbar-brand text-white fw-bold" href="#">FoodExpress</a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="ms-auto">
                            <a className="btn btn-lg btn-warning fw-bold rounded" to="/cart"><i className="bi bi-cart fw-bold"></i><span>{cart.length}</span></a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;