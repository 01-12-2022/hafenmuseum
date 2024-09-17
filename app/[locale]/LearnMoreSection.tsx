import { Button } from "@/components/ui/button"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"

export const LearnMoreSection = ({ t }: LandingComponentProps) => {
    return (<section className={styles.learnMoreSection}>
        <div className={styles.learnMoreContainer}>
            <div className={styles.learnMoreSubContainer}>
                <div className={styles.learnMoreTextContainer}>
                    <h2 className={styles.learnMoreHeaderText}>Enhance Your Visit</h2>
                    <p className={styles.learnMoreDescription}>
                        Our self-guided tours are designed to give you the freedom to explore at your own pace.
                        Pick up a map at the information desk to start your journey.
                    </p>
                </div>
                <Button variant="outline" size="lg">View Museum Map</Button>
            </div>
        </div>
    </section>)
}