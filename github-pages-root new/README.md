# First Smile Dental Clinic Website

Premium static website for **First Smile Dental Clinic, Katihar**, led by **Dr. Chandan Kumar, BDS, MIDA, FAGE**. The site is built for local search visibility, fast loading, mobile-first browsing, and simple WhatsApp appointment booking.

## Project Overview

This repository contains the production-ready static website files at the repository root, plus the small Node.js generator used to rebuild the pages. It includes the homepage, About page, doctor profile, service pages, gallery, testimonials, FAQ, blog, contact page, appointment flow, SEO files, and optimized local assets.

The website can be deployed directly from the repository root.

## Features

- Premium responsive dental clinic design
- Fast static pages with optimized local images
- SEO pages for local Katihar dental searches
- Dedicated treatment pages for root canal, implants, cleaning, whitening, braces, extraction, fillings, dentures, pediatric dentistry, smile makeover, and emergency dental care
- WhatsApp appointment booking
- Click-to-call phone links
- Google Maps integration
- FAQ accordion
- Gallery lightbox
- Smooth reveal animations
- `robots.txt` and `sitemap.xml`
- Canonical URLs, Open Graph tags, Twitter card metadata
- JSON-LD schema for dental clinic and FAQ content

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js build script
- Static hosting compatible output

No framework or database is required.

## Folder Structure

```text
.
├── index.html
├── about-us/
├── services/
├── gallery/
├── testimonials/
├── faq/
├── blog/
├── contact/
├── book-appointment/
├── assets/
├── scripts/
│   └── build-first-smile-pages.mjs
├── robots.txt
├── sitemap.xml
├── styles.css
├── script.js
├── package.json
├── vercel.json
└── README.md
```

## Installation

Install Node.js, then run:

```bash
npm install
```

There are no external package dependencies at this time.

## Local Preview

Start a local static server:

```bash
npm run preview
```

Then open:

```text
http://localhost:8080
```

You can also open `index.html` directly in a browser.

## Build

Regenerate the static pages:

```bash
npm run build
```

The generator writes the full website to `outputs/first-smile-dental-clinic/`. The deploy-ready root files are already included in this repository.

## Environment Variables

No environment variables are required.

## Deployment

Deploy the repository root to any static hosting provider, such as:

- GitHub Pages
- Vercel static deployment
- Netlify
- Cloudflare Pages
- cPanel or traditional shared hosting

For Vercel, `vercel.json` is configured with the root folder as the output directory.

Make sure the production domain is updated in `scripts/build-first-smile-pages.mjs` if the final domain is different from the placeholder canonical domain.

## SEO Notes

The website includes local SEO targeting for:

- Dental Clinic in Katihar
- Best Dental Clinic in Katihar
- Dentist in Katihar
- Best Dentist in Katihar
- Root Canal Treatment in Katihar
- Dental Implants in Katihar
- Teeth Cleaning in Katihar
- Braces in Katihar
- Emergency Dentist in Katihar
- Kids Dental Clinic in Katihar

Generated SEO files are available at:

```text
robots.txt
sitemap.xml
```

## Clinic Information

**First Smile Dental Clinic**  
Dr. Chandan Kumar, BDS, MIDA, FAGE  
Oral & Dental Surgeon  
Phone & WhatsApp: +91 8171515184  
Address: Kalibari Road, Behind Sakshi Medical, Near FirstCry Showroom, Katihar, Bihar

## License

All clinic branding, local content, and supplied assets are intended for First Smile Dental Clinic.
