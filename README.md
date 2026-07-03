# SculptVerse

SculptVerse is a premium portfolio and agency website for custom, handcrafted sculptures based in Hyderabad. The platform showcases a variety of made-to-order sculptures, highlighting the detailed process from consultation and design to concrete sculpting and final installation.

## Overview

The website is designed to provide an immersive and visually stunning experience for potential clients looking for custom sculptures for their spaces. It features a modern design aesthetic with smooth animations and interactive 3D elements.

## Features

- **Immersive Hero Section**: Utilizes Three.js for interactive background elements that react to cursor movement.
- **Dynamic Animations**: GSAP and ScrollTrigger are used extensively throughout the site to provide a premium feel with scroll-based reveals and timeline animations.
- **Comprehensive Process Showcase**: Clearly outlines the 6-step creation process (Consultation, Design, Steel Framework, Concrete Sculpting, Finishing, Installation).
- **Portfolio & Categories**: Showcases past work and different sculpture categories to help users explore possibilities.
- **Contact Integration**: Integrated with Resend for seamless communication with potential clients.

## Tech Stack

This project is built with a modern frontend stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & Base UI
- **Animations**: [GSAP](https://gsap.com/) & Framer Motion concepts
- **3D Graphics**: [Three.js](https://threejs.org/) via [@react-three/fiber](https://r3f.docs.pmnd.rs/) & `@react-three/drei`
- **Email/Contact**: [Resend](https://resend.com/)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
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

## Project Structure

- `src/app/` - Next.js App Router pages and layouts.
- `src/components/sections/` - Major page sections (Hero, ProcessSection, PortfolioShowcase, etc.).
- `src/components/three/` - Three.js related components like the `HeroScene`.
- `src/components/ui/` - Reusable UI components.
- `src/lib/` - Utility functions and helpers.
