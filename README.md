# Style Consultation Landing Page

A modern landing page for a style consultation service built with [Next.js](https://nextjs.org). This application allows clients to book consultations for apparel and clothing recommendations, choose service packages, and schedule appointments through Calendly integration.

## Features

- Responsive, modern UI built with Next.js and Tailwind CSS
- Service descriptions and package options
- Calendly integration for appointment scheduling
- Mobile-friendly design

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository

```bash
git clone <repository-url>
cd style-consultation-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Configure Calendly

Update the Calendly URL in the `src/app/page.tsx` file with your own Calendly account URL:

```jsx
<div 
  className="calendly-inline-widget" 
  data-url="https://calendly.com/your-calendly-username/style-consultation"
  style={{ minWidth: '320px', height: '700px' }}
></div>
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- **Content**: Modify the text in `src/app/page.tsx` to match your business offerings
- **Styling**: Adjust the Tailwind CSS classes or modify the global styles in `src/app/globals.css`
- **Images**: Replace the placeholder images in the `public` directory with your own
- **Packages**: Update the pricing and features in the packages section

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
