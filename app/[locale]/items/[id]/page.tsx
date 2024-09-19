import { PageProps } from "@/app/constants"
import { getInformationCategoriesForItem } from "@/app/db/info_categories_db"
import { getSingleItemFromId } from "@/app/db/items_db"
import { getStopsForTour } from "@/app/db/route_db"
import initTranslations from "@/app/i18n"
import { ExhibitItem, ExhibitItemComponent, exhibitItemNamespaces } from "@/components/exhibit-item"
import TranslationsProvider from "@/components/TranslationsProvider"

const i18nNamespaces = ["navbar", "std", ...["items", "routeInfos", "tours", "infoCategories", "extraInfos"]]

const ItemPage = async ({ params, searchParams }: PageProps<{ id: string }>) => {
    const { t, resources } = await initTranslations(params.locale, i18nNamespaces);
    const item = await getSingleItemFromId(+params.id)
    const routeKey = searchParams?.route
    const infoCategories = await getInformationCategoriesForItem(item, routeKey)

    const stopsOfRoute = await getStopsForTour(searchParams?.route)
    const index = stopsOfRoute.findIndex(s => s.itemId == item.id)
    const hasNext = (!!routeKey) && (index < stopsOfRoute.length - 1)
    const hasPrevious = (!!routeKey) && (index > 0)

    const itemForDisplay: ExhibitItem = {
        title: item.name,
        description: item.description,
        image: item.image?.toString() || "",
        routeInfo: infoCategories.routeData,
        infoCategories: infoCategories.infoCategories,
        nextItemUrl: (hasNext) ? `/items/${stopsOfRoute[index + 1].itemId}?route=${routeKey}` : undefined,
        previousItemUrl: (hasPrevious) ? `/items/${stopsOfRoute[index - 1].itemId}?route=${routeKey}` : undefined,
    }

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={params.locale}
            resources={resources}>

            <ExhibitItemComponent
                item={itemForDisplay}
            />

            {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>ItemPage for {params.id}</div>
                <ImageDisplay
                    image={item.image?.toString()}
                    alt={"Image"}
                />
                <ItemNameDisplay name={item.name} />

                <ItemDetailDisplay item={item} />

                <ItemRouteControldisplay nextId={nextId || undefined} route={searchParams?.route} item={item} />

            </div> */}
        </TranslationsProvider>
    )
}

export default ItemPage