# NCIC Learning Management Hub

A standalone, accessible, and responsive web portal for **North Cumbria Integrated Care (NCIC) NHS Foundation Trust** staff to search, browse, and book training courses on the Electronic Staff Record (ESR).

Replaces the legacy LifeRay HTML snippet (`OldCode.html`) with a decoupled, high-performance web application featuring separate HTML, CSS, JavaScript, and a centralized data store.

---

## 📁 Project Structure

```text
NCIC-Learning-Management/
├── index.html          # Semantic HTML5 web page & accessible layout
├── css/
│   └── styles.css      # NHS Digital design tokens, animated wave SVG, responsive styling & dark mode
├── js/
│   ├── data.js         # Central data store (all 135 courses, 13 categories, 7 guides, 7 FAQs)
│   └── app.js          # Interactive features (live search, multi-filtering, drawer, bookmarks)
├── OldCode.html        # Original legacy LifeRay snippet (reference archive)
└── README.md           # Documentation & maintainer guide
```

---

## ✨ Features

- **Complete Data Fidelity:** Replicates all **135 courses across 13 categories**, 7 ScribeHow & PDF guides, and 7 FAQs from the original snippet.
- **Instant Live Search:** Real-time search across course titles, categories, keywords, and delivery formats with debounce and keyword highlighting.
- **Delivery Format Multi-Filtering:** Easily filter between 👥 *Classroom*, 💻 *Virtual Classroom (MS Teams)*, and 🖥️ *e-Learning*.
- **Interactive ScribeHow Walkthroughs:** In-page modal viewer for interactive guides as well as direct link options.
- **Animated Gentle Wave Banner:** Preserves and modernizes the interactive wave banner with trigger integration into the slide-out Help Drawer.
- **Course Bookmarking:** Learners can save/shortlist courses to their browser (`localStorage`), view their saved list in the drawer, and print a summary.
- **Accordion Controls:** Quick "Expand All" / "Collapse All" actions and category quick-jump pills.
- **Accessible & Responsive:** Mobile-friendly down to small screens, keyboard accessible (ARIA compliant), high-contrast compliant, and includes a Dark Mode toggle.

---

## 🛠️ How to Update and Maintain

All content is decoupled into **`js/data.js`**. You do **not** need to edit HTML or CSS to add, modify, or remove courses or guides.

### 1. Adding or Modifying a Course
Open `js/data.js`, find the appropriate category within `CATEGORIES_DATA`, and add/edit a course object in the `courses` array:

```javascript
{
  "title": "262 Name of the New Training Course",
  "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=...",
  "delivery_type": "Classroom", // or "Virtual Classroom" or "e-Learning"
  "classes": ["btn", "Button_Classroom", "btn-block", "h-100"],
  "id": "course-1-35"
}
```

### 2. Adding a New Category
Add a new category object to `CATEGORIES_DATA` in `js/data.js`:

```javascript
{
  "name": "Digital & Information Governance",
  "color": "#005EB8", // Hex color for the category header
  "id": "cat-14",
  "icon": "computer",
  "courses": [ ... ]
}
```

### 3. Updating FAQs or Guides
In `js/data.js`:
- Edit `FAQS_DATA` to add or update questions and HTML answers.
- Edit `GUIDES_DATA` to add or update ScribeHow walkthrough URLs or PDF links.

---

## 🚀 How to Run and Deploy

### Opening Locally
Simply double-click **`index.html`** or open it in any web browser (Chrome, Edge, Safari, Firefox). No build tools, Node.js, or local servers are required!

### Hosting on GitHub Pages / SharePoint / Intranet Web Server
Upload the repository files (`index.html`, `css/`, `js/`) to any web server, GitHub Pages, Azure Static Web Apps, or an internal NHS intranet hosting platform.
