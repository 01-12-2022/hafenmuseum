import { PageProps } from "@/app/constants"
import { Item } from "@/app/db/dbTypes"
import { getItemsFromIds } from "@/app/db/items_db"
import { getStopsForTour } from "@/app/db/route_db"
import initTranslations from "@/app/i18n"
import { ExhibitItem, ExhibitItemComponent } from "@/components/exhibit-item"
import TranslationsProvider from "@/components/TranslationsProvider"
import Link from "next/link"

const namespaces = ["tours", ...["items", "routeInfos", "infoCategories", "extraInfos"]]

const TourPage = async ({ params }: PageProps<{ name: string }>) => {
    const { resources } = await initTranslations(params.locale, namespaces)

    const stops = await getStopsForTour(params.name)
    const items = await getItemsFromIds(stops.map(s => s.itemId))

    const itemToExhibitItem = (item: Item): ExhibitItem => {
        return {
            image: item.image?.toString(),
            title: item.name,
            description: ""
        }
    }

    return (
        <TranslationsProvider
            namespaces={namespaces}
            locale={params.locale}
            resources={resources}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 60 }}>

                {items.map(i =>
                    <Link key={i.id + "" + i.name} href={`/items/${i.id}?route=${params.name}`} style={{ marginTop: -60 }}>
                        <ExhibitItemComponent
                            item={itemToExhibitItem(i)} />
                    </Link>
                )}

            </div>
        </TranslationsProvider>)
}

export default TourPage