import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { HAFENMUSEUM_URL } from "../constants"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"

export const LandingHeader = ({ t }: LandingComponentProps) => {
    return (
        <header className={styles.header}>
            <Link className={styles.museumIconTopLeftContainer} href="/">
                <MapPin className={styles.museumIconTopLeft} />
                <span className={styles.museumIconTopLeftText}>{t('std:museumname')}</span>
            </Link>
            <nav className={styles.navBar}>
                <Link className={styles.navBarItem} href="/">
                    {t('navbar:home')}
                </Link>
                <Link className={styles.navBarItem} href="/items">
                    {t('navbar:exhibitions')}
                </Link>
                <Link className={styles.navBarItem} href="/tours">
                    {t('navbar:tours')}
                </Link>
                <Link href={HAFENMUSEUM_URL}>
                    <Button size="sm">{t('navbar:buyTicket')}</Button>
                </Link>
            </nav>
        </header>
    )
}