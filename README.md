# Traveling Journal

A small React app that displays a personal travel journal: a list of entries, each with a photo, place name, country, a Google Maps link, travel dates, and a short description. Built to practice passing data to components with props.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) with `@vitejs/plugin-react`
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting (React and hooks rules)
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## Getting Started

### Prerequisites

- Node.js (a current LTS release is recommended)
- npm

### Installation

```bash
git clone https://github.com/msn-del/traveling-journal
cd traveling-journal
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the local URL Vite prints in the terminal. Note that the app is configured with a base path (see [Deployment](#deployment)), so the URL will include `/traveling-journal/`.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR       |
| `npm run build`   | Create a production build in `dist/`     |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Lint the project with Oxlint             |

## Project Structure

```
.
├── index.html          # HTML entry point, loads src/index.jsx
├── data.js             # Journal entries (default export: array of objects)
├── vite.config.js      # Vite config (React plugin + base path)
├── .oxlintrc.json      # Oxlint configuration
├── package.json
└── src/
    ├── index.jsx       # React entry point
    └── style.css       # Global styles
```

## Data Format

Journal entries live in `data.js` as an array of objects. To add a new entry, append an object with this shape:

```js
{
  id: 5,                                   // unique number
  img: {
    src: "https://example.com/photo.jpg",  // image URL
    alt: "Short image description"
  },
  title: "Place name",
  country: "Country",
  googleMapsLink: "https://maps.app.goo.gl/...",
  dates: "01 Jan, 2023 - 10 Jan, 2023",
  text: "A short description of the place and your trip."
}
```

## Linting

Oxlint is configured in `.oxlintrc.json` with the `react` and `oxc` plugins and these rules:

- `react/rules-of-hooks`: error
- `react/only-export-components`: warn (constant exports allowed)

Run it with:

```bash
npm run lint
```

## Deployment

`vite.config.js` sets `base: '/traveling-journal/'`, so the built app expects to be served from a subpath, as on GitHub Pages at `https://<username>.github.io/traveling-journal/`.

1. Build the project:
   ```bash
   npm run build
   ```
2. Publish the contents of `dist/` to your host (for example the `gh-pages` branch or a GitHub Actions Pages workflow).

If you deploy somewhere else, such as the root of a domain, update or remove the `base` option in `vite.config.js`.

## License

Add a license of your choice here.
