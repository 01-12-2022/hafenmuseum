import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const jgborders = {
  redBorder: {
    borderColor: 'red', borderWidth: 3
  },
  blueBorder: {
    borderColor: 'blue', borderWidth: 3
  }
} as const