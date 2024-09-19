import { Item } from "@/app/db/dbTypes"
import { getNextItemIdForRouteOrNull } from "@/app/db/route_db";
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import { useState } from "react";

const ItemRouteControldisplay = ({ item, route, nextId }: { item: Item, route?: string, nextId?: number }) => {
    return (<>
        {route && <p>You are on Route {route}</p>}
        {nextId && <Link href={`/items/${nextId}?route=${route}`} >Go to next item in Route {route}</Link>}
    </>)
}

export default ItemRouteControldisplay