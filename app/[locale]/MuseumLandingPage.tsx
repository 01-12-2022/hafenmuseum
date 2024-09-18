'use client'

import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import TourCard from "../../components/TourCard"
import { tours, TranslatorType } from "../constants"
import { InfoSection } from "./InfoSection"
import { LandingFooter } from "./LandingFooter"
import { LandingHeader } from "./LandingHeader"
import { LearnMoreSection } from "./LearnMoreSection"
import styles from "./styles.module.css"
import { TourSection } from "./TourSection"

export type LandingComponentProps = {
  t: TranslatorType
  children?: ReactNode
}
export function MuseumLandingPageComponent({ locale }: { locale: any }) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LandingHeader t={t} />
      </header>
      <main className={styles.mainSection}>
        <InfoSection t={t} />
        <TourSection t={t}>

          {tours.map((tour, index) => (
            <TourCard
              key={index}
              tourName={tour}
              locale={locale}
            />
          ))}

        </TourSection>
        <LearnMoreSection t={t} />
      </main>
      <footer className={styles.footer}>
        <LandingFooter t={t} />
      </footer>
    </div >
  )
}