'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from "react-i18next"
import { useState } from "react"

export const exhibitItemNamespaces = ["items", "routeInfos", "tours", "infoCategories", "extraInfos"]

export interface ExhibitItem {
  image: string
  title: string
  description: string
  infoCategories?: { infoType: string, infoValue: string }[]
  routeInfo?: { key: string; value: string }
  previousItemUrl?: string
  nextItemUrl?: string
}

interface ExhibitProps {
  item: ExhibitItem
}

const defaultItem: ExhibitItem = {
  image: "/placeholder.svg?height=600&width=800",
  title: "Ancient Egyptian Scarab",
  description: "This beautifully preserved scarab dates back to the New Kingdom period of ancient Egypt, circa 1550-1070 BCE. Scarabs were popular amulets and impression seals in ancient Egypt, often used as jewelry and entombed with mummies. This particular specimen showcases intricate hieroglyphic inscriptions on its base, likely a prayer or magical spell for the deceased.",
  // infoCategories: {
  //   "Material": "Faience",
  //   "Period": "New Kingdom",
  //   "Dimensions": "1.5 cm x 2 cm",
  //   "Provenance": "Thebes, Egypt",
  //   "Acquisition": "Donated by the Egyptology Society, 1923",
  // },
  routeInfo: {
    key: "Conservation Status",
    value: "Excellent condition, minimal restoration required"
  },
  previousItemUrl: "/exhibit/previous",
  nextItemUrl: "/exhibit/next"
}

export function ExhibitItemComponent({ item = defaultItem }: ExhibitProps) {
  const { t } = useTranslation()
  const [showDescription, setShowDescription] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <Card onClick={() => setShowDescription(p => !p)} className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{t("items:" + item.title)}</h2>
            {(showDescription)
              ? <p className="text-gray-600">{t("items:" + item.description)}</p>
              : null}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {item.routeInfo?.value && (
          <Card className="col-span-full bg-primary text-primary-foreground">
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{t("tours:" + item.routeInfo.key)}</h3>
              <p className="text-sm">{t("routeInfos:" + item.routeInfo.value)}</p>
            </CardContent>
          </Card>
        )}
        {item.infoCategories && item.infoCategories.map((v, i) => (
          <Card key={v.infoType + "" + i} className="bg-primary/5">
            <CardContent className="p-4">
              <h3 className="font-semibold text-primary">{t("infoCategories:" + v.infoType)}</h3>
              <p className="text-sm text-gray-600">{t("extraInfos:" + v.infoValue)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {!item.routeInfo
        ? null
        : <div className="flex justify-between items-center mt-6">
          {item.previousItemUrl ? (
            <Link href={item.previousItemUrl} passHref>
              <Button variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          )}
          {item.nextItemUrl ? (
            <Link href={item.nextItemUrl} passHref>
              <Button variant="outline">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled>
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>}
    </div>
  )
}