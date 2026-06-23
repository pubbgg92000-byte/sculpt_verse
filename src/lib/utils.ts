import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppLink(message: string = "Hi! I'm interested in your sculpture services.") {
  const phone = "919381699807";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getPhoneLink() {
  return "tel:+919381699807";
}
