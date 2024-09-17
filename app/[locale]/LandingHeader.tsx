import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Link from "next/link"
import styles from "./styles.module.css"
import { LandingComponentProps } from "./MuseumLandingPage"

export const LandingHeader = ({ t }: LandingComponentProps) => {
    return (
        <>
            <Link className={styles.museumIconTopLeftContainer} href="#">
                <MapPin className={styles.museumIconTopLeft} />
                <span className={styles.museumIconTopLeftText}>{t('std:museumname')}</span>
            </Link>
            <nav className={styles.navBar}>
                <Link className={styles.navBarItem} href="#">
                    Home
                </Link>
                <Link className={styles.navBarItem} href="#">
                    Exhibitions
                </Link>
                <Link className={styles.navBarItem} href="#">
                    Visit
                </Link>
                <Button size="sm">Buy Ticket</Button>
            </nav>
        </>
    )
}