import React from "react"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"
import { Card } from "@/components/ui/card"

export const TourSection: React.FC<LandingComponentProps> = ({ t, children }) => {

    return (<section
    // className={styles.toursSection}
    >
        <Card
            style={{ backgroundColor: '#F3F4F6dd', padding: 15, margin: 30 }}
        >
            <div className={styles.toursContainer}>
                <h2 className={styles.toursHeaderText}>{t('tours_header')}</h2>
                <p className={styles.toursDescription}>
                    {t('tours_desc')}
                </p>
                <div className={styles.tourCardsContainer}>

                    {children}

                </div>
            </div>
        </Card>
    </section>)
}