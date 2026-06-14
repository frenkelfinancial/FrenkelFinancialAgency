# Frenkel Financial Agency

A simple static landing page introducing Jace Frenkel and Frenkel Financial Agency,
aimed at agents who want to learn about the agency and schedule an interview.

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Things to customize before going live

- **Calendly link** — in `index.html`, replace the `data-url` on the
  `.calendly-inline-widget` (in the *Schedule* section) with your real Calendly
  scheduling link.
- **Contact form** — the form in the *Contact* section posts to a placeholder
  Formspree endpoint. Create a free form at [formspree.io](https://formspree.io) and
  replace the `action` URL.
- **Contact info** — update the email, phone, and location in the *Contact* section.
- **Social links** — update the LinkedIn/Facebook/Instagram links in the footer.
- **Bio & copy** — update the *About Me* and *About the Agency* sections with your
  own details.

## Deploying

This is a static site, so it can be hosted for free on GitHub Pages, Netlify, or
Vercel. For GitHub Pages: Settings → Pages → set source to the `main` branch.
