# Next.js + shadcn/ui Template

A minimal and modern template using Next.js with shadcn/ui and theming.

## Features

- Next.js (App Router)
- shadcn/ui with theming
- Tailwind CSS
- TypeScript

## Getting Started

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
# or
bun install 
```

Run the dev server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

* `app/` — App Router pages/layouts
* `components/` — UI components such as `theme-provider` and `Mode Toggle`
* `lib/` — `utils.ts`

## Internationalization

If you want to use internationalization, proceed to this branch: [internationalization](https://github.com/lyfe691/shadcn-kit/tree/feature/intl).

This project uses [next-intl](https://next-intl.dev/) for internationalization.

- The `messages` directory contains the translations for the project.
- The `src/i18n` directory contains the configuration for the internationalization.
- The `middleware.ts` file is used to set the locale for the request.
- The `request.ts` file is used to get the locale for the request.
- The `routing.ts` file is used to define the routing for the project.

## License

[MIT](./LICENSE)