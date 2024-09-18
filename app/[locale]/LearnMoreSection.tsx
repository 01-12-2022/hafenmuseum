import { Button } from "@/components/ui/button"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"

export const LearnMoreSection = ({ t }: LandingComponentProps) => {
    return (<section className={styles.learnMoreSection}>
        <div className={styles.learnMoreContainer}>
            <div className={styles.learnMoreSubContainer}>
                <div className={styles.learnMoreTextContainer}>
                    <h2 className={styles.learnMoreHeaderText}>{t('home:enhance_stay')}</h2>
                    <p className={styles.learnMoreDescription}>
                        {t('home:enhance_info')}
                    </p>
                </div>
                <Button variant="outline" size="lg">{t('home:view_map')}</Button>
            </div>
        </div>
    </section>)
}