# Apichai — Tech Portfolio (GitHub Pages)

This repository hosts a secure‑by‑default personal portfolio site.

## Quick Start

1. Create a repository named **`apichai65076074.github.io`** (all lowercase) under your GitHub account `Apichai65076074`.
2. Upload these files (or push via git).
3. GitHub Pages will auto‑publish at **https://apichai65076074.github.io** (within ~1–2 minutes).

## Customize

- Edit `index.html` sections: Projects, Skills, Timeline, and Contact.
- No external JS/CSS/fonts for better security and faster loads.
- Images: put under `assets/` and reference with `<img src="assets/yourimage.png" alt="...">`.

## Security Notes (GitHub Pages)

- **CSP**: Applied via `<meta http-equiv="Content-Security-Policy">`. This covers the document itself without server headers.
- **No inline scripts/styles**: All JS/CSS are separate files and limited to `'self'` by CSP.
- **Referrer Policy**: strict‑origin‑when‑cross‑origin via `<meta name="referrer">`.
- **SRI**: Not required here since we avoid external resources. If you add CDNs, use `<script integrity="...">` and extend CSP.
- **X‑Frame‑Options / Permissions‑Policy**: These require server headers (not configurable on GitHub Pages). As a partial mitigation we set `frame-ancestors 'none'` in CSP.

## Local Dev

Open `index.html` directly, or use a simple server:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080

## License

MIT — do whatever, attribution appreciated.
