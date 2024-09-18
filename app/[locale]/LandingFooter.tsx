import Link from "next/link"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"

export const LandingFooter = ({ t }: LandingComponentProps) => {
    return (<>
        <p className={styles.footerCopyright}>{t('std:copyright')}</p>
        <nav className={styles.footerNavBar}>
            <Link className={styles.footerNavBarItem} href="#">
                {t('std:tos')}
            </Link>
            <Link className={styles.footerNavBarItem} href="#">
                {t('std:privacy')}
            </Link>
        </nav>
    </>)
}