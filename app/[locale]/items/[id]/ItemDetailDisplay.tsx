"use client"
import { Item } from "@/app/db/dbTypes"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

type ItemDetailDisplayProps = {
    item: Item
}
export const ItemDetailDisplay = ({ item }: ItemDetailDisplayProps) => {
    const { t } = useTranslation();

    return (<Card>
        <CardHeader>Description</CardHeader>
        <CardContent>{t(item.description)}</CardContent>
    </Card>)
}