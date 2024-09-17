'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Info } from "lucide-react"
import { useTranslation } from "react-i18next"
import TourCard from "./TourCards"
type MuseumLandingPageProps = {
  tours: string[]
}
export function MuseumLandingPageComponent({ tours }: MuseumLandingPageProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6 mr-2" />
          <span className="font-bold">{t('std:museumname')}</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Exhibitions
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Visit
          </Link>
          <Button size="sm">Buy Ticket</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  {t('welcome')}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  {t('discover_us')}
                </p>
              </div>
              <Button variant="outline">{t('std:learn_more')}</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-black">{t('tours_header')}</h2>
            <p className="text-xl text-center text-gray-500 mb-12">
              {t('tours_desc')}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {tours.map((tour, index) => (
                <TourCard
                  key={index}
                  title={t(`${tour}_title`)}
                  description={t(`${tour}_desc`)}
                  info={t(`${tour}_info`)}
                  timeEstimation={t(`${tour}_time`)}
                />
              ))}

              {/* Worker Story  */}



            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Enhance Your Visit</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our self-guided tours are designed to give you the freedom to explore at your own pace.
                  Pick up a map at the information desk to start your journey.
                </p>
              </div>
              <Button variant="outline" size="lg">View Museum Map</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 City Museum. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}