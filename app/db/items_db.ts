import { QueryResult, RowDataPacket } from "mysql2"
import { createConnection } from "./db"
import { Item } from "./dbTypes"
import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service"

export async function getRandomThing() {
    const connection = await createConnection()

    const query = 'select * from testdata where id=1'

    const result = (await connection.query(query))[0]
    await connection.end()
    return result
}

export async function getSingleItemFromId(id: number) {
    const connection = await createConnection()

    const query = `select * from testdata where id=?`
    const values = [id]

    const data = (await connection.query<RowDataPacket[]>(query, values))[0]
    await connection.end()

    return data[0]
}