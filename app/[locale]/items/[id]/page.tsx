// "use client"

import ImageDisplay from "./imageDisplay"
import testdata from "./testdata"
import { getSingleItemFromId } from "@/app/db/items_db"

const ItemPage = async ({ params }: { params: { id: string } }) => {

    const item = await getSingleItemFromId(+params.id)

    return (
        <div>
            <div>ItemPage for {params.id}</div>
            <img
                src={item.image.toString()}
                alt={`Bild vom Angezeigten Item`}
            />
            <h2>Name: {item.name}</h2>
            <h2>Description: </h2>
            <div>{item.description}</div>
        </div>
    )
}

export default ItemPage