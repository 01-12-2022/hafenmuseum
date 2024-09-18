"use client"

import { tours } from '@/app/constants'
import initTranslations from '@/app/i18n'
import { Clock, Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useTranslation } from 'react-i18next'


type TourCardProps = {
    tourName: string,
    locale: any
}
const TourCard = async ({ tourName, locale }: TourCardProps) => {
    const { t } = useTranslation()

    return (
        <Card>
            <CardHeader>
                <CardTitle>{t(`tours:${tourName}_title`)}</CardTitle>
                <CardDescription>{t(`tours:${tourName}_desc`)}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{t(`tours:${tourName}_time`)}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <Info className="w-4 h-4" />
                    <span>{t(`tours:${tourName}_info`)}</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default TourCard