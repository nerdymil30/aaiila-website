# AAII Los Angeles Meetings Website

This is a recreation of the AAII Los Angeles chapter meetings website (https://aaiila.org/all-meetings/) built with Nuxt 4, NuxtHub, and Tailwind CSS.

## Tech Stack

- **Nuxt 4** - Vue.js framework with compatibility version 4
- **NuxtHub** - Deployment and edge capabilities
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Project Structure

```
/home/ubuntu/aaii-meetings-site/
├── app/
│   ├── pages/
│   │   ├── index.vue              # Main meetings listing page
│   │   └── meeting/
│   │       └── [slug].vue         # Individual meeting detail page
│   └── app.vue                    # Root application component
├── public/
│   ├── data/                      # Meeting JSON data files (50 meetings)
│   ├── assets/
│   │   ├── images/                # Speaker photos and meeting images
│   │   └── materials/             # PDF presentation materials
│   └── meetings-index.json        # Generated index of all meetings
├── scripts/
│   └── generate-meetings-index.mjs # Script to generate meetings index
├── nuxt.config.ts                 # Nuxt configuration
└── todo.md                        # Project task tracker
```

## Data Structure

### Meetings Index (`/public/meetings-index.json`)
Contains metadata for all 50 meetings:
- Meeting title, slug, and ID
- Date and status (ARCHIVED/FUTURE)
- Category
- Background image reference
- Number of topics

### Individual Meeting Data (`/public/data/*.json`)
Each meeting has a detailed JSON file containing:
- Metadata (title, link, post date, category)
- Event information (date, status)
- Custom fields (background images, thumbnails)
- Topics array with:
  - Speakers (name, title, bio, photo)
  - Presentation details (title, description, learning outcomes)
  - Materials (recordings, slides PDFs)

## Features Implemented

✅ Responsive header with AAII LA branding
✅ Navigation menu with social media links (Facebook, Meetup)
✅ Main meetings listing page showing all 50 archived meetings
✅ Meeting cards with images in a 4-column grid layout
✅ Proper color scheme matching original site (blue headings, green accents)
✅ Footer with disclaimer and copyright
✅ Meeting data loaded from JSON files
✅ Images properly served from /public/assets/

## Features In Progress

🔄 Individual meeting detail pages (routing works, data loading needs refinement)
🔄 Future meetings section (currently no future meetings in data)
🔄 PDF materials linking
🔄 Responsive navigation menu with dropdowns

## Development

### Running the Development Server

```bash
cd /home/ubuntu/aaii-meetings-site
pnpm dev
```

The server will start on port 3001 (or next available port).

### Regenerating Meetings Index

If you add or modify meeting JSON files:

```bash
node scripts/generate-meetings-index.mjs
```

## Styling Notes

- **Primary Blue**: Used for main headings and "All Meetings" navigation
- **Green Accent**: Used for "LA" in logo and subheadings
- **Red Buttons**: "Read more" buttons on meeting cards
- **Background**: Light gray (#f9fafb) for page background
- **Cards**: White with shadow, hover effect increases shadow

## Content Source

All meeting content and assets were imported from:
https://github.com/nerdymil30/nuxt-blog-test
- JSON data: `AAII-Migration-assets/output/structured-json/`
- Assets: `AAII-Migration-assets/output/assets/`

## Next Steps

1. Fix detail page data loading (serve JSON files correctly)
2. Add future meetings section when data becomes available
3. Implement responsive mobile menu
4. Add navigation dropdown menus
5. Link PDF materials on detail pages
6. Optimize images for faster loading
