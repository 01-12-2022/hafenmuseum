import { RowDataPacket } from "mysql2";
import { createConnection } from "./db";
import { Item, TourStop } from "./dbTypes";

export async function getNextItemIdForRouteOrNull(item: Item, routeKey: string | null | undefined) {
    console.log("in nextid, ", item, routeKey)
    if (!routeKey)
        return null

    const stops = await getStopsForTour(routeKey)

    const indexOfStop = stops.findIndex(t => t.itemId == item.id)
    console.log("index: ", indexOfStop)

    if (indexOfStop + 1 >= stops.length)
        return null
    return stops[indexOfStop + 1].itemId
}

export async function getStopsForTour(routeKey: string): Promise<TourStop[]> {
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