import { MuseumLandingPageComponent } from "@/components/museum-landing-page";
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }: { params: any }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <h1>{t('test')}</h1>

        <MuseumLandingPageComponent />
      </main>
    </TranslationsProvider>
  );
}