type ImageDisplayProps = {
    image: string,
    alt: string
}
const ImageDisplay = ({ image, alt }: ImageDisplayProps) => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <img
                src={image}
                alt={alt}
            />
        </div>
    )
}

export default ImageDisplay