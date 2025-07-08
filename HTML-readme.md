# Lilly Design — HTML README

## Overview

This project’s HTML structure follows the **Fibonacci Plan**, a design and development philosophy based on the **Fibonacci sequence**, **Golden Ratio**, and **Rule of Thirds**.

The goal is to create a harmonious, scalable, and elegant markup structure that reflects these timeless design principles both visually and in the source code itself.

---

## Naming Conventions

### Semantic Compression Across Nesting Levels

To mirror the golden ratio visually and semantically, class and ID names compress in verbosity as we nest deeper:

| Nesting Level | Naming Format            | Example           | Notes                                 |
| ------------- | ------------------------ | ----------------- | ------------------------------------- |
| Level 1       | Full-word verbose        | `section-5-main`  | Used for major page sections          |
| Level 2       | Abbreviated but readable | `b-3-header`      | For blocks/components inside sections |
| Level 3+      | Further compressed       | `b2-hd`, `u1-txt` | For smaller elements and utilities    |

### Commenting

Compressed class names **must** be commented inline to ensure clarity and maintainability.

```html
<div class="b2-hd"><!-- block-2 header --></div>
```

<!Edit order strategy

We follow a stepwise approach to avoid conflicts and ensure functionality:

    Global container (section-1)

    Landing page wrapper and children (section-2-landing, blocks)

    Main page wrapper (section-3-main)

    Core blocks (headers, intro, services, etc.)

    Nested components (service cards, buttons)

    Footer and auxiliary sections

No CSS or JS changes before corresponding HTML is finalized.
Coding Style & Best Practices

    Use semantic HTML5 elements where possible.

    Maintain accessibility and ARIA standards.

    Keep nesting levels shallow (preferably ≤3).

    Use consistent indentation and spacing following Fibonacci-inspired rhythm.

    Always prioritize function over form.

Summary

This README will evolve as the project grows. For detailed guidelines on CSS and JavaScript, refer to their respective README files.


Session Summary — Lilly Design Studio

    Refactored landing page and main content HTML structure for clarity and semantic organization.

    Integrated the Lilly icon button with proper sizing and positioning.

    Added service cards with inline SVG icons next to headings, sized proportionally and aligned horizontally.

    Fine-tuned CSS to align icons vertically with text baseline using relative positioning and transform.

    Discussed Fibonacci-based spacing and aesthetic principles for layout consistency.

    Resolved button sizing and icon placement issues with flexbox and padding adjustments.

    Achieved seamless integration of SVG icons into headings reflecting project’s organic & expressive style.

Next Steps:
Continue refining service cards layout, enhance interactivity, and polish typography & spacing according to Fibonacci plan.
