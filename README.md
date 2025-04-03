# SM Solutions Website

A modern, responsive website for SM Solutions, built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, minimalist design
- Responsive layout
- Smooth animations with Framer Motion
- Contact form
- Mobile-friendly interface

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smsolutions.io.git
cd smsolutions.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

This project is optimized for deployment on Vercel or Netlify. Simply connect your repository to either platform and it will automatically build and deploy your site.

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy your site

### Netlify Deployment

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`
5. Deploy!

## Customization

- Edit `src/App.tsx` to modify the content and layout
- Update styles in `src/index.css`
- Modify the color scheme in `tailwind.config.js`

## License

MIT
