import { MuseumLandingPageComponent } from "@/app/[locale]/MuseumLandingPage";
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['home', 'std', 'jana'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({ params: { locale } }: { params: any }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

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