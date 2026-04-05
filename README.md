<p align="center">
  <img src="https://img.shields.io/badge/SynthOps-AI%20Workflow%20Generator-blueviolet?style=for-the-badge" alt="SynthOps Badge" />
</p>

<h1 align="center">⚡ SynthOps</h1>

<p align="center">
  <strong>Describe your automation, and get a ready-to-run n8n workflow.</strong><br/>
  No manual wiring. No repetitive setup. Just prompt and generate.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

---

## 🧠 What is SynthOps?

**SynthOps** is an AI-powered workflow generator for [n8n](https://n8n.io/). It takes a plain-language description of your desired automation and produces a complete, ready-to-import n8n workflow — fully wired, configured, and executable.

Stop spending hours dragging nodes and connecting edges. Describe what you want, and let SynthOps build it for you.

---

## ✨ Features

- **🗣️ Prompt-to-Workflow** — Describe your automation in plain English and receive a fully structured n8n workflow JSON.
- **🔗 Auto-Wired Connections** — Nodes are automatically connected with the correct inputs, outputs, and data mappings.
- **📦 Ready-to-Import** — Generated workflows can be directly imported into any n8n instance.
- **🧩 Smart Node Selection** — AI intelligently selects the right n8n nodes (HTTP Request, Webhook, IF, Set, Code, etc.) based on your description.
- **⚡ Zero Manual Setup** — No repetitive drag-and-drop or manual configuration required.

---

## 🔄 How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────────┐
│  Describe your   │────▶│  AI processes &   │────▶│  Ready-to-run n8n   │
│  automation      │     │  generates nodes  │     │  workflow JSON      │
└─────────────────┘     └──────────────────┘     └─────────────────────┘
```

1. **Prompt** — You describe the workflow you need in natural language.
2. **Generate** — SynthOps uses AI to parse your intent, select appropriate n8n nodes, and wire them together.
3. **Export** — A complete n8n-compatible workflow JSON is generated, ready to import and run.

---

## 🛠️ Tech Stack

| Layer            | Technology                                                  |
| ---------------- | ----------------------------------------------------------- |
| **Monorepo**     | [Turborepo](https://turborepo.dev/)                         |
| **Runtime**      | [Bun](https://bun.sh/)                                     |
| **Framework**    | [Next.js 16](https://nextjs.org/)                           |
| **Language**     | [TypeScript](https://www.typescriptlang.org/)               |
| **UI Library**   | [React 19](https://react.dev/)                              |
| **Linting**      | [ESLint](https://eslint.org/)                               |
| **Formatting**   | [Prettier](https://prettier.io/)                            |
| **Target**       | [n8n](https://n8n.io/) Workflow Automation                  |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [Bun](https://bun.sh/) >= 1.3.1

### Installation

```bash
# Clone the repository
git clone https://github.com/7-Orbits/SynthOps.git
cd SynthOps

# Install dependencies
bun install
```

### Development

```bash
# Start all apps in development mode
bun run dev

# Or using turbo directly
turbo dev
```

| App    | URL                     |
| ------ | ----------------------- |
| `web`  | http://localhost:3000    |
| `docs` | http://localhost:3001    |

### Build

```bash
# Build all apps and packages
bun run build
```

### Lint & Format

```bash
# Run linting
bun run lint

# Format code
bun run format

# Type checking
bun run check-types
```

---

## 📁 Project Structure

```
SynthOps/
├── apps/
│   ├── web/              # Main web application (Next.js — port 3000)
│   └── docs/             # Documentation site (Next.js — port 3001)
├── packages/
│   ├── ui/               # Shared React component library (@repo/ui)
│   ├── eslint-config/    # Shared ESLint configuration (@repo/eslint-config)
│   └── typescript-config/ # Shared TypeScript config (@repo/typescript-config)
├── turbo.json            # Turborepo pipeline configuration
├── package.json          # Root workspace configuration
└── bun.lock              # Bun lockfile
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to SynthOps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/7-Orbits">7.Orbits</a>
</p>
