# Portfolio — Xueyan Wang

A minimal, Apple-inspired photography portfolio built with plain HTML, CSS, and JavaScript. No frameworks, no build step — just open the files and edit.

## Files

```
portfolio/
├── index.html       # Portraits gallery (= homepage)
├── events.html      # Events gallery
├── about.html       # About + contact page
├── styles.css       # All styling (shared across pages)
├── script.js        # Lightbox (click to enlarge, arrow keys, ESC to close)
├── images/
│   ├── portraits/   # Put your portrait photos here
│   └── events/      # Put your event photos here
└── README.md
```

## How to add your photos

In `index.html` and `events.html`, find the `<main class="gallery">` block. Each photo is a `<figure>` element. Replace the placeholders with your real photos:

**Before** (placeholder):
```html
<figure class="photo tall ph-1"></figure>
```

**After** (real photo):
```html
<figure class="photo tall">
  <img src="images/portraits/marie-golden-hour.jpg" alt="Marie at golden hour">
</figure>
```

Notes:
- Remove the `ph-X` class (it's only the placeholder color)
- The `tall` / `wide` / `square` / `portrait` / `landscape` classes set the aspect ratio — mix them to create natural rhythm
- Always include `alt=""` text — good for accessibility and SEO

## Recommended image sizes

For best loading speed and quality on retina screens:
- **Width**: 1600 px (gallery thumbnails will be downscaled)
- **Format**: JPEG quality 80–85, or WebP for smaller files
- **File size**: under 400 KB per image when possible

You can batch-resize using free tools: ImageOptim (Mac), Squoosh (web), or Photoshop's "Save for Web."

## How to customize

| What | Where |
|---|---|
| Your name in the wordmark | All 3 HTML files, `class="wordmark"` |
| Bio text | `about.html`, inside `<div class="about-body">` |
| Contact info | `about.html`, inside `<div class="contact-list">` |
| Footer social links | All 3 HTML files, `<div class="footer-links">` |
| Page titles ("Portraits", "Events") | `<h1 class="page-title">` in each gallery file |
| Colors / spacing | `styles.css`, top section `:root { ... }` |

## How to deploy to GitHub Pages (free)

1. Create a GitHub account if you don't have one: github.com
2. Create a new public repository named: `your-username.github.io`
   (using exactly your GitHub username — this gives you a clean URL)
3. Upload all the files in this folder to that repository
4. Go to repo → Settings → Pages → set source to `main` branch / root
5. Wait 1–2 minutes. Your site is live at `https://your-username.github.io`

Alternative deploy options (also free):
- **Netlify**: drag the folder onto netlify.com — instant live site
- **Cloudflare Pages**: similar to Netlify, slightly faster CDN
- **Vercel**: best if you ever want to add Next.js later

## Lightbox behavior

When you click any photo, it opens fullscreen.
- Click outside the image, click the × button, or press `ESC` to close
- Use ← → arrow keys or the on-screen arrows to navigate between photos

The lightbox only opens for photos that have a real `<img>` inside — placeholder figures are ignored.

## Browser support

Tested in modern browsers: Safari 15+, Chrome, Firefox, Edge. Uses standard CSS Grid and ES6 — no polyfills needed.
