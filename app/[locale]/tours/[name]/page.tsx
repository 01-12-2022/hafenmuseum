import { PageProps } from "@/app/constants"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"

const namespaces = ["tours"]

const TourPage = async ({ params }: PageProps<{ name: string }>) => {
    const { resources } = await initTranslations(params.locale, namespaces)

    return (
        <TranslationsProvider
            namespaces={namespaces}
            locale={params.locale}
            resources={resources}>
            <div>
                Hallo hier ist die Route {params.name}.
            </div>
        </TranslationsProvider>)
}

export default TourPage