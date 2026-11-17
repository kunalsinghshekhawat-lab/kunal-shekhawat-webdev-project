# Kunal Singh Shekhawat — Editorial Portfolio & Personal Monograph

An artistic, magazine-inspired personal portfolio and resume website designed and developed for **Kunal Singh Shekhawat** (**Bachelor of Business Administration in Digital Business and Entrepreneurship, BBA-DBE**, **Indian Institute of Management Bangalore**).

Built around the core design philosophy **"An artistic mind with a business-oriented perspective,"** this project bridges analytical business strategy, academic research, and public-interest governance with visual arts, musical performance, and editorial design.

## 1. Project Overview & Core Philosophy

Rather than relying on a standard corporate template or a minimalist resume layout, this portfolio is architected as an independent editorial monograph and contemporary gallery exhibit. It presents two complementary dimensions of identity within a unified design system:

* **Analytical & Business Perspective:** Undergraduate management studies at **IIM Bangalore (BBA-DBE)**, academic content research and question-bank architecture at **Euro International School (ICEP Programme)** across **CUET, CLAT, IPMAT, and SAT**, and national-level governance case analysis at the **CDPG 2026 Annual Conclave – National Case Challenge (Track 3: Governance & Ecosystem Management)**.
* **Artistic & Creative Perspective:** Competitive honours in inter-school visual arts and live band performance, participation in the **International Art Meet 2020 at BITS Pilani**, service as an **NCC Air Wing Cadet (2019–2020)**, and participation in the **2017 Guinness World Records Rubik's Cube attempt at BITS Pilani**.

## 2. Visual Identity & Design System

### Colour Palette

Every section, card, interactive state, and custom SVG illustration strictly adheres to the three-colour foundation and five supporting editorial tones:

| Role | Colour Name | Hex Code | Primary Usage Across the Website |
| :--- | :--- | :--- | :--- |
| Primary Colour | **Navy Blue** | `#142B45` | Oversized editorial display typography, primary navigation transitions, flagship cards (IIM Bangalore, Euro International School ICEP), and structural borders |
| Secondary Colour | **Glacier Blue** | `#A9D5E5` | Interactive highlights, offset card shadows, badge accents, active filter states, and custom geometric SVG linework |
| Base Colour | **Warm Cream** | `#F4EBDD` | Main page canvas, archival paper background, and high-contrast light typography on dark navy sections |
| Supporting Dark | **Deep Navy** | `#102238` | Dual-perspective lens ribbon, footer architecture, code viewer backdrop, and sidebar accents |
| Supporting Accent | **Soft Glacier** | `#DCEEF2` | Creative duality cards, gallery highlights, and secondary interactive button surfaces |
| Supporting Surface | **Warm Ivory** | `#FAF7F0` | Elevated content cards, education timeline entries, and printable resume sheet |
| Supporting Neutral | **Muted Blue Grey** | `#71899A` | Section kickers, uppercase metadata labels, and secondary captions |
| Supporting Text | **Dark Ink** | `#26333D` | Primary long-form editorial body copy for optimal reading contrast (`> 10:1` WCAG AAA contrast on Warm Cream) |

### Typography System

The typographic hierarchy pairs expressive serif display faces with clean geometric sans-serifs loaded via Google Fonts:

| Font Family | Classification | Typographic Role |
| :--- | :--- | :--- |
| **Playfair Display** | Transitional Display Serif | Hero name masthead, primary section headings, and institution titles |
| **Cormorant Garamond** | Editorial Old-Style Serif | Italicised subheadings, Roman section numerals (`I.` – `VI.`), pull quotes, and artistic callouts |
| **DM Sans** | Geometric Sans-Serif | Long-form biography paragraphs, experience responsibilities, and achievement descriptions |
| **Manrope** | Technical Sans-Serif | Navigation links, uppercase metadata tags, filter buttons, and interactive badges |

## 3. Repository & File Architecture

The project is provided in both a **modular multi-file structure** (for college evaluation, local editing in VS Code, and GitHub Pages deployment) and a **self-contained single-file bundle**:

| File Name | Purpose & Contents |
| :--- | :--- |
| `index.html` | Semantic HTML5 document structuring the masthead hero, 6 numbered editorial sections, footer, and interactive resume modal |
| `style.css` | Core stylesheet defining CSS custom properties (`:root` design tokens), responsive CSS Grid/Flexbox layouts, sticky navigation bar, typography scales, hero masthead, and footer |
| `editorial-style.css` | Extended artistic stylesheet governing layered monograph cards, shadow offsets, contemporary gallery cards, interactive inspector boxes, perspective lens states, modals, and `@media print` rules |
| `script.js` | Vanilla JavaScript controller powering the sticky header scroll spy, mobile navigation drawer, Dual-Perspective Lens switcher, ICEP Exam Matrix tabs, CDPG Track 3 Governance Pillar explorer, Achievement Gallery category filters, and Resume print/download utilities |
| `kunal_shekhawat_portfolio.html` | Self-contained all-in-one build with inline CSS, JavaScript, and a built-in **HTML / CSS Files** viewer for instant single-file previewing |
| `README.md` | Project documentation, design system specification, and deployment guide |

## 4. Section-by-Section Breakdown

1. **Editorial Masthead Hero:** Full-width magazine masthead presenting Kunal Singh Shekhawat's name in oversized `Playfair Display`, professional headline banner, introductory thesis, quick-action buttons (**Explore My Work** and **Download Resume**), and a 3-column summary ledger.
2. **Interactive Dual-Perspective Lens Ribbon:** Allows visitors to toggle the portfolio view between **Unified Synthesis**, **01. Analytical & Business**, and **02. Artistic & Creative**, visually emphasising the corresponding cards across the page.
3. **Section I — About Me:** Asymmetrical two-column editorial spread pairing an offset pull-quote card and Analytical/Creative duality cards with a comprehensive biographical narrative and direct contact coordinates.
4. **Section II — Professional & Case Competition Experience:**
   * **Content Research Intern — Euro International School (ICEP Programme, 2026 – Present):** Details academic research, syllabus alignment, and question-bank development, paired with an interactive **ICEP Examination Matrix** exploring workflows for **CUET, CLAT, IPMAT, and SAT**.
   * **CDPG 2026 Annual Conclave – National Case Challenge (Track 3: Governance & Ecosystem Management, 2026):** Highlights national-level case analysis with an interactive **Track 3 Thematic Explorer** covering Digital Public Infrastructure (DPI), Institutional Accountability, Ecosystem Management, Policy & Regulation, Citizen Interests & Rights, and Strategic Case Analysis.
5. **Section III — Academic Architecture (Education Timeline):** Features a flagship deep-navy card for the **Indian Institute of Management Bangalore (BBA – Digital Business & Entrepreneurship, 2026 – Present)** alongside **Jhunjhunu Academy, Rajasthan (Class XII PCB, 2022 — 86.4%)** and **Birla School Pilani (Class X, 2020)**.
6. **Section IV — Contemporary Achievements & Extracurricular Gallery:** Filterable 12-column gallery showcasing bespoke SVG illustrations and curatorial cards for:
   * *No. 01:* Runner-Up – Inter-School Band Competition (Birla International School, Kishangarh)
   * *No. 02:* Runner-Up – Inter-School Art Competition
   * *No. 03:* Participant – International Art Meet 2020 (BITS Pilani)
   * *No. 04:* NCC Air Wing Cadet (National Cadet Corps, 2019–2020)
   * *No. 05:* Participation in Guinness World Records Attempt – Rubik's Cube (BITS Pilani, 16 April 2017, ~3,000 participants)
7. **Section V — Skills & Core Competencies + Areas of Interest:** Organises competencies into 4 structured quadrants (*Research & Analysis*, *Business & Strategy*, *Digital & Technical*, and *Creative Skills*) without arbitrary percentage bars, followed by an 8-card **Areas of Interest** grid.
8. **Section VI — Beyond Academics Editorial Collage:** Three-panel visual and narrative triptych highlighting Fine Art Exhibitions & Sketching, Ensemble Music & Stagecraft, and NCC Air Wing & Institutional Forums.
9. **Official Resume Modal & Print Stylesheet:** Accessible from the navigation bar, hero section, and footer, providing an instant printable/save-to-PDF curriculum vitae, standalone HTML download, or custom PDF attachment option.

## 5. How to Run Locally & Deploy to GitHub Pages

### Running Locally

1. Extract `kunal_shekhawat_portfolio_source.zip` into a project folder containing `index.html`, `style.css`, `editorial-style.css`, `script.js`, and `README.md`.
2. Double-click `index.html` to open it in any modern browser (Chrome, Edge, Safari, Firefox), or open the folder in **VS Code** and launch it with the **Live Server** extension.

### Deploying to GitHub Pages

1. Create a new public repository on GitHub (for example, `kunal-portfolio` or `<username>.github.io`).
2. Upload `index.html`, `style.css`, `editorial-style.css`, `script.js`, and `README.md` to the root of the repository and commit the changes.
3. Navigate to **Settings → Pages** in your GitHub repository.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select the `main` branch and `/ (root)` folder, and click **Save**.
5. Your live portfolio website will publish automatically within 1–2 minutes.

## 6. Author & Contact Coordinates

* **Name:** Kunal Singh Shekhawat
* **Academic Programme:** BBA – Digital Business & Entrepreneurship (BBA-DBE), Indian Institute of Management Bangalore
* **Location:** Rajasthan, India
* **Email:** [kunalsinghshekhawat72@gmail.com](mailto:kunalsinghshekhawat72@gmail.com)
* **LinkedIn:** [linkedin.com/in/kunal-singh-shekhawat-80a105404](https://www.linkedin.com/in/kunal-singh-shekhawat-80a105404/)
