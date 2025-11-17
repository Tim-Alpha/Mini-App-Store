Mini-Apps Scaffold contents:

- packages/shell-app: Expo-based React Native shell demo app (App.tsx)
- packages/sdk: Types + minimal platform SDK stubs (index.ts)
- packages/cli: CLI scaffolding (bundle command)
- examples/miniapp-hello: Example mini-app with manifest and index
- architecture/architecture.svg: Simple diagram of architecture
- README.md: Short pointer README

To use locally:
1. Install pnpm and turbo, then run `pnpm install` at repo root.
2. `pnpm -w install` (if using pnpm workspace)
3. For shell-app demo, use Expo (`expo start`) inside packages/shell-app

Notes:
- These files are minimal starters. You will need to add real implementations for the sandbox, native bridge, CI, and publishing workflows.
