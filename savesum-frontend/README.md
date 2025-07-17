# SaveSum Landing Page

A modern, responsive landing page for SaveSum built with Next.js, TypeScript, and shadcn/ui.

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **shadcn/ui** components
- 📱 **Responsive design**
- ⚡ **Fast performance**
- 🎯 **SEO optimized**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your NoCodeAPI endpoint:
   ```
   NOCODEAPI_ENDPOINT=https://api.nocodeapi.com/v1/your-workspace/your-api-name?f=addRow&token=your-token
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

- `NOCODEAPI_ENDPOINT` - Your NoCodeAPI endpoint for Google Sheets integration

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
app/
├── components/     # Landing page components
├── lib/           # Utility functions
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Helper utilities
├── globals.css    # Global styles
├── layout.tsx     # Root layout
├── page.tsx       # Home page
└── not-found.tsx  # 404 page
```

## Technologies Used

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Headless UI primitives

## Deployment

This project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

### Production Setup

1. Set up environment variables in your hosting platform:
   - `NOCODEAPI_ENDPOINT` - Your NoCodeAPI endpoint

2. Build and deploy:
```bash
npm run build
```

### Security Notes

- ✅ API keys are stored server-side in environment variables
- ✅ Form submissions are handled through secure API routes
- ✅ Client-side code doesn't expose sensitive information
- ✅ Email validation is performed both client and server-side
