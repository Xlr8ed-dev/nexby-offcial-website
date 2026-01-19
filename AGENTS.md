# Master Instructions for AI Agents

This document serves as the single source of truth for all AI agents working on this codebase. Strict adherence to these guidelines is mandatory.

## 1. Core Directives (CRITICAL)

### ⛔️ NO BACKEND DEVELOPMENT
- **Strict Frontend-Only Policy**: This project is a **Static / Client-Side Only** website.
- **Do NOT** propose, create, or maintain backend services (Node.js, Express, Python, Databases, Docker).
- **Existing Backend Code**: If a `backend/` folder exists, treat it as legacy or reference only unless explicitly instructed otherwise. Do not add to it.
- **Data Handling**: Use mock data, local storage, or strictly client-side APIs for all functionality. Forms should log to console or simulate submission unless a third-party serverless integration (like Formspree or EmailJS) is requested.

## 2. Technology Stack

Agents must use the following established stack. Do not introduce new libraries without explicit user approval.

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
  - Use modern utilties.
  - Prioritize `flex` and `grid` layouts.
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
  - **Requirement**: Components must feel "alive". Use `AnimatePresence`, `motion.div`, and hover effects liberally but tastefully.
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 3. Design & Aesthetic Guidelines

**"If it looks basic, it is a failure."**

- **Premium Feel**: The UI must essentially "wow" the user. Use glassmorphism, subtle gradients, and deep, rich colors.
- **Typography**: formatting must be impeccable. Use the configured font family (e.g., Inter, Outfit) with varying weights to create hierarchy.
- **Interactivity**: 
  - Every button must have a hover state.
  - Page transitions should be smooth (use Framer Motion).
  - Scroll animations (reveal on scroll) are expected for landing page sections.
- **Visuals**:
  - Avoid placeholders. Use `generate_image` or high-quality stock-style CSS patterns.
  - Use high contrast dark modes where appropriate for a "tech/AI" vibe.

## 4. Coding Standards

- **File Structure**:
  - `src/components`: Reusable UI components.
  - `src/pages`: Full page views mapped to routes.
  - `src/layouts`: Layout wrappers (Navbar, Footer, etc.).
- **Code Quality**:
  - Functional Components with Hooks only.
  - Strong TypeScript typing (avoid `any`).
  - Clean, semantic HTML5.
- **Workflow**:
  - Always verify existing files before creating new ones to avoid duplication.
  - Check `package.json` for dependencies before importing them.

## 5. Agent Behavior

- **Be Proactive**: If a user asks for a page, don't just build the skeleton. Build the **final, polished version** with animations, SEO tags, and responsive design immediately.
- **Verification**: Always verify the build (`npm run build`) after significant changes to ensure type safety.

## 6. Landing Page Creation Protocol

When requested to create a landing page, follow these strict guidelines:

- **Independent Structure**: 
  - Each landing page must be a standalone entity designed to convert.
  - URL Pattern: `www.nexby.ai/lp/xxx` (where `xxx` is the campaign/page name).
- **SEO & Searchability**:
  - **Goal**: Drive both organic and inorganic (paid) traffic.
  - **AEO (Answer Engine Optimization)**: Structure content to be easily readable by AI engines (ChatGPT, Gemini, Perplexity). Use clear headers, schema markup, and question-based content.
  - Ensure all SEO tags (Title, Description, OpenGraph) are perfectly tuned to the specific keywords of the campaign.
- **Ad Campaign Optimization**:
  - **Quality Score**: Target a **10/10 Google Ads Landing Page Quality Score**.
  - Content must highly resonate with the specific ad copy and keywords of the campaign.
  - Load speed must be blazing fast (Lighthouse score 95+).
- **Content Strategy**:
  - Content is not generic; it must correspond to the specific "thought process" and intent of the campaign.
  - Use strong headers, Benefit-driven copy, and clear CTAs.
