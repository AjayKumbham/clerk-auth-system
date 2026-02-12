# Setup and Configuration Guide

This document provides detailed instructions for setting up the production-grade authentication system locally and deploying it to production.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)
- A [Clerk](https://clerk.com/) account

## Initial Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy the template environment file and replace the placeholder with your actual Clerk Publishable Key:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your key:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

To obtain your Publishable Key:
1. Log in to your [Clerk Dashboard](https://dashboard.clerk.com/).
2. Select your application.
3. Navigate to **API Keys** in the sidebar.
4. Copy the **Publishable Key**.

## Development Workflow

### Running Locally
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Code Quality
Run ESLint to ensure code consistency and best practices:
```bash
npm run lint
```

## Production Deployment

### Building for Production
Create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### Previewing the Build
To test the production build locally before deployment:
```bash
npm run preview
```

### Deployment Best Practices
1. **Environment Variables**: Ensure `VITE_CLERK_PUBLISHABLE_KEY` is configured in your CI/CD pipeline or deployment platform (e.g., Vercel, Netlify).
2. **Security**: Never commit `.env` files to version control.
3. **Clerk Production Keys**: Use your production API keys in the production environment.

## Advanced Configuration

### Clerk Provider Settings
The `ClerkProvider` is initialized in `src/main.tsx`. You can customize it by passing additional props:

```tsx
<ClerkProvider 
  publishableKey={PUBLISHABLE_KEY} 
  afterSignOutUrl="/"
  appearance={{
    // Add custom branding here
  }}
>
  <App />
</ClerkProvider>
```

For more details on customization, refer to the [Clerk Documentation](https://clerk.com/docs).
