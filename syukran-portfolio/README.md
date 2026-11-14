# Syukran Shalihin – Portfolio

## Change photos
1. Put photos in `images/`:
   - `profile.jpg` – round photo at top
   - `about.jpg` – About Me photo
   - `work1.jpg` … `work6.jpg` – gallery
2. Other names? Edit paths in `config.js`.

## Change text
Edit `config.js` only (name, role, skills, gallery, links).

## Quick test
Click **✎ Edit photos** (bottom right) → click any photo → pick a file.
This saves in YOUR browser only. For the live site, use `images/`.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import repo → Deploy.
   (No build settings needed. It is a static site.)
3. Every `git push` updates the site.

## Gallery
Each item in `config.js` has `type`: `photo`, `video` or `design`.
- Filter buttons (All / Photography / Videography / Design) appear automatically.
- `video` items show a ▶ icon. Put the YouTube/Instagram link in `link` → "▶ Watch" button.
