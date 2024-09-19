"use client"
import { Item } from "@/app/db/dbTypes"
import ExpandableCard from "@/components/ui/expandableCard"
import { InfoIcon } from "lucide-react"
import { useTranslation } from "react-i18next"

type ItemDetailDisplayProps = {
    item: Item
}
export const ItemDetailDisplay = ({ item }: ItemDetailDisplayProps) => {
    const { t } = useTranslation();

    return (<div>
        <ExpandableCard
            icon={<InfoIcon />}
            title="Description"
        >
            <p>{t(item.description)}</p>
        </ExpandableCard>
    </div>)
}