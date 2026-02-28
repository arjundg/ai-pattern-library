# AI Pattern Library

A searchable, interactive web app cataloging proven **AI engineering patterns** — RAG, chain-of-thought, tool use, memory, agents, and more — with explanations, architecture diagrams, runnable Python examples, and real-world gotchas.

**[Live Demo →](https://yourusername.github.io/ai-pattern-library/)**

## Why?

Educational content about AI patterns is scattered across blog posts, papers, and tutorials. This project provides a **structured, executable reference** that developers can search, browse, and learn from interactively.

## Features

- **10 AI Patterns** covering retrieval, reasoning, tool use, memory, agents, evaluation, orchestration, and safety
- **Searchable & Filterable** — find patterns by category, difficulty, or keyword
- **Interactive Playground** — run Python examples directly in the browser using Pyodide
- **Architecture Diagrams** — Mermaid-powered visual explanations
- **Gotchas & Tips** — real-world pitfalls from production experience
- **Static Site** — fast, no server needed, hosted on GitHub Pages

## Patterns Included

| Pattern | Category | Difficulty |
|---------|----------|------------|
| Retrieval-Augmented Generation (RAG) | Retrieval | Intermediate |
| Hybrid Search for RAG | Retrieval | Advanced |
| Chain-of-Thought Prompting | Reasoning | Beginner |
| Self-Consistency | Reasoning | Intermediate |
| Tree-of-Thought | Reasoning | Advanced |
| Tool Use / Function Calling | Tool Use | Intermediate |
| Conversational Memory | Memory | Intermediate |
| ReAct Agent | Agents | Advanced |
| LLM-as-Judge Evaluation | Evaluation | Intermediate |
| Prompt Routing & Orchestration | Orchestration | Intermediate |
| Output Guardrails & Validation | Safety | Intermediate |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-pattern-library.git
cd ai-pattern-library

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321/ai-pattern-library/` to browse locally.

## Project Structure

```
ai-pattern-library/
├── src/
│   ├── content/
│   │   └── patterns/          # MDX pattern files
│   ├── components/
│   │   ├── PatternCard.astro  # Pattern grid card
│   │   ├── SearchFilter.astro # Search + filter UI
│   │   ├── Playground.astro   # Runnable code editor
│   │   └── Callout.astro      # Tip/warning/gotcha boxes
│   ├── layouts/
│   │   └── BaseLayout.astro   # Site layout
│   └── pages/
│       ├── index.astro        # Homepage
│       ├── about.astro        # About page
│       └── patterns/
│           └── [slug].astro   # Dynamic pattern pages
├── .github/workflows/
│   └── deploy.yml             # GitHub Pages deployment
├── CONTRIBUTING.md            # How to add patterns
└── package.json
```

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build static site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to add new patterns.

**Quick version:**
1. Create a `.mdx` file in `src/content/patterns/`
2. Follow the template with frontmatter, explanation, diagram, code, and gotchas
3. Submit a PR

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **[MDX](https://mdxjs.com)** — Markdown with components
- **[Mermaid](https://mermaid.js.org)** — Architecture diagrams
- **[Pyodide](https://pyodide.org)** — In-browser Python runtime
- **GitHub Pages** — Hosting

## License

MIT
