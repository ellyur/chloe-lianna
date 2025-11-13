# Debut Invitation Website

## Overview
This project is a full-stack JavaScript application for a debut invitation website for Lianna Chloe, celebrating her 18th birthday debut on December 13, 2025. It features a responsive, interactive, and modern design with multiple sections including hero, invitation reveal, countdown, story, venue, RSVP, entourage (18 things), and more. The website aims to provide an elegant and engaging experience for debut guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an elegant style, using Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, a background music feature that respects user interaction for playback, and a special "18 Things" entourage section showcasing traditional Filipino debut elements. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2025-11-13 (Latest)**: Updated RSVP and Attire Guide sections:
  - **FAQ Section**: Completely replaced with 6 RSVP-focused questions covering when to RSVP (deadline November 30, 2025), why formal RSVP is needed, what to do if plans change, plus one policy, and parking information
  - **RSVP Section**: Updated deadline from December 15 to November 30, 2025; added explanation of what RSVP means (French phrase "Répondez s'il vous plaît")
  - **Dress Code Section**: Simplified from "Special Guests" and "Guests" categories to unified "For Women" and "For Men" guidelines; added general dress code description about semi-formal/formal attire; replaced multiple images with single unified attire image showing both men and women in formal attire; added color palette showing White (#FFFFFF), Cream (#FFFDD0), and Snow White (#FFFAFA) with color swatches and hex codes; updated men's attire to specify white/cream/snow white long sleeve or short sleeve polo with black slacks or cream slacks

- **2025-11-13**: Redesigned Entourage section to showcase "18 Things" tradition:
  - Replaced traditional wedding entourage listing with Filipino debut "18 Things" showcase
  - Implemented vertical stacked layout with 4 categories:
    - 18 Lanterns: Chloe's photo on top, decorative name list card below
    - 18 Roses: Chloe's photo on top, decorative name list card below
    - 18 Toast: Chloe's photo on top, decorative name list card below
    - 18 Treasures: Chloe's photo on top, decorative name list card below
  - Added 8 new images imported via @assets alias (4 Chloe photos + 4 ornate green/gold list cards)
  - Created responsive 2-column grid layout (1 column on mobile, 2 on tablet+)
  - Each category shows Chloe's portrait (4:3 aspect) stacked above the decorative list card (9:16 aspect)
  - List cards use object-contain to display full ornate borders without cropping
  - Added lazy loading to all images for performance optimization
  - Maintained elegant design with rounded corners and centered alignment

