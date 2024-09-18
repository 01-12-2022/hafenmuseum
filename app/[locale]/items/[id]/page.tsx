import { getSingleItemFromId } from "@/app/db/items_db"
import ImageDisplay from "./imageDisplay"
import { Item } from "@/app/db/dbTypes"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ItemNameDisplay } from "./ItemNameDisplay"
import { ItemDetailDisplay } from "./ItemDetailDisplay"

const i18nNamespaces = ["items"]

const ItemPage = async ({ params }: { params: { id: string, locale: any } }) => {
    const { t, resources } = await initTranslations(params.locale, i18nNamespaces);
    const item = await getSingleItemFromId(+params.id)

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={params.locale}
            resources={resources}>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <div>ItemPage for {params.id}</div> */}
                <ImageDisplay
                    image={item.image.toString()}
                    alt={"Image"}
                />
                <ItemNameDisplay name={item.name} />

                <ItemDetailDisplay item={item} />
            </div>
        </TranslationsProvider>
    )
}

export default ItemPage