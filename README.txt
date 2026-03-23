================================================================================
  COMBAT PRO CLEAN — WEBSITE PROJECT
  Built by Zimatik Digital Systems | https://zimatik.com
================================================================================

OVERVIEW
--------
This is a modern React + Tailwind CSS single-page application (SPA) built with
Vite. The booking flow works entirely through WhatsApp — no server or database
is required. The site is ready to deploy on any static hosting platform.


================================================================================
SECTION 1: PREREQUISITES
================================================================================

Before running or building this project, ensure the following are installed:

  1. Node.js (v18 or later)
     Download: https://nodejs.org
     Verify:   node --version

  2. npm (comes bundled with Node.js)
     Verify:   npm --version

  3. A modern web browser (Chrome, Firefox, Edge, or Safari)

  4. A code editor (recommended: Visual Studio Code)
     Download: https://code.visualstudio.com

No backend server, PHP, or MySQL is needed. The site is pure static files
and can be deployed on any cloud hosting platform after a single build step.


================================================================================
SECTION 2: PROJECT STRUCTURE
================================================================================

  combtaproclean/
  ├── client/                    ← React application (all source code lives here)
  │   ├── public/
  │   │   └── logo.png           ← Company logo (used in navbar, footer, favicon)
  │   ├── src/
  │   │   ├── components/        ← Reusable UI components
  │   │   │   ├── Navbar.jsx
  │   │   │   ├── Hero.jsx
  │   │   │   ├── Services.jsx
  │   │   │   ├── About.jsx
  │   │   │   ├── Maintenance.jsx
  │   │   │   ├── Testimonials.jsx
  │   │   │   ├── CtaBanner.jsx
  │   │   │   └── Footer.jsx
  │   │   ├── pages/             ← Full pages assembled from components
  │   │   │   ├── Home.jsx
  │   │   │   ├── Gallery.jsx
  │   │   │   └── Contact.jsx
  │   │   ├── App.jsx            ← Routing setup
  │   │   ├── main.jsx           ← React entry point
  │   │   └── index.css          ← Global styles + Tailwind directives
  │   ├── index.html             ← HTML shell (title, favicon, meta tags)
  │   ├── tailwind.config.js     ← Brand colors and fonts
  │   ├── vite.config.js         ← Vite bundler config
  │   └── package.json           ← Project dependencies
  └── README.txt                 ← This file


================================================================================
SECTION 3: INSTALLATION
================================================================================

Step 1 — Open a terminal and navigate to the client folder:

  cd path/to/combtaproclean/client

Step 2 — Install all dependencies:

  npm install

This will install React, Tailwind CSS, Framer Motion, React Router, Lucide
React, and all other required packages listed in package.json.


================================================================================
SECTION 4: RUNNING LOCALLY (DEVELOPMENT)
================================================================================

From the client/ folder, run:

  npm run dev

The site will be available at: http://localhost:5173

The development server supports hot-reload — any file changes will reflect
instantly in the browser without needing a refresh.


================================================================================
SECTION 5: BUILDING FOR PRODUCTION
================================================================================

From the client/ folder, run:

  npm run build

This produces an optimized, minified build in:  client/dist/

The dist/ folder contains only static files (HTML, CSS, JS, images) and can
be hosted on any platform — no Node.js required on the server.


================================================================================
SECTION 6: HOSTING OPTIONS
================================================================================

--- OPTION A: Netlify (Recommended — Free tier available) ---

  1. Go to https://netlify.com and sign up / log in
  2. Click "Add new site" → "Deploy manually"
  3. Drag and drop the entire client/dist/ folder onto the upload area
  4. Your site will be live instantly at a *.netlify.app URL
  5. To connect a custom domain: Site settings → Domain management → Add domain

  For automatic deploys from Git (recommended for ongoing updates):
  - Push the project to a GitHub repository
  - Connect the repo in Netlify
  - Set Build command:   npm run build
  - Set Publish directory: dist
  - Every push to main will automatically redeploy the site

--- OPTION B: Vercel (Also Free, great for React/Vite apps) ---

  1. Go to https://vercel.com and sign up / log in
  2. Install Vercel CLI:  npm install -g vercel
  3. From the client/ folder, run:  vercel
  4. Follow the prompts — Vercel auto-detects Vite settings
  5. Custom domain: Vercel dashboard → Project → Settings → Domains

--- OPTION C: Shared Hosting / cPanel (Hostinger, SiteGround, etc.) ---

  1. Build:  npm run build
  2. Upload the contents of client/dist/ via FTP or File Manager to public_html/
  3. Because this is an SPA, create a file named .htaccess in public_html/ with:

      Options -MultiViews
      RewriteEngine On
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteRule ^ index.html [QSA,L]

     This ensures direct URL access (e.g. /gallery, /contact) works correctly.
  4. Ensure the host has a custom domain and SSL (HTTPS) certificate enabled

  NOTE: Most shared hosts (Hostinger, SiteGround, Namecheap) support this out
  of the box. Free SSL is usually available via Let's Encrypt in cPanel.


================================================================================
SECTION 7: CONFIGURATION — PLACEHOLDERS TO UPDATE
================================================================================

The following values are hardcoded directly in the source files. If any of this
information changes, update the files listed next to each item.

--- BUSINESS CONTACT INFORMATION ---

  WhatsApp Number (booking form sends here):
    Current value : 27610244139  (international format, no + or spaces)
    Update in     : client/src/components/Navbar.jsx         (line ~69)
                    client/src/components/CtaBanner.jsx       (line ~67)
                    client/src/components/Footer.jsx          (lines ~104, ~147)
                    client/src/pages/Contact.jsx              (lines ~38, ~74, ~146)

  Phone Numbers (displayed in footer and contact page):
    Current value : 061 406 0330  and  061 024 4139
    Update in     : client/src/components/Footer.jsx          (lines ~124-128)
                    client/src/pages/Contact.jsx              (line ~19)

  Email Address:
    Current value : info@combatproclean.co.za
    Update in     : client/src/components/Footer.jsx          (line ~135)
                    client/src/pages/Contact.jsx              (line ~25)

  Physical Address:
    Current value : 19 Pinetree Avenue, Claremont
    Update in     : client/src/components/Footer.jsx          (line ~143)
                    client/src/pages/Contact.jsx              (lines ~31-32)

  Service Areas:
    Current value : Cape Town & Johannesburg
    Update in     : client/src/components/Footer.jsx          (line ~164)
                    client/src/pages/Contact.jsx              (lines ~268-271)
                    client/src/components/Hero.jsx            (social proof text)
                    client/src/components/CtaBanner.jsx       (body paragraph)

--- SOCIAL MEDIA LINKS ---

  All social URLs follow the pattern: https://www.[platform].com/[handle]
  Update in: client/src/components/Footer.jsx  (lines ~10-49)

    Facebook  : https://www.facebook.com/combatproclean
    Instagram : https://www.instagram.com/combatproclean
    TikTok    : https://www.tiktok.com/@combatproclean
    X/Twitter : https://www.x.com/combatproclean

  Footer handle display (bottom bar):
    Current value : @combatproclean
    Update in     : client/src/components/Footer.jsx  (line ~172)

--- LOGO ---

  File location : client/public/logo.png
  Used in       : Navbar (h-16), Footer (h-10), favicon, apple-touch-icon
  To replace    : Simply overwrite client/public/logo.png with a new PNG file.
                  Keep the filename as logo.png or update all references.
  Recommended   : PNG with transparent background, min 300x300px

--- PAGE TITLE & SEO META ---

  File          : client/index.html
  Title tag     : "Combat Pro Clean | Premium Mobile Vehicle Detailing"
  Meta desc     : Update the content attribute of the <meta name="description">
                  tag with a relevant, keyword-rich description (under 160 chars)

--- BRAND COLORS ---

  File          : client/tailwind.config.js
  Current colors:
    brand-blue      : #046BD2   ← Primary action color (buttons, accents)
    brand-blueDark  : #045CB4   ← Button hover state
    brand-slate     : #1e293b   ← Section background A
    brand-gray      : #334155   ← Subtle background
    brand-light     : #F0F5FA   ← Light text / light backgrounds
  To change: update the hex values in tailwind.config.js, then rebuild.

--- SERVICES LIST (booking form dropdown) ---

  File          : client/src/pages/Contact.jsx  (lines ~5-11)
  Current list  :
    - Premium Full Service
    - Standard Full Service
    - Interior Deep Clean
    - Exterior Wash
    - Engine Bay Wash
  To update: edit the 'services' array at the top of Contact.jsx

--- VEHICLE TYPES (booking form dropdown) ---

  File          : client/src/pages/Contact.jsx  (line ~13)
  Current list  : Sedan, S.U.V, Hatchback, Bakkie
  To update     : edit the 'vehicles' array at the top of Contact.jsx

--- TESTIMONIALS ---

  File          : client/src/components/Testimonials.jsx  (lines ~6-28)
  To update     : Edit the 'reviews' array. Each entry has:
                    name     - customer full name
                    time     - e.g. "2 months ago"
                    rating   - number (1-5)
                    text     - review body text
                    initials - 2 letters shown in avatar circle

--- GALLERY IMAGES ---

  File          : client/src/pages/Gallery.jsx
  Current images: Loaded directly from the client's existing WordPress CDN
                  (https://www.combatproclean.co.za/wp-content/uploads/...)
  To replace    : Either update the URLs in the images array in Gallery.jsx,
                  OR place new image files in client/public/gallery/ and
                  reference them as /gallery/image1.jpg etc.
  Recommended   : Host images locally in client/public/ for reliability —
                  external CDN URLs may break if the source site changes.

--- HERO & SERVICES IMAGES ---

  Hero background and mosaic images, plus the Services section image strip,
  are also loaded from the client's WordPress CDN.
  Files to update:
    client/src/components/Hero.jsx       ← background image + 3 mosaic images
    client/src/components/Services.jsx   ← 4-image banner strip (lines ~101-116)
    client/src/components/About.jsx      ← main photo on right column


================================================================================
SECTION 8: NO BACKEND REQUIRED
================================================================================

This site has NO backend, NO database, and NO server-side code.

The booking form works by:
  1. Collecting the user's form inputs (name, service, date, etc.)
  2. Building a pre-filled WhatsApp message string
  3. Opening https://wa.me/[number]?text=[message] in a new tab
  4. The client receives the booking request directly in WhatsApp

This means:
  - No form submissions are stored anywhere
  - No email server configuration is needed
  - No API keys or environment variables are required
  - The site can be hosted entirely on free static hosting (Netlify, Vercel, etc.)

If a backend (email notifications, booking database, CMS) is required in the
future, contact Zimatik Digital Systems to scope the upgrade.


================================================================================
SECTION 9: FONTS USED
================================================================================

All fonts are loaded from Google Fonts (requires internet connection to render):

  Barlow Condensed (700, 800)    ← Brand name / logo text in navbar
  Plus Jakarta Sans (400–800)    ← Section headings and subheadings
  Inter (300–700)                ← Body text, labels, paragraphs

Google Fonts import is in: client/src/index.css  (line 1)

For offline use or performance improvement, fonts can be self-hosted using
the google-webfonts-helper tool: https://gwfh.mranftl.com/fonts


================================================================================
SECTION 10: SUPPORT & FURTHER DEVELOPMENT
================================================================================

  Built by  : Zimatik Digital Systems
  Website   : https://zimatik.com

  For further development, design updates, feature additions, or any
  questions about this codebase, reach out through the website above.

================================================================================
