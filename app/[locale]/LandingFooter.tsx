import Link from "next/link"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"

export const LandingFooter = ({ }: LandingComponentProps) => {
    return (<>
        <p className={styles.footerCopyright}>© 2023 City Museum. All rights reserved.</p>
        <nav className={styles.footerNavBar}>
            <Link className={styles.footerNavBarItem} href="#">
                Terms of Service
            </Link>
            <Link className={styles.footerNavBarItem} href="#">
                Privacy
            </Link>
        </nav>
    </>)
}