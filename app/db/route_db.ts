import { RowDataPacket } from "mysql2";
import { createConnection } from "./db";
import { Item, TourStop } from "./dbTypes";

export async function getStopsForTour(routeKey?: string): Promise<TourStop[]> {
    if (!routeKey)
        return []

    const connection = await createConnection()

    const routeStopsQuery = `select 
                                rt.route_id as routeId,
                                rt.testdata_id as itemId,
                                rt.stop as stop
                                
                                from route as r
                                left join route_testdata as rt on r.id = rt.route_id
                                where r.route_key = ?
                                order by rt.stop;`
    const values = [routeKey]
    const data = (await connection.query<RowDataPacket[]>(routeStopsQuery, values))[0]
    connection.end()

    return data.map((o) => ({ routeId: o.routeId, itemId: o.itemId, stop: o.stop }))
}