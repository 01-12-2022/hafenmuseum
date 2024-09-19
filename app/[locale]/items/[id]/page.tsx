import { getSingleItemFromId } from "@/app/db/items_db"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import ImageDisplay from "./imageDisplay"
import { ItemDetailDisplay } from "./ItemDetailDisplay"
import { ItemNameDisplay } from "./ItemNameDisplay"
import { PageProps, tours } from "@/app/constants";
import ItemRouteControldisplay from "./ItemRouteControlDisplay"
import { getNextItemIdForRouteOrNull } from "@/app/db/route_db"

const i18nNamespaces = ["items"]

const ItemPage = async ({ params, searchParams }: PageProps<{ id: string }>) => {
    const { t, resources } = await initTranslations(params.locale, i18nNamespaces);
    const item = await getSingleItemFromId(+params.id)

    const nextId = await getNextItemIdForRouteOrNull(item, searchParams?.route)
    console.log("next id: ", nextId)

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={params.locale}
            resources={resources}>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <div>ItemPage for {params.id}</div> */}
                <ImageDisplay
                    image={item.image?.toString()}
                    alt={"Image"}
                />
                <ItemNameDisplay name={item.name} />

                <ItemDetailDisplay item={item} />

                <ItemRouteControldisplay nextId={nextId || undefined} route={searchParams?.route} item={item} />

            </div>
        </TranslationsProvider>
    )
}

export default ItemPage