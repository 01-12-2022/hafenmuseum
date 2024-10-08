import { RowDataPacket } from "mysql2"
import { createConnection } from "./db"
import { Item } from "./dbTypes"


export async function getSingleItemFromId(id: number): Promise<Item> {
    const connection = await createConnection()

    const query = `select 
                        t.id as id,
                        t.name as name,
                        t.description as description,
                        i.image as image
                    from testdata as t
                    left join item_image as i on t.id = i.item_id 
                    where t.id=?;`
    const values = [id]

    const data = (await connection.query<RowDataPacket[]>(query, values))[0]
    await connection.end()

    return {
        id: data[0].id,
        description: data[0].description,
        image: data[0].image,
        name: data[0].name
    }
}

export async function getItemsFromIds(itemIds: number[]) {
    const connection = await createConnection()

    const query = `select 
                        t.id as id,
                        t.name as name,
                        t.description as description,
                        i.image as image
                    from testdata as t
                    left join item_image as i on t.id = i.item_id 
                    where t.id in (${itemIds.map(() => "?").join(",")});`
    const values = [...itemIds]

    const data = (await connection.query<RowDataPacket[]>(query, values))[0]
    await connection.end()

    return data.map(d => ({
        id: d.id,
        description: d.description,
        image: d.image,
        name: d.name
    }))
}

export async function getAllItems() {
    const connection = await createConnection()

    const query = `select 
                        t.id as id,
                        t.name as name,
                        t.description as description,
                        i.image as image
                    from testdata as t
                    left join item_image as i on t.id = i.item_id;`

    const data = (await connection.query<RowDataPacket[]>(query))[0]
    await connection.end()

    return data.map(d => ({
        id: d.id,
        description: d.description,
        image: d.image,
        name: d.name
    }))
}