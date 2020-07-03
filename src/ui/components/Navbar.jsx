import { Link } from "react-router-dom";
import "../../index.scss";

const Header = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <img
                    src="https://reworth-public-assets.s3-us-west-2.amazonaws.com/img/reworth-logo-white.png"
                    alt="ReWorth rewards"
                    className="img-reworth"
                />
            </Link>
            <div className="options-nav">
                <Link to="/" className="atag">
                    Promociones
                </Link>
                <Link to="/us" className="atag">
                    Nosotros
                </Link>
            </div>
        </nav>
    );
};

export default Header;
