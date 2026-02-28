# Contributing to AI Pattern Library

Thank you for your interest in contributing! This project thrives on community contributions.

## How to Add a New Pattern

### 1. Fork and Clone

```bash
git clone https://github.com/arjundg/ai-pattern-library.git
cd ai-pattern-library
npm install
```

### 2. Create a Pattern File

Create a new `.mdx` file in `src/content/patterns/`:

```
src/content/patterns/your-pattern-name.mdx
```

### 3. Use the Pattern Template

Every pattern file needs frontmatter and follows this structure:

```mdx
---
title: "Your Pattern Name"
description: "One-sentence description of what this pattern does."
category: "retrieval" # One of: retrieval, reasoning, tool-use, memory, agents, evaluation, orchestration, safety
difficulty: "intermediate"  # One of: beginner, intermediate, advanced
tags: ["tag1", "tag2", "tag3"]
relatedPatterns: ["other-pattern-slug"]  # Optional
lastUpdated: "2026-01-15"
---

import Callout from '../../components/Callout.astro';
import Playground from '../../components/Playground.astro';

## Overview

Explain what this pattern is and why it matters. 2-3 paragraphs.

## When to Use

- Bullet list of scenarios where this pattern is appropriate

## Architecture

\`\`\`mermaid
flowchart LR
    A[Input] --> B[Process] --> C[Output]
\`\`\`

## How It Works

Detailed explanation of the pattern mechanics.

## Implementation

<Playground code={`# Runnable Python example
print("Hello from the pattern!")
`} />

## Gotchas & Best Practices

<Callout type="danger" title="Critical Warning">
  Most important pitfall to avoid.
</Callout>

<Callout type="tip" title="Pro Tip">
  Helpful advice for practitioners.
</Callout>

## Variations

- **Variation A** — Brief description
- **Variation B** — Brief description

## Further Reading

- [Paper Title (Author, Year)](https://arxiv.org/abs/...)
- [Resource Name](https://example.com)
```

### 4. Guidelines

- **Runnable Code**: Python examples in `<Playground>` must run in the browser via Pyodide (no external API calls, no pip installs — use pure Python)
- **Diagrams**: Use Mermaid syntax in fenced code blocks (` ```mermaid `)
- **Callouts**: Use `<Callout type="danger|warning|tip|info">` for gotchas and tips
- **Links**: Include references to papers, docs, and tools
- **Be Practical**: Focus on real-world implementation, not just theory

### 5. Test Locally

```bash
npm run dev
```

Visit `http://localhost:4321/ai-pattern-library/` and verify your pattern renders correctly.

### 6. Submit a PR

1. Commit your changes
2. Push to your fork
3. Open a Pull Request with a clear description of the pattern

## Other Contributions

- **Fix typos or improve explanations** — Always welcome!
- **Add better code examples** — Make them more realistic or educational
- **Improve diagrams** — Make architecture clearer
- **Report issues** — Found a bug or inaccuracy? Open an issue
- **Suggest patterns** — Open an issue with the pattern idea

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build static site
npm run preview  # Preview production build
```

## Code of Conduct

Be kind, constructive, and respectful. We're all here to learn.
