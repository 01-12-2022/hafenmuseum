import { Item } from "@/app/db/dbTypes";
import { getSingleItemFromId } from "@/app/db/items_db";
import { Card, CardDescription, CardHeader } from "./ui/card";
import initTranslations from "@/app/i18n";
import Link from "next/link";

const namespaces = ["items"]

const ItemCard = async ({ itemId, locale, route }: { itemId: number, locale: any, route?: string }) => {
    const item = await getSingleItemFromId(itemId)
    const { t } = await initTranslations(locale, namespaces)

    return (<Card>
        <Link href={`/items/${itemId}${(!!route) ? `?route=${route}` : ""}`}>
            <CardHeader>
                <img
                    style={{ width: 30 }}
                    src={item.image?.toString()}
                    alt="test" />
                <p>{t(item.name)}</p>
            </CardHeader>
            <CardDescription>{t(item.description)}</CardDescription>
        </Link>
    </Card>)
}

export default ItemCard