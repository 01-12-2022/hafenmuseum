import { Button } from "@/components/ui/button"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"

export const InfoSection = ({ t }: LandingComponentProps) => {
    return (<section className={styles.infoSection}>
        <div className={styles.infoSectionSubContainer}>
            <div className={styles.welcomeContainer}>
                <div className={styles.welcomeTextContainer}>
                    <h1 className={styles.welcomeText}>
                        {t('welcome')}
                    </h1>
                    <p className={styles.discoverUsText}>
                        {t('discover_us')}
                    </p>
                </div>
                <Button variant="outline">{t('std:learn_more')}</Button>
            </div>
        </div>
        <img
            className={styles.infoSectionImage}
            src={"/hafenmuseum_backdrop.jpg"}
        />
    </section>)
}