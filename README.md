# Viewpoint Atlas

> **Viewpoint Atlas exists to help people explore how humanity understands the world.**
>
> We do not seek to provide definitive answers.
>
> We seek to create an environment where curiosity grows through exploration, comparison, and connected ideas.
>
> Every design decision, feature, and piece of content should support this mission.

---

## 🎯 Project Vision

**Viewpoint Atlas** is an intellectual gateway for exploring how ideas emerge, evolve, and shape human understanding across history, science, culture, and beyond.

Rather than providing definitive answers, Viewpoint Atlas helps readers understand the **architecture of ideas themselves**—how concepts connect, contradict, and change over time.

The platform embodies a simple belief: **the world is complex, and understanding requires exploring multiple perspectives.**

---

## 🧭 Core Philosophy

### Curiosity Over Certainty

We prioritize helping people ask better questions over providing final answers. The goal is deeper understanding, not ideological conclusion.

### Encourage Exploration

Every page should naturally encourage further exploration. Internal links are not just navigation—they are part of the learning experience.

### Present Multiple Viewpoints

When appropriate, show how different perspectives approach the same question. Avoid forcing ideological conclusions.

### Build a Knowledge Network

Topics are not isolated articles. They are nodes in a connected knowledge network where ideas relate to and inform each other.

### Concept Library as Support

The Concept Library exists to reduce friction while reading, not to become the main destination. It is a lightweight tool for understanding unfamiliar terms.

### Simplicity and Clarity

Simplicity is preferred over unnecessary complexity. Every feature should serve the core mission of helping people explore ideas.

---

## 🏗️ Architecture Overview

Viewpoint Atlas is built as a **static React application** with a scalable component architecture designed to support hundreds of topics and thousands of concepts.

### Core Components

- **Homepage** – Entry point with Topic Genres and Idea Archaeology lenses
- **Topic Pages** – Deep explorations of individual subjects (e.g., Conspiracy)
- **Concept Library** – Lightweight reference tool for key terms
- **Navigation System** – Persistent header and footer for easy exploration

### Design Principles

- **Minimalist Knowledge Navigator** – Clean, elegant, focused on content
- **Mobile-First** – Responsive across all devices
- **Intellectual Tone** – Academic, neutral, encouraging critical thinking
- **Visual Hierarchy** – Clear structure with generous whitespace

---

## 📂 Folder Structure

```
viewpoint-atlas-mvp/
├── client/                          # React frontend
│   ├── public/                      # Static files
│   ├── src/
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.tsx             # Homepage
│   │   │   ├── ConspiracyTopic.tsx  # Topic pages
│   │   │   ├── ConceptLibrary.tsx   # Concept landing
│   │   │   ├── ConceptDetail.tsx    # Concept pages
│   │   │   ├── About.tsx            # About page
│   │   │   └── NotFound.tsx         # 404 page
│   │   ├── components/              # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── GenreCard.tsx
│   │   │   ├── IACard.tsx
│   │   │   ├── ConceptSearch.tsx
│   │   │   └── ui/                  # shadcn/ui components
│   │   ├── data/                    # Static data
│   │   │   └── concepts.ts
│   │   ├── contexts/                # React contexts
│   │   ├── hooks/                   # Custom hooks
│   │   ├── lib/                     # Utilities
│   │   ├── App.tsx                  # Main app with routing
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Global styles
│   └── index.html
├── server/                          # Express server
├── shared/                          # Shared types
├── docs/                            # Project documentation
│   ├── CONSTITUTION.md              # Development principles
│   ├── Vision.md                    # Long-term vision
│   ├── Philosophy.md                # Design philosophy
│   ├── Architecture.md              # Technical architecture
│   ├── Roadmap.md                   # Future phases
│   ├── Content-Workflow.md          # How to add topics
│   ├── Idea-Seeds.md                # Future content ideas
│   └── UX-Principles.md             # UX philosophy
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md                        # This file
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + TypeScript |
| **Styling** | Tailwind CSS 4 + shadcn/ui |
| **Routing** | Wouter |
| **Build** | Vite |
| **Package Manager** | pnpm |
| **Version Control** | Git + GitHub |

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

Development server: `http://localhost:3000/`

### Build for Production

```bash
pnpm build
```

---

## 📝 Development Workflow

### Commit Message Convention

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat:` – New feature
- `fix:` – Bug fix
- `docs:` – Documentation
- `refactor:` – Code refactoring
- `perf:` – Performance
- `style:` – Code style
- `test:` – Tests
- `chore:` – Build/dependencies

**Examples:**
```
feat: Add History topic page with 5 sections
fix: Correct mobile layout for Concept Library
docs: Update Architecture.md with new component structure
refactor: Simplify ConceptSearch component
```

### Branch Strategy

- **main** – Production-ready code
- **feature/*** – Feature branches for major implementations
- **bugfix/*** – Bug fix branches

**Workflow:**
```bash
# Create feature branch
git checkout -b feature/new-topic

# Make commits
git commit -m "feat: Add new topic"

# Push to GitHub
git push origin feature/new-topic

# Create Pull Request on GitHub
# After review, merge to main
```

---

## 📚 Current Features (MVP)

### Homepage
- **Hero Section** – Project mission and introduction
- **Topic Genres** – 11 knowledge domains
- **Idea Archaeology** – 3 lenses for understanding ideas

### Concept Library
- Search interface for quick concept lookup
- Lightweight support tool
- Sample entry: "Military-Industrial Complex"
- Ready for internal linking

### Featured Topic: Conspiracy
- 7 comprehensive sections
- Neutral, intellectual approach
- Flowcharts and visual organization
- Historical examples with case studies
- Critical thinking framework

---

## 🔮 Future Expansion

### Phase 2: Topic Expansion
- History, Science, Technology, Economics, Politics topics
- Each with 5-7 sections
- Internal linking between topics

### Phase 3: Concept Library Growth
- 100+ concept entries
- Automatic linking from topics
- Related concepts network

### Phase 4: Advanced Features
- Global search
- User collections
- Timeline visualizations
- Interactive idea maps

### Phase 5: Community & Collaboration
- User contributions
- Peer review system
- Multiple languages
- Community translations

---

## 🤝 Contribution Guidelines

Before implementing new features, always refer to:
1. **docs/CONSTITUTION.md** – Development principles
2. **docs/Philosophy.md** – Design philosophy
3. **docs/Content-Workflow.md** – How to add topics

### Key Principles

- **Preserve Philosophy** – Maintain neutral, intellectual approach
- **Follow Conventions** – Use established patterns
- **Document Changes** – Update docs if architecture changes
- **Test Responsiveness** – Mobile and desktop compatibility
- **Write Clear Commits** – Meaningful commit messages

---

## 📖 Documentation

All project documentation is in the `/docs` folder:

- **CONSTITUTION.md** – Permanent development principles
- **Vision.md** – Long-term purpose and goals
- **Philosophy.md** – Design and UX philosophy
- **Architecture.md** – Technical architecture details
- **Roadmap.md** – Development phases and timeline
- **Content-Workflow.md** – How to implement new topics
- **Idea-Seeds.md** – Future content ideas
- **UX-Principles.md** – UX design philosophy

---

## 🔗 Links

- **GitHub Repository:** https://github.com/4043akaak-cloud/Viewpoint-Atlas
- **Live Site:** (Coming soon)
- **Issues & Discussions:** GitHub Issues

---

## 📄 License

MIT License – See LICENSE file for details

---

**Version:** 4.0 MVP  
**Last Updated:** July 2026  
**Maintained by:** Viewpoint Atlas Team

---

## 🎓 The Viewpoint Atlas Principle

> We believe that understanding comes not from certainty, but from curiosity.
>
> Every feature, every design decision, every piece of content should serve this principle.
>
> Viewpoint Atlas is not a destination. It is a gateway to deeper exploration.
>
> Welcome to the architecture of ideas.
