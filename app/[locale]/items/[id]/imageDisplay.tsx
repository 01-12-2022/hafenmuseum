import Image from 'next/image'

type ImageDisplayProps = {
    image: string,
    alt: string
}
const ImageDisplay = ({ image, alt }: ImageDisplayProps) => {
    return (
        <div>
            <Image
                src={image}
                alt={alt}
                width={500}
                height={600}
            />
            <div>{image}</div>
        </div>
    )
}

export default ImageDisplay