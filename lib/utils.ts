import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

//for creating or changing dynamic tailwind clases without conflicting styles
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
