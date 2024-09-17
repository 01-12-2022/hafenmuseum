import React from 'react'
import Image from 'next/image'
import testdata from './testdata'

type ImageDisplayProps = {
    image: string,
    alt: string
}
const ImageDisplay = ({ image, alt }: ImageDisplayProps) => {
    return (
        // <div>ImageDisplay</div>
        <div>
            <img
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