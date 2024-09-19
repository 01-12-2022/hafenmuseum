import { PageProps } from "@/app/constants";
import { Item } from "@/app/db/dbTypes";
import { getAllItems } from "@/app/db/items_db";
import initTranslations from "@/app/i18n";
import { ExhibitItem, ExhibitItemComponent, exhibitItemNamespaces } from "@/components/exhibit-item";
import ItemCard from "@/components/ItemCard";
import TranslationsProvider from "@/components/TranslationsProvider";
import Link from "next/link";

const namespaces = ["items", "routeInfos", "tours", "infoCategories", "extraInfos"]

export default async function Items({ params }: PageProps) {
    const { resources } = await initTranslations(params.locale, namespaces)

    const items = await getAllItems()

    const itemToExhibitItem = (item: Item): ExhibitItem => {
        return {
            image: item.image?.toString(),
            title: item.name,
            description: ""
        }
    }

    return (<TranslationsProvider
        locale={params.locale}
        resources={resources}
        namespaces={namespaces}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 60 }}>
            {items.map(i =>
                <Link href={`/items/${i.id}`} style={{ marginTop: -60 }}>
                    <ExhibitItemComponent
                        item={itemToExhibitItem(i)} />
                </Link>
            )}
        </div>
    </TranslationsProvider>)
}