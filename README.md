# Aurora — Host (Shell)

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** + **@originjs/vite-plugin-federation**
- **Apollo Client** — GraphQL client (provider for remote components)
- **MSW (Mock Service Worker)** — intercepts GraphQL/WebSocket requests in the browser
- **Sonner** — toast notifications
- **Mitt** — event bus (shared instance from remote)

## Getting Started

### Prerequisites

- Node.js ≥ 18
- The Remote app must be **built and running** on port 3001

### Install & Run

```bash
npm install

# Start the remote first (in the remote project directory):
# npm run serve

# Then start the host:
npm run dev
```

The app will be available at **http://localhost:3000**.

### Build for Production

```bash
npm run build
npm run preview
```

## Environment Variables

Defined in `.env`:

| Variable                   | Description                                          | Default                         |
| -------------------------- | ---------------------------------------------------- | ------------------------------- |
| `VITE_GRAPHQL_URL`         | GraphQL endpoint (intercepted by MSW)                | `http://localhost:3001/graphql` |
| `VITE_NOTIFICATION_WS_URL` | WebSocket URL for notifications (intercepted by MSW) | `ws://localhost:3001/ws`        |
