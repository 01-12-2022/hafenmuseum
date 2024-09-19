'use client'

import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import TourCard from "../../components/TourCard"
import { tours, TranslatorType } from "../constants"
import { InfoSection } from "./InfoSection"
import { LandingFooter } from "./LandingFooter"
import { LearnMoreSection } from "./LearnMoreSection"
import styles from "./styles.module.css"
import { TourSection } from "./TourSection"

export type LandingComponentProps = {
  t: TranslatorType
  children?: ReactNode
}
export function MuseumLandingPageComponent() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <main className={styles.mainSection}>
        <InfoSection t={t} />
        <TourSection t={t}>

          {tours.map((tour, index) => (
            <TourCard
              key={index}
              tourName={tour}
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