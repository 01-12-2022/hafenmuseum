"use client";
import { useTranslation } from "react-i18next";

export const ItemNameDisplay = ({ name }: { name: string }) => {
    // "use client"
    const { t } = useTranslation();
    // const t = (i: string) => { return i }

    return (<div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', width: '100%' }}>

        <h1>{t(name)}</h1>

    </div>)
}