# Lab Website Construction Plan

## Current Status: Phase 1 (Basic Framework)
- [x] Initial directory structure.
- [x] Basic HTML skeleton with Navigation.
- [x] Smooth scrolling to anchor points.
- [ ] Manual content population.

## Phase 1: Basic Skeleton (Current)
- `index.html`: Setup `<nav>` with `#team`, `#publications`, `#projects`, `#news`, `#contact`.
- `css/style.css`: 
  - Basic reset and typography.
  - Sticky navbar.
  - Smooth scroll behavior.
  - Section placeholders with distinctive heights/paddings.

## Phase 2: Content Population (Next)
- **Team**: Manually add member names and research interests.
- **Publications**: List papers manually in a clean `<ul>` or `<ol>` format.
- **Contact**: Paste the iframe code from Microsoft Forms.

## Phase 3: Advanced Integrations (Future/Advanced)
- **Responsive Navigation (Hamburger Menu)**: 
  - Implement a mobile-friendly navigation bar that collapses into a "hamburger" icon on smaller screens (max-width: 768px).
  - Use CSS `position: fixed` and `transition` for a smooth slide-out drawer effect.
  - Requires JavaScript to toggle an `.active` class on the menu container.
- **GitHub API**: Write JavaScript to fetch and display repositories automatically.
- **ResearchGate Integration**: Design a custom "View on ResearchGate" button and link.
- **LinkedIn Integration**: Embed LinkedIn "News" snippets or a profile badge.
- **Advanced Styling**:
  - **Typography**: Use `rem` for spacing (`letter-spacing`, `line-height`) to ensure readability and scalability.
  - **Interactions**: Add hover effects to navigation links (e.g., `border-bottom` transition) for better UX.

## Technical Notes for Reference
- **Anchor Navigation**: Use `<section id="xxx">` and `<a href="#xxx">`.
- **Sticky Header Fix**: Use `scroll-margin-top` in CSS to prevent the fixed header from covering section titles.
- **Navigation Styling**:
  - Use Flexbox (`align-items: center`, `gap`) for vertical alignment of Logo and Text.
  - Hover effect: `border-bottom: 2px solid #color` with `transition` is preferred over simple `text-decoration: underline`.
- **Deployment**: GitHub Pages looks for `index.html` in the root directory.
