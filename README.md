# NEWORA FASHION - Official Website

> **High-converting, ultra-fast, mobile-first website for "Newora Fashion"**  
> Specially crafted for social media apparel sellers with direct-to-doorstep courier delivery and premium fabric focus. Ready for 100% free hosting on **GitHub Pages**.

---

## 🌟 Key Features Built-In

1. **Prominent Branding**:
   - Giant luxury editorial masthead displaying **NEWORA** right at the top as requested.
2. **Speed Courier & Doorstep Delivery Spotlight**:
   - Highlighted *"Redi Gedattama Courier Karanawa"* (Direct Doorstep Delivery) and 24-48h Speed Courier across all banners, product cards, process steps, and FAQs.
3. **100% Premium Fabric & Quality Material Focus**:
   - Dedicated Quality Guarantee section highlighting handpicked linen, combed cotton, and durable stitch finishes.
4. **Tasteful Fashion Positioning**:
   - Sophisticated apparel presentation (chic casuals, linen maxi, tailored sets, evening wraps) with broad aesthetic appeal without overly restrictive labeling.
5. **Direct Social Media / WhatsApp Commerce**:
   - Instant 1-click WhatsApp order buttons on every single product card with auto-filled message templates (including product code, title, and price).
   - Floating WhatsApp contact pill for immediate live inquiries.
6. **Ultra-Fast & Zero-Bloat Performance**:
   - Pure Semantic HTML5, CSS3, and Vanilla JavaScript.
   - **No heavy animation libraries, no jQuery, no framework lag** — loads in milliseconds.
7. **Ultimate SEO for `"newora fashion"`**:
   - Semantic heading hierarchy (`H1`, `H2`, `H3`).
   - Rich Meta Tags, OpenGraph & Twitter Card tags.
   - **Full Schema.org JSON-LD Structured Data** (`ClothingStore`, `WebSite`, `Product`, and `FAQPage` rich snippets).
   - Built-in `robots.txt` and `sitemap.xml`.

---

## 📁 File Structure

```text
Newora/
│
├── index.html          # Main HTML structure with all SEO & Schema.org JSON-LD
├── robots.txt          # Google & Bing crawler instructions
├── sitemap.xml         # XML Sitemap for Google Search Console
├── README.md           # Documentation & GitHub Pages setup guide
│
├── css/
│   └── style.css       # Clean, modern, responsive CSS styling
│
└── js/
    └── app.js          # Interactive filters, search, modal & WhatsApp generator
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New Repository**.
3. Name your repository (e.g., `newora` or `newora-fashion`).
4. Keep it **Public** and click **Create repository**.

### Step 2: Upload Files
In your terminal / PowerShell in this folder (`d:\Documents\Newora`), run:

```bash
git init
git add .
git commit -m "Initial commit for Newora Fashion website"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

*(Alternatively, you can drag and drop all files directly into the GitHub web interface).*

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top right tab).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Branch**:
   - Select `main`
   - Folder: `/ (root)`
   - Click **Save**.
5. Wait 1-2 minutes. GitHub will provide your live URL:  
   👉 `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

---

## ⚙️ How to Customize Your Contact Details

### 1. Update Your WhatsApp Number & Social Links
Open [js/app.js](file:///d:/Documents/Newora/js/app.js#L11-L18):
```javascript
const NEWORA_CONFIG = {
  brandName: "Newora",
  brandFullName: "Newora Fashion",
  // Enter your WhatsApp number in international format WITHOUT + or spaces:
  // e.g. for Sri Lanka: 94771234567
  whatsappNumber: "94770000000",
  instagramHandle: "neworafashion",
  facebookPage: "neworafashion.lk"
};
```

### 2. Update GitHub Username in SEO Links
In [index.html](file:///d:/Documents/Newora/index.html) and [sitemap.xml](file:///d:/Documents/Newora/sitemap.xml), replace `yourusername` with your real GitHub username:
- `https://yourusername.github.io/newora/` ➡️ `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`

### 3. Add or Edit Clothes / Products
Open [js/app.js](file:///d:/Documents/Newora/js/app.js#L23-L115) and update the `products` list. You can change titles, prices in Sri Lankan Rupees (`Rs.`), fabric descriptions, and image links.

---

## 🔍 How to Rank #1 on Google for `"newora fashion"`

1. **Submit to Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add your website URL (`https://<username>.github.io/newora/`).
   - Go to **Sitemaps** on the left menu and submit: `sitemap.xml`.
   - Click **URL Inspection** -> Enter your URL -> Click **Request Indexing**.

2. **Add Your Website Link to Social Media**:
   - Place your website URL in your **Instagram Bio**, **Facebook Page "About" & "Website" section**, and **TikTok Bio**.
   - Backlinks from your social media pages are the fastest way Google discovers and ranks `"newora fashion"`.

3. **Google Business Profile (Optional but powerful)**:
   - Create a Google Business Profile for *"Newora Fashion"*, linking to this site. Within 1-2 weeks, anyone searching *"newora fashion"* will see your site and profile at the very top of Google.
