# Derrick Kibiwot — Portfolio

A professional single-page portfolio website focused on **Data Protection & Privacy Compliance**. Built with React 18, Vite, and Framer Motion, featuring a Navy Blue and Gold design theme.

---

## Live Demo

> Deploy via GitHub Pages or Vercel for a public URL.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI component framework |
| Vite | Build tool and dev server |
| Framer Motion | Animations and transitions |
| Lucide React | Icon library |
| Custom CSS | Styling (Navy Blue & Gold theme) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/0905Decco/portfolio-infosec.git

# Navigate into the project directory
cd portfolio-infosec

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Alternative: Python Server (No Node.js required)

If you prefer not to use Node.js, you can run the site directly using the included Python server:

```bash
# Windows (double-click)
start.bat

# Or manually via terminal
python server.py
```

Then open the address shown in your terminal (usually `http://localhost:8000`).

---

## Project Structure

```
portfolio-infosec/
├── src/
│   ├── App.jsx         # Main React application and all components
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── assets/             # Static assets (images, CV, etc.)
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # Project metadata and dependencies
├── server.py           # Lightweight Python HTTP server (alternative)
├── start.bat           # Windows launcher for Python server
└── legacy_backup/      # Previous portfolio version
```

---

## Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder using [gh-pages](https://www.npmjs.com/package/gh-pages) or any static hosting provider.

### Push Changes to GitHub

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

---

## License

This project is for personal portfolio use. All rights reserved.
