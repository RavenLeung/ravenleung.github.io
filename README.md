# resume-site

Personal site / résumé for Raven Leung.

- Local project dir: `~/Projects/resume-site/`
- GitHub repo: `RavenLeung/ravenleung.github.io` (the repo name is fixed by GitHub Pages
  user-site rules — the root URL only works when the repo is `<username>.github.io`)
- Live URL: https://ravenleung.github.io
- Stack: plain static HTML + CSS, no build step, no dependencies
- Deploy: push to `main` → GitHub Pages publishes automatically

## Local preview

```bash
python3 -m http.server 8000 --directory ~/Projects/resume-site
# → http://localhost:8000
```

## Deploy

```bash
git add -A && git commit -m "..." && git push
```

## Structure

```
index.html    single page: hero → about → experience → projects → education → skills → leadership → contact
styles.css    responsive, light/dark via prefers-color-scheme, print stylesheet
i18n.js       English + 简体中文 dictionary and the language switcher logic
```

## Internationalisation

- English text lives inline in `index.html` (page stays readable and crawlable without JS).
- Every translatable element carries `data-i18n="key"`; `i18n.js` replaces its innerHTML with
  the value for the active language, so values may contain inline markup like `<strong>`.
- Keys are **flat strings** (`"nav.about"`, `"exp.otis.b1"`) — not nested paths. Keep the `en`
  and `zh` key sets identical; `apply()` logs a console warning for any key it cannot resolve.
- Language resolution order: saved preference (`localStorage['resume-lang']`) → `navigator.language`
  → English. The switcher in the top bar writes the preference.
- `{year}` inside a value is replaced with the current year at runtime.
- Adding a language: add a top-level block under `I18N` in `i18n.js`, add a `<button>` to `.lang`
  in `index.html`. Nothing else.
- The inline script in `<head>` hides the page for ~800ms while Chinese is applied, so visitors
  never see a flash of English first (with a timeout as a failsafe if `i18n.js` fails to load).

