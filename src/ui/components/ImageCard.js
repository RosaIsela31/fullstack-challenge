const ImageCard = ({ image, key, url }) => {
    console.log("url", url);

    return (
        <div>
            <img ref={key} alt={key} src={url} />
        </div>
    );
};

export default ImageCard;
