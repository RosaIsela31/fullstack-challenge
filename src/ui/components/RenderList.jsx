import "../../index.scss";
import axios from "axios";
import { useEffect } from "react";
import ImageList from "./ImageList";

const RenderList = ({ item }) => {
    const [images, setImages] = useState({
        data: [],
    });

    useEffect(() => {
        axios
            .get("https://picsum.photos/v2/list")
            .then(response => {
                const responseData = response.data;
                setImages({
                    ...images,
                    data: [responseData],
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const { name } = item;
    return (
        <div className="carousel-item">
            <div className="container-discovery">
                <h2 className="discovery">Descubre la Oferta!</h2>
                <ImageList imagess={images.data} />
            </div>
            <div className="carousel-item__details">
                <h2>Oferta</h2>
                <div>name: {name}</div>
            </div>
        </div>
    );
};

export default RenderList;
