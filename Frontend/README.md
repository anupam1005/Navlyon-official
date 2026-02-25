# Navlyon Official Website

## Project Name

Navlyon - Technology Solutions for Modern Business

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI based)
- **Icons**: Lucide React 0.462.0
- **Routing**: React Router DOM 6.30.1
- **State Management**: React Query (TanStack Query) 5.83.0
- **Forms**: React Hook Form 7.61.1 with Zod validation
- **Development**: ESLint, TypeScript ESLint

## Installation

Prerequisites:
- Node.js (v18 or higher)
- npm (comes with Node.js)

Setup steps:

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd Navlyon-official/Frontend

# Install dependencies
npm install
```

## Build

```bash
# Development build
npm run build:dev

# Production build
npm run build
```

## Development

```bash
# Start development server
npm run dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Deployment

This is a frontend-only React SPA. To deploy:

1. Run `npm run build` to create production assets
2. Deploy the `dist` folder to your hosting service
3. Ensure the hosting service supports client-side routing

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
└── assets/        # Static assets
```

## Environment Variables

Create a `.env` file in the root directory for environment-specific configuration.

## Contributing

1. Follow the existing code style
2. Use TypeScript for type safety
3. Write meaningful commit messages
4. Test changes before submitting
