import { Clock, Info } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'

type TourCardProps = {
    title: string
    description: string
    timeEstimation: string
    info: string
}
const TourCard = ({ title, description, info, timeEstimation }: TourCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{timeEstimation}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <Info className="w-4 h-4" />
                    <span>{info}</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default TourCard