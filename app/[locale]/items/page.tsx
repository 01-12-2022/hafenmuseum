import { PageProps } from "@/app/constants";
import { Item } from "@/app/db/dbTypes";
import { getAllItems } from "@/app/db/items_db";
import initTranslations from "@/app/i18n";
import { ExhibitItem, ExhibitItemComponent } from "@/components/exhibit-item";
import TranslationsProvider from "@/components/TranslationsProvider";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const namespaces = ["navbar", "items", "routeInfos", "tours", "infoCategories", "extraInfos"]

export default async function Items({ params }: PageProps) {
    const { t, resources } = await initTranslations(params.locale, namespaces)

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
        <Card style={{ textAlign: 'center', fontSize: 25, fontWeight: '700', backgroundColor: '#e40046', color: '#ffffff', borderWidth: 0, margin: 20, padding: 12 }}>
            {t("navbar:exhibitions")}
        </Card>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 60 }}>
            {items.map(i =>
                <Link key={i.id + "" + i.name} href={`/items/${i.id}`} style={{ marginTop: -60 }}>
                    <ExhibitItemComponent
                        item={itemToExhibitItem(i)} />
                </Link>
            )}
        </div>
    </TranslationsProvider>)
}