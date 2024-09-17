// "use client"

import ImageDisplay from "./imageDisplay"
import testdata from "./testdata"
import { getSingleItemFromId } from "@/app/db/items_db"

const ItemPage = async ({ params }: { params: { id: string } }) => {

    const item = getItem(params.id)
    const test = await getSingleItemFromId(+params.id)

    return (
        <div>
            <div>ItemPage for {params.id}</div>
            {/* <ImageDisplay
                image={item.image}
                alt="Henning Klaffke-Bild"
            /> */}
            <div />
            <h2>Name: {test.name}</h2>
            <h2>Description: </h2>
            <div>{test.description}</div>
            {/* <div>{JSON.stringify(test, null, 3)}</div> */}
        </div>
    )
}

export default ItemPage

const getItem = (id: string) => {
    return testdata
}