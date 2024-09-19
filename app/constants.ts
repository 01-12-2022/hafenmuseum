import { TFunction } from "i18next";

export const tours = ['worker', 'sailor'];

export type TranslatorType = TFunction<"translation", undefined>;

export type PageProps<T = void> = {
    params: T & {
        locale: any
    },
    searchParams?: {
        route: string
    }
}

export const HAFENMUSEUM_URL = "https://www.shmh.de/deutsches-hafenmuseum/deutsches-hafenmuseum-besuchen/"