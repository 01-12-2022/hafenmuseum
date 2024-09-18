import { PageProps, tours } from "@/app/constants"
import initTranslations from "@/app/i18n"
import TourCard from "@/components/TourCard"
import TranslationsProvider from "@/components/TranslationsProvider"

const namespaces = ["tours"]

const ToursDisplay = async ({ params }: PageProps) => {
    const { resources } = await initTranslations(params.locale, namespaces)

    return (
        <TranslationsProvider
            locale={params.locale}
            namespaces={namespaces}
            resources={resources}>
            <div>
                {tours.map((tour, index) => (
                    <TourCard
                        key={index}
                        tourName={tour}
                        locale={params.locale}
                    />
                ))}
            </div>
        </TranslationsProvider>)
}

export default ToursDisplay