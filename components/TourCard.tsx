"use client"

import { Clock, Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


type TourCardProps = {
    tourName: string,
    locale: any
}
const TourCard = ({ tourName, locale }: TourCardProps) => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <Card>
            <Link href={`/tours/${tourName}`}>
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
            </Link>
        </Card>
    )
}

export default TourCard