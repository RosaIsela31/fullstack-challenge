import Navbar from "./Navbar";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="us-information">
                <div className="container-title-us">
                    <h1 className="title-us">
                        <b>
                            ¡TE AYUDAMOS A <br />
                            REACTIVAR TU NEGOCIO!
                        </b>
                    </h1>
                </div>
            </div>
            <div className="details-us">
                Reworth es la red de recompensas más grande de la CDMX y una
                iniciativa que te permite conectar sin costo y de forma
                automática con miles de usuarios de nuestros bancos afiliados a
                través de recompensas "cashback" en tu establecimiento. Para
                conocer más da click{" "}
                <b>
                    <a href="https://www.reworth.co/">here</a>
                </b>
            </div>
        </>
    );
};

export default AboutUs;
