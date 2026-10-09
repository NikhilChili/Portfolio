# Shivam Yadav — Animated Portfolio

A cinematic single-page portfolio built with **Next.js + JavaScript + GSAP + ScrollTrigger**.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Where to edit client content

Most content is centralized in:

`data/content.js`

Update `profile`, `projects`, `skills`, `experience`, and `highlights` there.

## Main animation file

`components/Portfolio.js`

GSAP `ScrollTrigger` drives:
- Hero name scaling / movement
- Scroll-scrubbed orb movement
- Section reveals
- About rotation
- Project parallax
- Experience and highlight reveals
- Marquee movement
- Contact typography reveal
- Menu transition

## Replacing sample visuals

The project cards currently use CSS-generated sample visuals so the page works immediately without external image dependencies. Replace `ProjectVisual` in `components/Portfolio.js` with `<img>` or `<video>` elements when real project assets are supplied.
