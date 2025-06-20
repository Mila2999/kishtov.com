# Kishtov.com

A personal website and portfolio built with Next.js, showcasing services and information for Andrey Kishtov.

## Project Overview

Kishtov.com is a modern web application that serves as a personal website and portfolio. The site includes:

- Personal profile and information
- Services offered
- Billing and payment integration with PayPal
- Image gallery
- Responsive design using Material UI and Tailwind CSS

## Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Frontend**: React 18
- **Styling**: 
  - [Material UI](https://mui.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - Emotion for styled components
- **Payment Processing**: PayPal React SDK
- **Icons**: React Icons
- **Type Safety**: TypeScript

## Project Structure

The project follows the Next.js App Router structure:

- `/src/app/` - Main application code
  - `/andrey/` - Personal profile and services pages
  - `/card/` - Card component for displaying information
  - `/image-list/` - Image gallery component
  - `/mila/` - Section dedicated to Mila
- `/public/` - Static assets
- `/conf/` - Configuration files

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/andreykishtov/kishtov.com.git
cd kishtov.com

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## Deployment

The site is configured for easy deployment on [Vercel](https://vercel.com/), the platform created by the makers of Next.js.

## License

This project is privately owned and maintained by Andrey Kishtov.

## Contact

For inquiries, please reach out through the contact form on the website.