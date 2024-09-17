import { RowDataPacket } from "mysql2"
import { createConnection } from "./db"

export async function getSingleItemFromId(id: number) {
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

    return data[0]
}