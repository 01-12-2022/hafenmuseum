"use client"

import ImageDisplay from "./imageDisplay"
import testdata from "./testdata"

type Item = {
    image: string
}
const ItemPage = ({ params }: { params: { id: string } }) => {

    const item = getItem(params.id)

    return (
        <>
            <div>ItemPage for {params.id}</div>
            <ImageDisplay
                image={item.image}
                alt="Henning Klaffke-Bild"
            />
        </>
    )
}

export default ItemPage

const getItem = (id: string) => {
    return testdata
}