import ImageList from "./ImageList";
import items from "../../dataimg/items";
import "../../index.scss";

const RenderList = () => {
    const allItems = items;
    return (
        <div className="carousel-item">
            <div className="container-discovery">
                <h2 className="discovery">Descubre la Oferta!</h2>
                {<ImageList allItems={allItems} />}
            </div>
            <div className="carousel-item__details">
                <h2>Oferta</h2>
                <div>name: {name}</div>
            </div>
        </div>
    );
};

export default RenderList;
