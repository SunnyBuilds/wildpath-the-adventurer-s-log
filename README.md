# Wildpath Blog

A modern, high-performance blog platform built with React, Hono, and Cloudflare Workers. Wildpath Blog leverages the power of the edge to deliver lightning-fast content delivery and a seamless editing experience.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/SunnyBuilds/wildpath-the-adventurer-s-log)

## 🚀 Overview

Wildpath Blog is designed for developers and creators who value speed, simplicity, and scalability. By utilizing Cloudflare's global network, your blog is served from the data center closest to your readers, ensuring minimal latency and maximum availability.

## ✨ Key Features

- **Edge-First Architecture**: Built on Cloudflare Workers for near-instant response times.
- **Modern Frontend**: Developed with React 18, Vite, and Tailwind CSS for a crisp, responsive UI.
- **Robust Backend**: Powered by Hono, a small, fast, and ultra-lightweight web framework.
- **Type-Safe Development**: Full TypeScript support across the entire stack.
- **Shadcn UI**: Beautiful, accessible components pre-integrated for a professional look.
- **Optimized Assets**: Intelligent asset handling via Cloudflare's asset fetcher.
- **Workflow Ready**: Designed to integrate with Cloudflare Workflows for background tasks and automation.

## 🛠️ Technology Stack

- **Runtime**: Cloudflare Workers
- **Backend Framework**: [Hono](https://hono.dev/)
- **Frontend Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) & [Immer](https://immerjs.github.io/immer/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Bun](https://bun.sh/) (Required)
- [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wildpath-blog
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Initialize the environment:
   ```bash
   bun run prepare
   ```

### Local Development

Start the development server (runs both the frontend and the worker):
```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

## 📁 Project Structure

- `src/`: React frontend application.
  - `components/`: Reusable UI components and layout logic.
  - `hooks/`: Custom React hooks for theme and device detection.
  - `pages/`: Main page components and routing.
  - `lib/`: Utility functions and core logic.
- `worker/`: Cloudflare Worker backend.
  - `index.ts`: Main entry point for the worker.
  - `userRoutes.ts`: Define your API endpoints here.
  - `core-utils.ts`: Internal worker utilities.
- `shared/`: (Optional) Logic shared between frontend and backend.
- `wrangler.jsonc`: Cloudflare configuration file.

## 🚀 Deployment

Deploying your blog to Cloudflare is straightforward.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/SunnyBuilds/wildpath-the-adventurer-s-log)

### Manual Deployment

1. Build the frontend and deploy the worker:
   ```bash
   bun run deploy
   ```

This command runs `vite build` to generate static assets and then uses `wrangler` to upload your code to the Cloudflare network.

### CI/CD

For automated deployments, you can connect your repository to Cloudflare Pages or use GitHub Actions with the [Wrangler Action](https://github.com/cloudflare/wrangler-action).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Powered by Cloudflare Workers and the modern web ecosystem.*