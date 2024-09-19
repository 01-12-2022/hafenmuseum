import { Button } from "@/components/ui/button"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"
import { useRouter } from "next/navigation"
import { HAFENMUSEUM_URL } from "../constants"
import { Card } from "@/components/ui/card"

export const LearnMoreSection = ({ t }: LandingComponentProps) => {
    const router = useRouter()

    return (<section className={styles.learnMoreSection}>
        <Card style={{ marginLeft: 70, marginRight: 70, backgroundColor: '#0d0d0dc0', padding: 20, borderWidth: 0 }} className={styles.learnMoreContainer}>
            <div className={styles.learnMoreSubContainer}>
                <div className={styles.learnMoreTextContainer}>
                    <h2 className={styles.learnMoreHeaderText}>{t('home:enhance_stay')}</h2>
                    <p className={styles.learnMoreDescription}>
                        {t('home:enhance_info')}
                    </p>
                </div>
                <Button style={{color: 'white'}} onClick={() => router.push(HAFENMUSEUM_URL)} variant="outline" size="lg">{t('home:view_map')}</Button>
            </div>
        </Card>
    </section>)
}