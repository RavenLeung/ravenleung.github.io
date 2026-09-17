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
index.html    single page: hero → experience → projects → skills → contact
styles.css    responsive, light/dark via prefers-color-scheme
```
