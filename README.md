<div align="center">

# 🏡 Estatein — Real Estate Platform

**A modern real estate marketing & listings site built with React 19 and TypeScript**

Featuring a property catalog with rich search & filtering, a full set of informational pages, and a mock authentication flow.

[**🔗 Live Demo**](https://estatein-project.ellahe-khawari.workers.dev)

</div>

---

## About

Estatein is a front-end showcase project for a real estate business. It brings together a home page, a properties catalog with detailed search and filtering, dedicated pages for services, contact, and about, a mock login/register flow, and proper handling of loading and not-found states — everything you'd expect from a real, production-style marketing site, built entirely on the front end.

There is **no real backend** — all data (properties, services, users) is mocked, so the project can be cloned and explored instantly with no setup beyond installing dependencies.

## ✨ Features

- 🏠 **Home page** — landing/marketing page introducing the platform
- 🔐 **Authentication** — mock login and register flow
- 🏘️ **Properties page** — the core of the app, with:
    - Search functionality
    - Filtering by multiple property specifications (type, price range, and other criteria)
    - A dedicated details view per property
- 🛠️ **Services page** — presents the services offered by the platform
- ✉️ **Contact page** — includes a contact form for inquiries
- ℹ️ **About page** — information about the platform/company
- 🛒 Purchase / inquiry flows integrated into relevant sections and pages, depending on context
- ⏳ **Loading states** — dedicated loading UI while content is prepared
- 🚫 **Not Found (404) page** — custom page for unmatched routes
- 📱💻 **Responsive design** — optimized for **mobile and laptop/desktop** screen sizes

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Core | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router v7 |
| State management | Zustand |
| Data fetching / caching | TanStack React Query |
| Forms | TanStack Form |
| UI Components | MUI (`@mui/material`), Radix UI primitives, `@mui/x-data-grid` |
| Styling utilities | `class-variance-authority`, `clsx`, `tailwind-merge` |
| Theming | `next-themes` |
| Notifications | Sonner, React Toastify |
| Carousel | `embla-carousel-react` |
| Icons | Lucide React |
| Linting | ESLint + `typescript-eslint` |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

Lint the project:

```bash
npm run lint
```

## 🔑 Authentication

There is no real backend. Login and registration are fully mocked on the client side, so you can explore the authenticated parts of the app by simply registering (or logging in) with any credentials — no real account or server is required.

## 🏘️ Properties, Search & Filtering

The properties page is the most developed part of the app: users can search for properties and narrow results down using multiple specification-based filters (such as property type, price, and other criteria), making it easy to find matching listings within the mock dataset.

## 📱 Responsive Design

The interface is fully responsive across **mobile phones and laptop/desktop** screen sizes.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
