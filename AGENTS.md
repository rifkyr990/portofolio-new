# Agent.md - Build Modern Portfolio Website

## Mission

Create a modern, premium, high-performance portfolio website using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS 4**.

The website must be fully responsive, SEO-friendly, visually stunning, and suitable for a professional software engineer, freelancer, UI/UX designer, or tech consultant.

---

# Tech Stack

## Core

* Next.js 15+
* React 19+
* TypeScript
* Tailwind CSS 4
* App Router

## Recommended Libraries

* Framer Motion (animations)
* Lucide React (icons)
* Shadcn/UI (components)
* next-themes (theme support)
* React Hook Form
* Zod
* clsx
* tailwind-merge

---

# Design System

## Color Palette (Mandatory)

Primary Dark

```css
#121358
```

Secondary

```css
#232F72
```

Support Blue

```css
#2F578A
```

Accent

```css
#36ADA3
```

Text Primary

```css
#FFFFFF
```

Text Secondary

```css
rgba(255,255,255,0.7)
```

### Color Usage

* Main Background → #121358
* Cards → #232F72
* Hover States → #2F578A
* CTA & Highlights → #36ADA3
* Borders → rgba(255,255,255,0.08)

---

# Visual Style

Build a design inspired by:

* Vercel
* Linear
* Stripe
* Framer
* Raycast
* Apple

Characteristics:

* Modern
* Premium
* Clean
* Elegant
* Futuristic
* Minimalist
* Professional

Avoid:

* Generic templates
* Bootstrap appearance
* Excessive gradients
* Overly colorful UI

---

# Project Structure

```txt
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── timeline/
│   ├── testimonials/
│   ├── contact/
│   └── footer/
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── lib/
├── hooks/
├── types/
└── assets/
```

---

# Required Sections

## 1. Navbar

Features:

* Sticky
* Blur backdrop
* Active section indicator
* Mobile menu
* Smooth scrolling

Links:

* Home
* About
* Skills
* Projects
* Experience
* Contact

---

## 2. Hero Section

Include:

* Professional profile image
* Name
* Professional title
* Short bio
* CTA buttons

Buttons:

* View Projects
* Download Resume

Hero Features:

* Animated gradient background
* Floating blur effects
* Entrance animations
* Glassmorphism cards

---

## 3. About Section

Content:

* Personal introduction
* Career summary
* Strengths
* Professional goals

Layout:

* Responsive 2-column layout
* Statistic cards

Example Stats:

* Years Experience
* Completed Projects
* Happy Clients
* Technologies

---

## 4. Skills Section

Display:

Frontend:

* React
* Next.js
* TypeScript
* Tailwind

Backend:

* Node.js
* Express
* NestJS

Database:

* PostgreSQL
* MySQL
* MongoDB

DevOps:

* Docker
* AWS
* CI/CD

Design:

* Interactive cards
* Animated progress bars
* Hover effects

---

## 5. Featured Projects

Create modern project showcase.

Each card contains:

* Screenshot
* Project title
* Description
* Technology stack
* GitHub link
* Live Demo link

Features:

* Category filter
* Animated reveal
* Hover elevation
* Responsive masonry/grid layout

---

## 6. Experience Timeline

Vertical animated timeline.

Include:

* Company
* Position
* Duration
* Responsibilities
* Achievements

Animation:

* Reveal on scroll
* Timeline progress effect

---

## 7. Testimonials

Create testimonial slider.

Each card:

* Avatar
* Name
* Position
* Company
* Testimonial text

Use glassmorphism style.

---

## 8. Contact Section

Include:

* Contact form
* Email
* GitHub
* LinkedIn
* WhatsApp

Validation:

* React Hook Form
* Zod

Design:

* Modern card
* Animated focus states

---

## 9. Footer

Include:

* Logo
* Navigation
* Social links
* Copyright

---

# Animations

Use Framer Motion.

Implement:

* Fade In
* Slide Up
* Scale Hover
* Reveal On Scroll
* Smooth Page Transition
* Floating Elements

Keep animations subtle and premium.

Duration:

```txt
0.3s - 0.8s
```

---

# SEO Requirements

Use:

* Metadata API
* OpenGraph
* Twitter Cards
* robots.ts
* sitemap.ts

Add:

* Proper title
* Description
* Keywords

Performance target:

```txt
Lighthouse > 95
```

---

# Accessibility

Implement:

* Semantic HTML
* Keyboard navigation
* Focus states
* Proper ARIA labels
* Accessible color contrast

---

# Responsive Design

Mobile First

Breakpoints:

```txt
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Must look premium on:

* Mobile
* Tablet
* Laptop
* Desktop
* Ultrawide

---

# Additional Premium Features

Implement:

* Animated background blobs
* Scroll progress bar
* Back-to-top button
* Active navigation tracking
* Custom cursor (desktop)
* Smooth scrolling
* Section reveal animations

Optional:

* Dark/Light theme toggle
* Command palette
* Blog section

---

# Code Quality

Requirements:

* Type-safe
* Reusable components
* Clean architecture
* No duplicated code
* Proper TypeScript typing
* Production-ready

Follow:

* SOLID principles
* Component composition pattern
* Modern React best practices

Generate complete source code ready to run using:

```bash
npm install
npm run dev
```

The final website should feel comparable to portfolios built by top-tier developers and agencies in 2026.
