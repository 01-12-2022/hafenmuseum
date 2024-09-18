import { MuseumLandingPageComponent } from "@/app/[locale]/MuseumLandingPage";
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider';
import { PageProps, tours } from "../constants";

const i18nNamespaces = ['home', 'std', 'navbar', 'tours'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({ params: { locale } }: PageProps) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <MuseumLandingPageComponent locale={locale} />
      </main>
    </TranslationsProvider>
  );
}