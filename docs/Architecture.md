# Viewpoint Atlas Architecture

**The technical architecture of Viewpoint Atlas.**

---

## 🏗️ System Overview

Viewpoint Atlas is built as a **static React application** with a modular component architecture designed for scalability.

```
┌─────────────────────────────────────┐
│     React Frontend (Client)         │
│  ┌─────────────────────────────────┐│
│  │  Pages (Home, Topics, Concepts) ││
│  │  Components (Header, Cards)     ││
│  │  Routing (Wouter)               ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│    Static Data & Routing            │
│  ┌─────────────────────────────────┐│
│  │  Concepts Data (concepts.ts)    ││
│  │  Route Configuration (App.tsx)  ││
│  │  Design Tokens (index.css)      ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│    Build & Deployment               │
│  ┌─────────────────────────────────┐│
│  │  Vite (Build Tool)              ││
│  │  Static Hosting                 ││
│  │  CDN Distribution               ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

---

## 📁 Directory Structure

### `/client/src/pages/`

Page components represent major sections of the site:

- **Home.tsx** – Homepage with Hero, Topic Genres, Idea Archaeology
- **ConspiracyTopic.tsx** – Example topic page with 7 sections
- **ConceptLibrary.tsx** – Concept Library landing page
- **ConceptDetail.tsx** – Individual concept pages
- **About.tsx** – About page
- **NotFound.tsx** – 404 error page

Each page is a self-contained component that handles its own layout and content.

### `/client/src/components/`

Reusable UI components:

- **Header.tsx** – Navigation header with logo and menu
- **Footer.tsx** – Footer with navigation and links
- **GenreCard.tsx** – Topic genre card component
- **IACard.tsx** – Idea Archaeology card component
- **ConceptSearch.tsx** – Search interface for concepts
- **ui/** – shadcn/ui component library
- **ErrorBoundary.tsx** – Error handling wrapper

Components are designed to be:

- **Reusable:** Used across multiple pages
- **Modular:** Self-contained with clear props
- **Testable:** Easy to test in isolation
- **Accessible:** Built with accessibility in mind

### `/client/src/data/`

Static data structures:

- **concepts.ts** – Concept Library data and search logic

This file contains:

```typescript
interface Concept {
  id: string;
  title: string;
  definition: string;
  whyItMatters: string;
  relatedTopics: string[];
}

const concepts: Concept[] = [
  // Concept entries
];

function searchConcepts(query: string): Concept[] {
  // Search logic
}
```

### `/client/src/contexts/`

React context providers:

- **ThemeContext.tsx** – Theme management (light/dark mode)

Contexts are used for global state that multiple components need access to.

### `/client/src/lib/`

Utility functions:

- **utils.ts** – Common utilities (classname merging, etc.)

### `/client/src/index.css`

Global styles and design tokens:

- CSS variables for colors, spacing, typography
- Tailwind configuration
- Global component styles
- Responsive design utilities

---

## 🔄 Data Flow

### Topic Pages

```
App.tsx (Router)
  ↓
ConspiracyTopic.tsx (Page Component)
  ├─ Header (Component)
  ├─ Hero Section (JSX)
  ├─ Content Sections (JSX)
  │  ├─ Text content
  │  ├─ Lists and cards
  │  └─ Internal links
  └─ Footer (Component)
```

### Concept Search

```
ConceptLibrary.tsx (Page)
  ↓
ConceptSearch.tsx (Component)
  ├─ User types in search box
  ├─ searchConcepts(query) from concepts.ts
  ├─ Results displayed
  └─ User clicks result → ConceptDetail.tsx
```

### Routing

```
App.tsx (Router)
  ├─ "/" → Home.tsx
  ├─ "/concepts" → ConceptLibrary.tsx
  ├─ "/concepts/:id" → ConceptDetail.tsx
  ├─ "/topics/conspiracy" → ConspiracyTopic.tsx
  ├─ "/about" → About.tsx
  └─ "*" → NotFound.tsx
```

---

## 🎨 Design System

### CSS Architecture

**Layer 1: Design Tokens** (CSS Variables)

```css
:root {
  --primary: oklch(0.623 0.214 259.815);
  --background: oklch(1 0 0);
  --foreground: oklch(0.235 0.015 65);
  /* ... more tokens ... */
}
```

**Layer 2: Tailwind Utilities**

```html
<div class="bg-background text-foreground p-6 rounded-lg">
  Content
</div>
```

**Layer 3: Component Styles**

```tsx
export function Card({ children }) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg p-6">
      {children}
    </div>
  );
}
```

### Color System

| Token | Value | Usage |
|-------|-------|-------|
| primary | Slate Blue | Accents, links, CTAs |
| background | White | Page background |
| foreground | Charcoal | Text |
| card | White | Card backgrounds |
| border | Light Gray | Borders |
| accent | Light Gray | Secondary accents |

---

## 🚀 Build & Deployment

### Build Process

```bash
# Development
pnpm dev
→ Vite dev server at localhost:3000
→ Hot module replacement enabled
→ Fast rebuild on changes

# Production
pnpm build
→ Vite builds optimized bundle
→ Output in dist/ folder
→ Ready for static hosting
```

### Deployment

The built site is a static HTML/CSS/JavaScript bundle:

- No server required
- Can be deployed to any static hosting
- CDN-friendly
- Fast loading times

---

## 📊 Scalability Considerations

### Adding New Topics

To add a new topic:

1. Create `/client/src/pages/[TopicName]Topic.tsx`
2. Follow the same structure as ConspiracyTopic.tsx
3. Add route to App.tsx
4. Update navigation links

### Adding New Concepts

To add a new concept:

1. Add entry to `concepts.ts`
2. Search automatically includes it
3. ConceptDetail.tsx automatically renders it

### Adding New Components

To add a new component:

1. Create `/client/src/components/[ComponentName].tsx`
2. Export from component file
3. Import and use in pages

---

## 🔐 Security Considerations

### Static Site Security

Since Viewpoint Atlas is a static site:

- No server-side code execution
- No database vulnerabilities
- No authentication needed (for MVP)
- Content is version-controlled in Git

### Content Security

- All content is human-written
- No user-generated content (for MVP)
- No external scripts (except analytics)
- All links are internal or to trusted sources

---

## ♿ Accessibility Architecture

### Semantic HTML

All pages use semantic HTML:

```tsx
<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Title</h1>
    <section>...</section>
  </article>
</main>
<footer>...</footer>
```

### ARIA Labels

Components use ARIA labels where needed:

```tsx
<button aria-label="Search concepts">
  <SearchIcon />
</button>
```

### Focus Management

- Focus indicators are visible
- Tab order is logical
- Skip links for keyboard users

---

## 📈 Performance Optimization

### Code Splitting

- Each page is a separate component
- Lazy loading for large components
- Tree-shaking removes unused code

### Image Optimization

- Images are optimized for web
- Responsive images with srcset
- Lazy loading for below-fold images

### CSS Optimization

- Tailwind purges unused styles
- CSS is minified
- Critical CSS is inlined

### JavaScript Optimization

- Minimal JavaScript
- No unnecessary dependencies
- Code is minified and gzipped

---

## 🔄 Future Architecture Changes

### Phase 2: Backend Integration

If user accounts or dynamic content is needed:

```
React Frontend
    ↓
Express Backend
    ↓
Database
```

### Phase 3: API Integration

If external data is needed:

```
React Frontend
    ↓
API Gateway
    ↓
External APIs
```

### Phase 4: Real-time Features

If real-time updates are needed:

```
React Frontend
    ↓
WebSocket Server
    ↓
Real-time Database
```

---

## 🧪 Testing Strategy

### Unit Tests

Test individual components and utilities:

```bash
pnpm test
```

### Integration Tests

Test component interactions:

```bash
pnpm test:integration
```

### E2E Tests

Test user flows:

```bash
pnpm test:e2e
```

---

## 📝 Development Workflow

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Make changes
# Changes auto-reload

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-topic

# Make changes and commit
git commit -m "feat: Add new topic"

# Push to GitHub
git push origin feature/new-topic

# Create Pull Request
# After review, merge to main
```

---

**Version:** 1.0  
**Created:** July 2026

This architecture is designed to be scalable, maintainable, and easy to extend as Viewpoint Atlas grows.
