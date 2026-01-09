# Next.js E-Commerce Project

This is a **Next.js** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It is a modern e-commerce-like project with features like product listing, search, filtering, and a persistent cart.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Tech Choices](#tech-choices)
3. [Bonus Features](#bonus-features)
4. [Learn More](#learn-more)

---

## Getting Started

To run this project locally, first clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```

## Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Tech Choices

State Management: Zustand

Styling: Tailwind CSS

## Bonus Features

Server-Side Rendering (SSR) or Static Site Generation (SSG):
Product listing pages are pre-rendered for better SEO and faster load times.

Debounced Search:
The search input delays updates while typing to prevent excessive renders and API calls.

URL Parameters for Filters & Search:
The current filters and search terms are saved in the URL, enabling link sharing and page refresh persistence.

Persistent Cart:
Cart state is stored in localStorage, so users keep their items even after closing or refreshing the browser.
