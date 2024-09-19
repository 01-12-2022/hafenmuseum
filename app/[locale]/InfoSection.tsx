import { Button } from "@/components/ui/button"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export const InfoSection = ({ t }: LandingComponentProps) => {
    const router = useRouter()

    return (
        <section className={styles.infoSection}>
            <div className={styles.infoSectionSubContainer}>
                <Card className={styles.welcomeContainer}>
                    <div className={styles.welcomeTextContainer}>
                        <h1 className={styles.welcomeText}>
                            {t('welcome')}
                        </h1>
                        <p className={styles.discoverUsText}>
                            {t('discover_us')}
                        </p>
                    </div>
                    <Button onClick={() => router.push("/tours")} style={{ color: '#ffffff' }} variant="outline">{t('std:learn_more')}</Button>
                </Card>
            </div>
            <img
                className={styles.infoSectionImage}
                alt="Hafenmuseum-Hintergrundbild"
                src={"/hafenmuseum_backdrop.jpg"}
            />
        </section>)
}