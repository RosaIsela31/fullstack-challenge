import ImageCard from "./ImageCard";

const ImageList = ({ imagess }) => {
    const images = imagess.map(image => {
        return <ImageCard key={image.id} image={image} url={image[0].url} />;
    });
    return <div>{images}</div>;
};

export default ImageList;
