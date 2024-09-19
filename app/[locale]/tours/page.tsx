import { PageProps, tours } from "@/app/constants"
import initTranslations from "@/app/i18n"
import TourCard from "@/components/TourCard"
import TranslationsProvider from "@/components/TranslationsProvider"
import { Card } from "@/components/ui/card"

const namespaces = ["tours", "navbar"]

const ToursDisplay = async ({ params }: PageProps) => {
    const { t, resources } = await initTranslations(params.locale, namespaces)

    return (
        <TranslationsProvider
            locale={params.locale}
            namespaces={namespaces}
            resources={resources}>
            <Card style={{ textAlign: 'center', fontSize: 25, fontWeight: '700', backgroundColor: '#e40046', color: '#ffffff', borderWidth: 0, margin: 20, padding: 12 }}>
                {t("navbar:tours")}
            </Card>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 25, paddingTop: 15, gap: 20 }}>
                {tours.map((tour, index) => (
                    <TourCard
                        key={index}
                        tourName={tour}
                    />
                ))}
            </div>
        </TranslationsProvider>)
}

export default ToursDisplay