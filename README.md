# Euphoria by Sujimoto

[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/your-repo/ci.yml?branch=main&style=flat-square)](https://github.com/your-username/your-repo/actions)
[![License](https://img.shields.io/github/license/your-username/your-repo?style=flat-square)](./LICENSE)

> A stunning web experience for the "Euphoria" project by Sujimoto.

This repository contains the source code for the official website of Euphoria by Sujimoto, a premier luxury real estate project. Built with modern web technologies, it offers a seamless, performant, and visually rich user experience.

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Build & Deployment](#-build--deployment)
- [Linting & Formatting](#-linting--formatting)
- [Contributing](#-contributing)
- [License](#-license)

## Features

*   **Interactive 3D Tours:** Explore properties with immersive virtual tours.
*   **Responsive Design:** Flawless experience across all devices, from mobile to desktop.
*   **High-Performance:** Built with Next.js for fast page loads and a smooth user experience.
*   **Dynamic Content:** Easily manageable content for property listings, news, and updates.
*   **SEO Optimized:** Structured for high visibility on search engines.

*(Add or remove features specific to your project)*

## Tech Stack

This project is built with a modern, robust, and scalable tech stack:

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Styling:** [PostCSS](https://postcss.org/) with [PostCSS Preset Env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18.x or newer recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Homewin-Nigeria-Ltd/euphoria-by-sujimoto
    cd euphoria-by-sujimoto
    ```

2.  **Install dependencies:**

    Using `pnpm`, which is the package manager used for this project:

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project by copying the example file:

    ```bash
    cp .env.example .env.local
    ```

    Then, fill in the required values in `.env.local`. See the Environment Variables section for more details.

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

    Open http://localhost:3000 in your browser to see the result.

## 📦 Build & Deployment

To create a production-ready build of the application, run the following command:

```bash
pnpm build
```

This will generate an optimized build in the `.next` directory. You can then start the production server with:

```bash
pnpm start
```

## 🧹 Linting & Formatting

This project uses ESLint for code quality and consistency. To run the linter, use:

```bash
pnpm lint
```

To automatically fix linting issues:

```bash
pnpm lint:fix
```
