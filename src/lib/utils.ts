import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function domainURL(pathname: string) {
  return new URL(pathname, process.env.NEXT_PUBLIC_URL).toString();
}
