import { MuseumLandingPageComponent } from "@/app/[locale]/MuseumLandingPage";
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['home', 'std', 'jana'];

export default async function Home({ params: { locale } }: { params: any }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const tours = ['worker', 'sailor'];

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <MuseumLandingPageComponent tours={tours} />
      </main>
    </TranslationsProvider>
  );
}