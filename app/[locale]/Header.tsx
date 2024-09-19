"use client"
import { Button } from "@/components/ui/button"
import { MapPin, PanelTopCloseIcon, PanelTopOpenIcon } from "lucide-react"
import Link from "next/link"
import { HAFENMUSEUM_URL } from "../constants"
import { LandingComponentProps } from "./MuseumLandingPage"
import styles from "./styles.module.css"
import { useTranslation } from "react-i18next"
import { useState } from "react"

export const NavBar = () => {
    const { t } = useTranslation()
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <header className={"flex justify-center w-full p-4 bg-[#f3f4f6dd] border-b-1 sm:flex-col flex-col lg:flex-row"}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <Link style={{ width: 'auto' }} className={styles.museumIconTopLeftContainer} href="/">
                    <MapPin className={styles.museumIconTopLeft} />
                    <span className={styles.museumIconTopLeftText}>{t('std:museumname')}</span>
                </Link>
                <div
                    className="lg:hidden"
                    style={{ color: '#e40046', justifySelf: 'flex-end', width: 'auto' }}
                    onClick={() => setShowNavbar(p => !p)} >
                    {showNavbar ? <PanelTopCloseIcon /> : <PanelTopOpenIcon />}
                </div>
            </div>
            <nav className={"flex lg:gap-4 items-center flex-col lg:flex-row text-[#e40046]"}>
                <Link className={`flex-1 justify-self-center hover:text-white hover:underline pb-3 md:block md:pb-0 md:mt-0 ${showNavbar ? 'p-3 md:p-0 block' : 'hidden'}`} href="/">
                    {t('navbar:home')}
                </Link>
                <Link className={`flex-1 justify-self-center hover:text-white hover:underline pb-3 md:block md:pb-0 md:mt-0 ${showNavbar ? 'p-3 md:p-0 block' : 'hidden'}`} href="/items">
                    {t('navbar:exhibitions')}
                </Link>
                <Link className={`flex-1 justify-self-center hover:text-white hover:underline pb-3 md:block md:pb-0 md:mt-0 ${showNavbar ? 'p-3 md:p-0 block' : 'hidden'}`} href="/tours">
                    {t('navbar:tours')}
                </Link>
                <Link className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${showNavbar ? 'p-3 md:p-0 block' : 'hidden'}`} href={HAFENMUSEUM_URL}>
                    <Button size="sm">{t('navbar:buyTicket')}</Button>
                </Link>
            </nav>
        </header>
    )
}

/*
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
*/