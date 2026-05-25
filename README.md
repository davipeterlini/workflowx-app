# WorkFlowX

All-in-one productivity platform combining AI chat, planning, task management, and news aggregation in a unified dashboard with embedded apps via iframes.

## Features

- **AI Chat**: Real-time chat with Gemini AI powered by Google
- **Planner**: Integrated planning tool (iframe embedded)
- **Tasks**: Task management (iframe embedded)
- **News**: AI-powered market insights (iframe embedded)
- **Coming Soon**: Learning, Automations, Productivity tools

## Tech Stack

- React 19 + TypeScript
- Vite 6 for build tooling
- Tailwind CSS for styling
- Vitest for testing
- Google OAuth2 authentication
- Google Gemini API for AI chat
- Docker + nginx for production

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+
- Google Cloud account (for OAuth + Gemini API)

### Installation

```bash
# Clone the repository
git clone https://github.com/davipeterlini/workflowx-app.git
cd workflowx-app

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
# Edit .env with your Google OAuth Client ID
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test        # Watch mode
npm run test:run    # Single run
npm run test:coverage  # With coverage
```

## Deployment

### Docker (local production build)

```bash
docker build -t workflowx-app .
docker run -p 8080:8080 --env-file .env workflowx-app
```

### GCP Cloud Run

Use the GitHub Actions workflows for automatic deployment:

- `deploy-dev.yml`: Manual trigger for development
- `deploy-prd.yml`: Automatic on version tags (`v*`)

## Project Structure

```
src/
├── components/
│   ├── auth/          # Login screen
│   ├── layout/        # Header, Sidebar
│   └── views/         # All page views
├── contexts/          # React contexts (Auth, Toast, Language)
├── hooks/             # Custom hooks
├── services/          # Storage service
└── types.ts           # TypeScript types

.github/workflows/     # CI/CD pipelines
scripts/               # Deploy scripts
tests/                 # Test files
```

## License

MIT