const ImageList = ({ allItems }) => {
    return (
        <>
            {allItems.map(image => {
                return <img key={image.id} alt={image.id} src={image.url} />;
            })}
        </>
    );
};

export default ImageList;
