import { Button } from "@/components/ui/button"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"
import { useRouter } from "next/navigation"
import { HAFENMUSEUM_URL } from "../constants"

export const LearnMoreSection = ({ t }: LandingComponentProps) => {
    const router = useRouter()

    return (<section className={styles.learnMoreSection}>
        <div className={styles.learnMoreContainer}>
            <div className={styles.learnMoreSubContainer}>
                <div className={styles.learnMoreTextContainer}>
                    <h2 className={styles.learnMoreHeaderText}>{t('home:enhance_stay')}</h2>
                    <p className={styles.learnMoreDescription}>
                        {t('home:enhance_info')}
                    </p>
                </div>
                <Button onClick={() => router.push(HAFENMUSEUM_URL)} variant="outline" size="lg">{t('home:view_map')}</Button>
            </div>
        </div>
    </section>)
}