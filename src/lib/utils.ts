import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppLink(message: string = "Hi! I'm interested in your sculpture services.") {
  const phone = "919876543210"; // Replace with actual number
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getPhoneLink() {
  return "tel:+919876543210"; // Replace with actual number
}
