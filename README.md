# Viewpoint Atlas v4 MVP

**Viewpoint Atlas** is an intellectual gateway for exploring how ideas emerge, evolve, and shape human understanding across history, science, culture, and beyond.

Rather than providing definitive answers, Viewpoint Atlas helps readers understand the architecture of ideas themselves—how concepts connect, contradict, and change over time.

---

## 🎯 Project Philosophy

**Deeper Curiosity, Not Certainty**

Viewpoint Atlas operates on a simple principle: the world is complex, and understanding requires exploring multiple perspectives. The platform is designed to:

- **Explore ideas architecturally** – How do concepts connect and influence each other?
- **Remain neutral** – Present information without judgment or ranking
- **Encourage critical thinking** – Help readers ask better questions
- **Support investigation** – Provide tools to understand how knowledge evolves

---

## 📋 Current Features (MVP)

### 1. **Homepage**
- Hero section with project mission
- **Topic Genres** – 11 knowledge domains (History, Science, Technology, Economics, Politics, Psychology, Culture, Philosophy, Society, Media, **Conspiracy**)
- **Idea Archaeology** – 3 core lenses for understanding ideas:
  - Reverse Engineering Breakthroughs
  - Evolution of Solutions
  - Future Bottlenecks

### 2. **Concept Library**
- Simple search interface for quick concept lookup
- Lightweight support tool to reduce friction while reading
- Sample entry: "Military-Industrial Complex"
- Architecture supports internal linking from Topic pages

### 3. **Featured Topic: Conspiracy**
A comprehensive exploration of how conspiracy theories emerge, evolve, and change:

- **What is a Conspiracy?** – Definitions and terminology
- **A Brief History** – Historical context and evolution
- **Why Do Conspiracy Theories Emerge?** – 7 psychological and social factors
- **How Do Conspiracy Theories Evolve?** – 3 evolution patterns with flowcharts
- **Historical Examples** – 8 case studies (9/11, Watergate, MKUltra, etc.)
- **How Should We Think?** – Critical thinking framework
- **Questions Worth Asking** – Open-ended questions for deeper inquiry

---

## 🏗️ Project Structure

```
viewpoint-atlas-mvp/
├── client/                          # React frontend
│   ├── public/                      # Static files (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/                   # Page-level components
│   │   │   ├── Home.tsx             # Homepage with all sections
│   │   │   ├── ConspiracyTopic.tsx  # Conspiracy Featured Topic
│   │   │   ├── ConceptLibrary.tsx   # Concept Library landing
│   │   │   ├── ConceptDetail.tsx    # Individual concept pages
│   │   │   ├── About.tsx            # About page
│   │   │   └── NotFound.tsx         # 404 page
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   ├── Footer.tsx           # Footer with navigation
│   │   │   ├── GenreCard.tsx        # Topic genre card component
│   │   │   ├── IACard.tsx           # Idea Archaeology card
│   │   │   ├── ConceptSearch.tsx    # Concept search component
│   │   │   ├── ui/                  # shadcn/ui components
│   │   │   └── ErrorBoundary.tsx    # Error handling
│   │   ├── data/                    # Static data
│   │   │   └── concepts.ts          # Concept Library data
│   │   ├── contexts/                # React contexts
│   │   │   └── ThemeContext.tsx     # Theme management
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── lib/                     # Utility functions
│   │   ├── App.tsx                  # Main app component with routing
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # Global styles and design tokens
│   └── index.html                   # HTML template
├── server/                          # Express server (placeholder)
├── shared/                          # Shared types and constants
├── package.json                     # Dependencies
├── pnpm-lock.yaml                   # Lock file
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite config
└── README.md                        # This file
```

---

## 🎨 Design System

**Design Philosophy: Minimalist Knowledge Navigator**

- **Aesthetic:** Modern minimalism inspired by museum maps and library directories
- **Color Palette:** Clean white background + slate-blue accents
- **Typography:** Geist (headlines) + Inter (body text)
- **Layout:** Scalable grid-based, non-centered asymmetry
- **Interaction:** 200-250ms smooth transitions, subtle hover effects
- **Responsive:** Mobile-first, fully responsive across all devices

---

## 🚀 Getting Started

### Prerequisites
- Node.js 22.13.0+
- pnpm 10.4.1+

### Installation

```bash
# Clone the repository
git clone https://github.com/4043akaak-cloud/Viewpoint-Atlas.git
cd Viewpoint-Atlas

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server will start at `http://localhost:3000/`

### Build for Production

```bash
pnpm build
```

---

## 📂 Key Files

| File | Purpose |
|------|---------|
| `client/src/pages/Home.tsx` | Homepage with all 4 sections |
| `client/src/pages/ConspiracyTopic.tsx` | Conspiracy Featured Topic (7 sections) |
| `client/src/data/concepts.ts` | Concept Library data and search logic |
| `client/src/index.css` | Global styles and design tokens |
| `client/src/App.tsx` | Routing configuration |

---

## 🔄 Git Workflow

This project uses Git for version control with the following conventions:

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat:` – New feature
- `fix:` – Bug fix
- `docs:` – Documentation
- `style:` – Code style (no logic change)
- `refactor:` – Code refactoring
- `perf:` – Performance improvement
- `test:` – Tests
- `chore:` – Build, dependencies, etc.

**Examples:**
```
feat: Add Conspiracy Featured Topic with 7 sections
fix: Correct mobile layout for Concept Library
docs: Update README with project architecture
refactor: Simplify ConceptSearch component
```

### Branch Strategy

- **main** – Production-ready code
- **feature/*** – Feature branches for major implementations
- **bugfix/*** – Bug fix branches

**Workflow:**
1. Create feature branch: `git checkout -b feature/new-topic`
2. Make commits with clear messages
3. Push to GitHub: `git push origin feature/new-topic`
4. Create Pull Request for review
5. Merge to main after approval

---

## 📋 Development Guidelines

### Code Organization

- **Components:** Keep components small and focused
- **Reusability:** Extract shared UI into `components/` directory
- **Styling:** Use Tailwind utilities and design tokens from `index.css`
- **Data:** Keep static data in `data/` directory
- **Types:** Use TypeScript for type safety

### Design Consistency

- Use existing design tokens (colors, spacing, typography)
- Follow the established layout patterns
- Maintain responsive design across all breakpoints
- Preserve the intellectual, neutral tone

### Performance

- Lazy load components when appropriate
- Optimize images and assets
- Minimize bundle size
- Use React best practices (memoization, hooks)

---

## 🔗 Internal Linking Architecture

The project supports internal linking between sections:

- **Concept Links:** Topic pages can link to Concept Library entries
- **Topic Links:** Concept pages can reference Topic pages
- **Example Links:** Historical examples can link to dedicated topic pages

**Implementation:** Links use URL patterns like `/concepts/military-industrial-complex` and `/topics/conspiracy`

---

## 📝 Future Development

### Planned Features

1. **Additional Topic Pages** – History, Science, Technology, etc.
2. **Expanded Concept Library** – Add 14+ concept entries
3. **Topics Landing Page** – Overview of all available topics
4. **Search Functionality** – Global search across topics and concepts
5. **Related Content** – Show connections between ideas
6. **User Collections** – Allow users to save and organize ideas
7. **Timeline Views** – Visualize idea evolution over time
8. **Interactive Maps** – Explore idea relationships visually

### Scalability Considerations

- Architecture supports multiple topic pages
- Concept Library can grow to hundreds of entries
- Internal linking system is ready for expansion
- Component structure allows for easy addition of new sections

---

## 🤝 Contributing

When contributing to Viewpoint Atlas:

1. **Preserve Philosophy** – Maintain the neutral, intellectual approach
2. **Follow Conventions** – Use established code and naming patterns
3. **Document Changes** – Update README if architecture changes
4. **Test Responsiveness** – Ensure mobile and desktop compatibility
5. **Write Clear Commits** – Use meaningful commit messages

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Contact

For questions or suggestions about Viewpoint Atlas, please open an issue on GitHub.

---

**Last Updated:** July 2026  
**Version:** 4.0 MVP  
**Repository:** https://github.com/4043akaak-cloud/Viewpoint-Atlas
