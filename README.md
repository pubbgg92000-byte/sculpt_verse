# SculptVerse

SculptVerse is a premium portfolio and agency website for custom, handcrafted sculptures based in Hyderabad. The platform showcases a variety of made-to-order sculptures, highlighting the detailed process from consultation and design to concrete sculpting and final installation.

## 🌟 Overview

The website is designed to provide an immersive and visually stunning experience for potential clients looking for custom sculptures for their spaces. It features a modern design aesthetic with smooth animations, interactive 3D elements, and a responsive layout that works beautifully across all devices.

## ✨ Key Features

- **Immersive 3D Hero Section**: Utilizes Three.js and React Three Fiber (`HeroScene.tsx`) for interactive background elements that react to user interaction.
- **Dynamic Scroll Animations**: GSAP and ScrollTrigger are used extensively throughout the site (e.g., in `ProcessSection`, `PortfolioShowcase`, `Testimonials`) to provide a premium feel with scroll-based reveals and timeline animations.
- **Comprehensive Process Showcase**: Clearly outlines the 6-step creation process (Consultation, Design, Steel Framework, Concrete Sculpting, Finishing, Installation).
- **Portfolio & Categories**: Showcases past work and different sculpture categories to help users explore possibilities, powered by centralized data (`src/data/projects.ts`).
- **Pricing & Services**: Details the different service tiers and pricing packages available.
- **Contact Integration**: Integrated with Resend for seamless communication with potential clients via a custom API route.
- **SEO Optimized**: Includes dynamically generated `sitemap.ts` and `robots.ts` for improved search engine visibility.

## 🛠️ Tech Stack

This project is built with a modern, high-performance frontend stack:

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & [@base-ui/react](https://base-ui.com/)
- **Animations**: [GSAP 3.15](https://gsap.com/) & `tw-animate-css`
- **3D Graphics**: [Three.js](https://threejs.org/) via [@react-three/fiber](https://r3f.docs.pmnd.rs/) & `@react-three/drei`
- **Email/Contact**: [Resend](https://resend.com/)

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── about/            # About Us page
│   ├── api/              # API routes (e.g., Resend contact form)
│   ├── contact/          # Contact page
│   ├── portfolio/        # Portfolio showcase page
│   ├── pricing/          # Pricing and packages page
│   ├── process/          # Our Process page
│   ├── services/         # Services offered page
│   ├── robots.ts         # Search engine crawlers instruction file
│   └── sitemap.ts        # Sitemap configuration for SEO
├── components/           # React components
│   ├── layout/           # Shared layout components (Header, Footer, etc.)
│   ├── sections/         # Major page sections (Hero, ProcessSection, etc.)
│   ├── three/            # 3D/WebGL components (HeroScene)
│   └── ui/               # Reusable UI components (shadcn/ui based)
├── data/                 # Static data used across the site
│   ├── pricing.ts        # Pricing package details
│   ├── projects.ts       # Portfolio projects and categories
│   ├── services.ts       # Service descriptions
│   └── testimonials.ts   # Client testimonials
└── lib/                  # Utility functions and helpers
```

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Set up your environment variables by copying `.env.example` to `.env.local` and adding your Resend API key (if needed for the contact form to work):

```bash
cp .env.example .env.local
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
The repository includes a `vercel.json` configuration file for seamless deployment.

## 📝 Scripts

- `npm run dev` - Starts the Next.js development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts a Next.js production server
- `npm run lint` - Runs ESLint to check for code issues
