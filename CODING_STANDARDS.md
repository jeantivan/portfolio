# Coding Standards

Documented standards and architectural conventions for the portfolio repository.

## 1. Ubiquitous Language & Domain Modeling

All code, schemas, collections, components, and variables must strictly adhere to the domain terms defined in [GLOSSARY.md](GLOSSARY.md):

- **Profile** (_Avoid: AuthorInfo, User, Account_): Professional identity of the author.
- **Technology** (_Avoid: TechSkill, Tool, Stack item_): A concrete programming language, framework, database, or tool.
- **Technical Skill** (_Avoid: Hard skill, Tech group_): An engineering practice or discipline beyond a single tool.
- **Soft Skill** (_Avoid: Non-technical skill, Personal trait_): An interpersonal or team capability.
- **Project** (_Avoid: Work, PortfolioItem, Repo_): Software work published to demonstrate capabilities.
- **Featured Project** (_Avoid: Main project, Highlight_): Prominent projects showcased on the front page and top of projects view.
- **Case Study** (_Avoid: Project post, Article_): In-depth narrative of a project with its own dedicated detail page.

## 2. Internationalization & Routing

- **Root Language**: Spanish (`es`) is served directly at the root URL (`/`, `/projects`, `/skills`, `/contact`) without `<meta http-equiv="refresh">` redirects.
- **English Prefix**: English (`en`) is served under `/en` (`/en`, `/en/projects`, `/en/skills`, `/en/contact`).
- **Canonical Slugs**: Route slugs are identical across languages (`/projects` ↔ `/en/projects`). Do not create translated route slugs (e.g. avoid `/proyectos` or `/habilidades`).
- **Spanish Fallback**: All localized content requires Spanish (`es`). When an English translation (`en`) is omitted or missing, components and schemas must fallback cleanly to `es` without breaking the UI or throwing errors.
- **Dynamic Alternate Links**: Every rendered page must supply dynamic `<link rel="alternate" hreflang="...">` tags for `es`, `en`, and `x-default` (pointing to `es`).

## 3. Primitives & Schemas

- **Localized Text**: Use `localizedTextSchema` from `@/content/primitives` for user-facing localized text fields, normalizing to `{ es: string, en: string }`.
- **Themed Images**: Use `createThemedImageSchema` / `themedImageSchema` from `@/content/primitives` for assets with dark/light variants, normalizing to `{ dark: T, light: T }`.

## 4. Testing & Verification

- **Automated Verification**: Before committing, run `pnpm run typecheck` and `pnpm test`. Both must pass with 0 errors.
- **Seams**: Write tests against public interfaces and modules (`src/i18n`, `src/content/primitives`, static build output), avoiding tests coupled to internal component rendering details.
