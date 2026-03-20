# PM Portfolio Website - Structure Design

## 1. SECTIONS (In Order)

### Header
- Sticky navigation bar
- Logo/Name on left
- Minimal nav links (all anchor links since single page)
- Contact CTA button

### Hero
- Large headline about the case study
- Subheading with role/impact teaser
- Background image placeholder
- CTA button to Case Overview

### Case Overview
- Project title
- Quick facts (company, duration, team size, outcome)
- High-level context in 2-3 sentences
- Visual summary placeholder

### Problem
- Problem statement (what was broken/inefficient)
- Impact metrics (e.g., "manual process took 40 hours/week")
- Stakeholder pain points (3-4 bullet points)
- Supporting image/diagram placeholder

### My Role
- Title/scope of role
- Key responsibilities
- Stakeholders I worked with
- Timeline breakdown

### Solution (3 subsections)

#### a) Data Flow / Process
- Before/after process diagram
- Key data points
- System architecture placeholder

#### b) Key Fixes
- 3-4 major decisions/implementations
- How each solved a problem
- Metrics or validation

#### c) Architecture Decisions
- Why certain approaches were chosen
- Trade-offs considered
- Technical/UX decisions

### Artifacts
- Jira board screenshot placeholder
- Wireframes/mockups placeholder
- UI design placeholder
- Clickable prototype link or screenshot
- Captions explaining each artifact

### Results
- Quantified outcomes (e.g., "saved 40 hours/week", "16% increase in accuracy")
- Qualitative outcomes (feedback, adoption)
- Team/stakeholder impact
- Timeline to value achieved

### How I Work
- Core principles (3-4 key statements about PM/BA approach)
- Methodology highlights
- Collaboration approach
- What you should know about working with me

### Contact
- Email
- LinkedIn
- Optional: availability for opportunities
- Simple contact form or links

---

## 2. COMPONENT HIERARCHY

```
<App />
├── <Header />
├── <Hero />
├── <Section> wrapper (reusable)
│   ├── Case Overview
│   ├── Problem
│   ├── MyRole
│   ├── Solution (integrated storytelling)
│   ├── Artifacts
│   ├── Results
│   ├── HowIWork
│   └── Contact
```

---

## 3. COMPONENTS BREAKDOWN

### Layout Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `App` | Main container, routing/scroll management | - |
| `Header` | Sticky navigation | `navLinks: string[]` |
| `Section` | Wrapper for all content sections | `id, title, children, bgColor?` |

### Content Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `Hero` | Landing section with visual | `title, subtitle, bgImage?` |
| `CaseOverview` | Quick facts about project | `title, duration, teamSize, outcome` |
| `Problem` | Problem statement & impact | `statement, metrics, painPoints` |
| `MyRole` | Role and responsibilities | `title, responsibilities, stakeholders` |
| `Solution` | Integrated storytelling: process, fixes, decisions | `dataFlow, keyFixes, architectureDecisions` |
| `Artifacts` | Gallery of work | `artifacts: { type, image, caption }[]` |
| `Results` | Outcomes and metrics | `quantitative, qualitative, timeline` |
| `HowIWork` | PM/BA principles | `principles: string[]` |
| `Contact` | Contact info & CTA | `email, linkedin, cta?` |

### Utility Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `ImagePlaceholder` | Consistent placeholder styling | `caption, ratio?` |

---

## 4. FILE STRUCTURE

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── CaseOverview.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── MyRole.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── Artifacts.tsx
│   │   │   ├── Results.tsx
│   │   │   ├── HowIWork.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── shared/
│   │       ├── ImagePlaceholder.tsx
│   │       └── Button.tsx
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   │
│   ├── data/
│   │   └── portfolio-content.ts (all static content)
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── public/
│   └── images/ (placeholder images)
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. STYLING STRATEGY

- **Global CSS**: Typography, spacing system, color variables
- **Component CSS**: Minimal, CO-located with components (CSS modules or inline)
- **No utility libraries** (no Tailwind, shadcn)
- **CSS Variables** for consistency:
  ```css
  --max-width: 1000px;
  --spacing-unit: 1rem;
  --color-primary: #000;
  --font-size-base: 16px;
  ```

---

## 6. CONTENT DATA STRUCTURE

All content centralized in `portfolio-content.ts`:

```typescript
type CaseStudy = {
  hero: { title, subtitle, bgImage }
  caseOverview: { title, duration, teamSize, outcome, context }
  problem: { statement, metrics, painPoints }
  myRole: { title, responsibilities, stakeholders, timeline }
  solution: { 
    dataFlow: { beforeImage, afterImage, description },
    keyFixes: { title, description }[],
    architectureDecisions: { title, reason, tradeoff }[]
  }
  artifacts: { jira, diagrams, ui, prototype }
  results: { quantitative, qualitative, timeline }
  howIWork: { principles, methodology, collaboration }
  contact: { email, linkedin }
}
```

---

## 7. KEY DESIGN DECISIONS

| Decision | Reason |
|----------|--------|
| Single Page | Case study focused, narrative flow |
| Section Component | Consistency, maintainability |
| Unified Solution Block | Preserves storytelling, avoids fragmentation |
| Centralized Content | Easy updates, separates data from UI |
| No UI Library | Lightweight, custom control over design |
| Sticky Header | Navigation stays accessible |
| Max Width 1000px | Readable line length, professional |
| White Background | Clean, case study focused (not distracting) |

---

## 8. READY-TO-RUN CHECKLIST

- [ ] Vite + React + TypeScript configured
- [ ] All components created (9 total content sections)
- [ ] Global styles + CSS variables
- [ ] Content data structure populated with placeholders
- [ ] Images: placeholder URLs with captions
- [ ] package.json scripts: `dev`, `build`, `preview`
- [ ] No third-party UI libraries
- [ ] Responsive (mobile-friendly styling)
- [ ] Anchor links for navigation working
