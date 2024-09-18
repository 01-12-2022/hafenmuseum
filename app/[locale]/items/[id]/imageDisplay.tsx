import Image from 'next/image'

type ImageDisplayProps = {
    image: string,
    alt: string
}
const ImageDisplay = ({ image, alt }: ImageDisplayProps) => {
    return (
        <div>
            <img
                src={image}
                alt={alt}
            />
            <div>{image}</div>
        </div>
    )
}

export default ImageDisplay