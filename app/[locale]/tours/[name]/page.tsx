import { PageProps } from "@/app/constants"
import { getStopsForTour } from "@/app/db/route_db"
import initTranslations from "@/app/i18n"
import ItemCard from "@/components/ItemCard"
import TourCard from "@/components/TourCard"
import TranslationsProvider from "@/components/TranslationsProvider"

const namespaces = ["tours"]

const TourPage = async ({ params }: PageProps<{ name: string }>) => {
    const { resources } = await initTranslations(params.locale, namespaces)

    const stops = await getStopsForTour(params.name)

    return (
        <TranslationsProvider
            namespaces={namespaces}
            locale={params.locale}
            resources={resources}>
            <div>
                Hallo hier ist die Route {params.name}.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 50, gap: 10 }}>

                {stops.map(s =>
                    <ItemCard
                        locale={params.locale}
                        itemId={s.itemId}
                        route={params.name}
                    />
                )}

            </div>
        </TranslationsProvider>)
}

export default TourPage