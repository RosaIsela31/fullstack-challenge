import "../../index.scss";

const Header = () => {
    return (
        <nav className="nav">
            <img
                src="https://reworth-public-assets.s3-us-west-2.amazonaws.com/img/reworth-logo-white.png"
                alt="ReWorth rewards"
                className="img-reworth"
            />
            <div className="options-nav">
                <a href="#discount" className="atag">
                    Promociones
                </a>
                <a href="#discount" className="atag">
                    Nosotros
                </a>
                <a href="#discount" className="atag">
                    Historias de Éxito
                </a>
            </div>
        </nav>
    );
};

export default Header;
