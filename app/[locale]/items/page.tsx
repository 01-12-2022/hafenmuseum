import { PageProps } from "@/app/constants";
import { getAllItems } from "@/app/db/items_db";
import ItemCard from "@/components/ItemCard";

export default async function Items({ params }: PageProps) {
    const items = await getAllItems()

    return (<>
        <div style={{ display: 'flex', flexDirection: 'column', margin: 50, gap: 30 }}>
            {items.map(i =>
                <ItemCard
                    itemId={i.id}
                    locale={params.locale} />
            )}
        </div>
    </>)
}