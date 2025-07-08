# Fibonacci Plan — Project Rewrite Strategy

## 🧠 Guiding Philosophy

All design and structural decisions will adhere to:

- The Fibonacci Sequence (1, 2, 3, 5, 8, 13, 21…)
- The Golden Ratio (≈ 1.618)
- The Rule of Thirds

> ⚠️ Function always takes precedence over form.

---

## 🗂️ Step 1: Codify Naming Conventions

To maintain consistency across HTML, CSS, and JS, all classes, IDs, and other object identifiers will follow structured, meaningful rules:

### 🔤 Class and ID Naming Rules

| Type            | Format                        | Example                          | Notes                                    |
| --------------- | ----------------------------- | -------------------------------- | ---------------------------------------- |
| Sections        | `section-n` (Fibonacci index) | `section-1`, `section-5`         | Use for major page divisions             |
| Components      | `block-n-name`                | `block-3-header`                 | For modular reusable elements            |
| Utility/Global  | `util-purpose`                | `util-center`, `util-phi-margin` | Used across multiple blocks              |
| JS Hooks        | `data-js-role="action-name"`  | `data-js-role="nav-toggle"`      | For JS interactivity; no class conflicts |
| Ratios          | `golden-*-*`                  | `golden-padding-top`             | Reflect layout logic tied to ratios      |
| Fibonacci Grids | `f-grid-n`                    | `f-grid-3`, `f-grid-5`           | Used to define layout regions            |

---

## 🔁 Step 2: Edit Order Plan

To prevent mismatches between HTML, CSS, and JS during the rewrite, follow this **strict block-by-block strategy**:

### 1. 🏗️ HTML Structural Pass (Skeleton)

- Rewrite layout with structural divs in Fibonacci-structured hierarchy.
- Use naming conventions above.
- Add HTML comments marking Fibonacci sections and purpose.

### 2. 🎨 CSS Alignment

- Update CSS selectors to match new HTML structure.
- Apply golden spacing, Fibonacci padding/margin, font scales.
- Define visual rhythm using CSS variables where appropriate.

### 3. ⚙️ JS Integration

- Refactor JS selectors to match new class/ID patterns.
- Maintain clean separation between logic and style.
- Ensure interactivity doesn’t break function during layout transitions.

### 4. 🧪 Testing & Tuning (Ongoing)

- After each block, test visual and interactive elements.
- Check for layout integrity, class selector matching, JS functionality.

---

## 📌 Block Rewrite Strategy

### Example Fibonacci-Based Structure

| Order | Block Name   | Notes                                  |
| ----- | ------------ | -------------------------------------- |
| 1     | `section-1`  | Intro wrapper or meta                  |
| 2     | `section-2`  | Header/Nav                             |
| 3     | `section-3`  | Main hero/title                        |
| 4     | `section-5`  | Content group (cards, features)        |
| 5     | `section-8`  | Telemetry/sidebar or alternate content |
| 6     | `section-13` | Extended content or portfolio          |
| 7     | `section-21` | Footer, social, copyright              |

We’ll implement each block in this order to reduce backtracking and ensure CSS/JS remain in sync.

---

## 🧾 Final Notes

- **No CSS or JS edits before corresponding HTML block is finalized.**
- All elements must be semantically valid and accessible (WAI-ARIA when applicable).
- Visual hierarchy will reflect not only golden/Fibonacci ratios, but also storytelling flow.

---
