const ImageList = ({ allItems }) => {
    const images = allItems.map(image => {
        return <img key={image.id} alt={image.id} src={image.url} />;
    });

    return <>{images}</>;
};

export default ImageList;
