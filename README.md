 [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/minarizk5/rubiksolvernext.js)

RubikSolverNext.js
RubikSolverNext.js is a modern web application that provides an interactive 3D Rubik's Cube solver, combining real-time 3D visualization with a rich user interface. Built with Next.js, React, and Three.js, it offers a seamless experience across web and mobile platforms through Expo, with accessibility and performance at its core.
Features

3D Cube Visualization: Real-time rendering of Rubik's Cube states and animations using Three.js and React-Three-Fiber.
Interactive Solving Interface: Intuitive controls for cube manipulation and algorithm execution.
Cross-Platform Support: Deployable on web and mobile (iOS/Android) via Expo.
Accessible UI: Built with 30+ Radix UI primitives for WAI-ARIA-compliant components.
Modern Styling: Tailwind CSS with utility-first styling and dark/light mode theming.
Type-Safe Forms: Powered by react-hook-form and zod for robust form validation.

Getting Started
Prerequisites

Node.js: Version 18.17 or later
Package Manager: npm, yarn, pnpm, or bun (latest stable)
Git: Latest stable version

Installation

Clone the repository:
git clone https://github.com/minarizk5/rubiksolvernext.js.git
cd rubiksolvernext.js


Install dependencies:
npm install


Start the development server:
npm run dev


Open http://localhost:3000 in your browser to view the application.


Available Scripts



Script
Command
Purpose



dev
next dev
Starts development server with hot reload


build
next build
Creates optimized production build


start
next start
Serves production build locally


lint
next lint
Runs ESLint for code quality checks


Technology Stack



Category
Technologies
Purpose



Framework
Next.js 15.2.4, React 19, TypeScript
App routing, component system, type safety


3D Graphics
Three.js, @react-three/fiber, @react-three/drei
Real-time 3D rendering and animations


UI Components
Radix UI (26+ primitives), Lucide React
Accessible, customizable UI elements


Styling
Tailwind CSS 3.4.17, class-variance-authority, clsx
Utility-first CSS and variant management


Cross-Platform
Expo, expo-gl, react-native
Mobile deployment and OpenGL rendering


Forms & Data
react-hook-form 7.54.1, zod 3.24.1, recharts
Form handling, validation, and visualization


Project Structure
rubiksolvernext.js/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS and Tailwind processing

Key Configuration Files

package.json: Manages 60+ dependencies and build scripts.
next.config.js: Configures Next.js App Router and optimizations.
tailwind.config.js: Customizes Tailwind CSS utilities.
tsconfig.json: Enforces strict TypeScript type checking.
postcss.config.js: Integrates Tailwind with PostCSS.

Architecture Overview
The application follows a layered architecture:

Presentation Layer: Radix UI components styled with Tailwind CSS.
Business Logic: Custom Rubik's Cube solver algorithms.
3D Rendering: Three.js with React-Three-Fiber for cube visualization.
Platform Layer: Expo for cross-platform web and mobile support.

Data Flow

User Input: Handled via Radix UI and react-hook-form.
Cube State: Processed by solver algorithms.
Rendering: Updated via Three.js and animated with React-Three-Drei.
Cross-Platform: Managed by Expo-GL for mobile and WebGL for web.

Development Workflow

Run Development Server:
npm run dev

Access at http://localhost:3000.

Edit Files: Modify app/page.tsx for instant hot reload.

Linting: Run npm run lint to ensure code quality.

Build for Production:
npm run build
npm run start



Troubleshooting



Issue
Solution



Node.js version error
Upgrade to Node.js 18.17+


ESLint errors
Run NEXT_DISABLE_ESLINT=1 npm run build or fix errors


Port conflict
Use npm run dev -- --port 3001


Dependency issues
Delete node_modules and run npm install


Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Learn More

Architecture Overview
Technology Stack
3D Graphics System
UI Component System

