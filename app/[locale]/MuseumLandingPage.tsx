'use client'

import { TFunction } from "i18next"
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import TourCard from "../../components/TourCards"
import styles from "./styles.module.css"
import { InfoSection } from "./InfoSection"
import { LandingFooter } from "./LandingFooter"
import { LandingHeader } from "./LandingHeader"
import { LearnMoreSection } from "./LearnMoreSection"
import { TourSection } from "./TourSection"

export type LandingComponentProps = {
  t: TFunction<"translation", undefined>,
  children?: ReactNode
}
type MuseumLandingPageProps = {
  tours: string[]
}
export function MuseumLandingPageComponent({ tours }: MuseumLandingPageProps) {
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
              title={t(`${tour}_title`)}
              description={t(`${tour}_desc`)}
              info={t(`${tour}_info`)}
              timeEstimation={t(`${tour}_time`)}
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