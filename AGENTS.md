## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues using the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical triage labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo layout (`GLOSSARY.md` and `docs/adr/` at the repo root). See `docs/agents/domain.md`.

### Standards

Repository coding standards and ubiquitous language rules. See `CODING_STANDARDS.md` and `GLOSSARY.md`.

### Design

Base UI and visual designs on `DESIGN.md`. Ask the user for their opinion whenever encountering design doubts or ambiguities.

### Verification

Automated checks run via `pnpm run typecheck` (`CI=true astro check`), `pnpm test` (`vitest run`), and `pnpm run build`.
