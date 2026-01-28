# Lab Website Construction Plan

## 1. Project Overview
- **Goal**: Create a single-page lab website hosted on GitHub Pages.
- **Tech Stack**: HTML5, CSS3, Vanilla JavaScript (No frameworks).
- **Theme**: Clean, academic, responsive.

## 2. Architecture & Files
- `index.html`: The main structure.
- `css/style.css`: All styling (Flexbox/Grid).
- `js/script.js`: Navigation logic and dynamic content loading.
- `assets/`: Images (logos, team photos).

## 3. Detailed Implementation Steps

### Phase 1: Skeleton & Navigation
- Create a sticky navigation bar with smooth scrolling to anchors (`#team`, `#publications`, `#projects`, `#news`, `#contact`).
- Design a Hero section (Lab Title, Subtitle, Background).

### Phase 2: Team Section
- Layout: Grid system.
- Content: Member cards (Photo, Name, Role, Short Bio).

### Phase 3: "Embed" Strategies (Technical Reality Check)
- **Publications (ResearchGate)**: 
  - *Constraint*: RG does not allow direct iframe embedding of paper lists due to security headers.
  - *Solution*: Create a stylish "Selected Publications" list manually in HTML, plus a prominent "View on ResearchGate" button.
- **Projects (GitHub)**:
  - *Solution*: Use Vanilla JS to fetch from `https://api.github.com/users/{username}/repos` to dynamically generate project cards, or fallback to manual cards if the API limit is a concern.
- **News (LinkedIn)**:
  - *Constraint*: LinkedIn embeds are restrictive for personal profiles.
  - *Solution*: "Latest News" timeline (manually updated HTML) + "Connect on LinkedIn" badge.

### Phase 4: Contact
- **Method**: Embed Microsoft Forms via `<iframe>`.
- **Styling**: Ensure the iframe is responsive (width: 100%).

### Phase 5: Polish & Deploy
- Add simple animations (hover effects).
- Ensure mobile responsiveness (media queries).
- Push to GitHub and enable Pages.