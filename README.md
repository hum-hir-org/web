# Humanize Hiring Association: website

Static, bilingual (EN / HU) site in plain HTML5, CSS3 and vanilla JavaScript. There is no build step, no external requests, no tracking and no paid service, so it runs directly on GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure, SEO / Open Graph meta, inline SVG logo |
| `styles.css` | Design-system tokens (surface, trust, midnight, terracotta, amber, ink), responsive layout |
| `app.js` | EN/HU dictionary (all site text), language switcher, mobile menu, scroll animations, scroll-spy, mailto link |
| `assets/` | Official logo files from the HHA design system: `hha-mark.svg` (header, about, hero), `hha-logo-reversed.svg` (footer, on dark) |
| `fonts/` | Self-hosted Plus Jakarta Sans and Source Serif 4 (SIL OFL licences included) |
| `favicon.svg` | The official mark as favicon |

## Publishing on GitHub Pages

1. Create a repository (for example `humanize-hiring-site`) and put these files in the **root**.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then **Save**.
4. After a minute the site is live at `https://<user>.github.io/<repo>/`.

### Custom domain (optional)

Add a `CNAME` file containing just the domain name (for example `humanizehiring.org`), set the DNS records GitHub documents, and enable **Enforce HTTPS** under Settings → Pages.

## Before going live: checklist

- **Contact e-mail:** change `CONTACT_EMAIL` at the top of `app.js` (currently a placeholder, `hello@humanizehiring.org`). It feeds the footer link and the early-interest e-mail button.
- **Open Graph:** once the domain is known, add `<meta property="og:url" content="https://your-domain/">` and a `<link rel="canonical" ...>` to `index.html`. For a rich link preview, add a 1200×630 PNG and reference it with `og:image` and `twitter:image`; social networks do not accept SVG there.
- **Status wording:** "Under incorporation" / "Bejegyzés alatt" appears in the hero badge, the About block and the footer. Remove it from the dictionary (`app.js`) and the HTML when the association is registered.

## Editing texts and languages

All visible text lives in the `I18N` object in `app.js` (`en` and `hu`). In `index.html`, each translatable element carries `data-i18n="key"`; attributes use `data-i18n-attr="aria-label:key"`. To change a sentence, edit it in both languages.

- English is the default. The chosen language is saved in `localStorage`; `?lang=hu` in the URL forces Hungarian, which is handy for sharing a Hungarian link.
- The switcher also updates `<html lang>`, the page title, the meta description and the Open Graph tags.

## Accessibility and performance

- Skip link, landmark regions, `aria-current` on the active nav item, `aria-expanded` on the mobile menu, visible focus states.
- Animations are disabled for visitors with `prefers-reduced-motion`; without JavaScript all content stays visible.
- Fonts are self-hosted (`fonts/`), so there are no Google Fonts requests, which also simplifies GDPR compliance.
- The logo files are the supplied artwork; do not redraw, recolour or re-set the wordmark (design system rule).
- There is no contact form. "Express interest by email" is a plain `mailto:` link, so no data is sent to or stored by the site.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server` in the folder and visit `http://localhost:8000`.

## Content

The page carries the final strategy text (sections 1-12: big picture, mission, vision, why now, four pillars, the hiring process, what we do, People-First Hiring Certified, independence and governance, international aim, positioning, central message) plus the LinkedIn community block and community guidelines.

- The Hungarian text is the approved source, word for word.
- The English text is a translation prepared from it; have it reviewed before launch.
- Legal status is shown in the hero badge, in the Independence section and in the footer (EN: Under incorporation / HU: Bejegyzés alatt). Remove it when the association is registered.
- LinkedIn Group: https://www.linkedin.com/groups/40628142/ · Organization Page: https://www.linkedin.com/company/145454016/

## Pages
- `index.html` – main page; `legal.html` – legal notice & privacy (linked from the footer); `404.html` – custom not-found page (GitHub Pages serves it automatically for unknown URLs; it uses root-absolute asset paths, so it assumes the site is served from the domain root, e.g. a custom domain).
- All files must be in the repository root.
