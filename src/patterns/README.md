# Patterns

Production-ready Expo / React Native screens built from gluestack-ui components. They power
[gluestack.io/patterns](https://gluestack.io/patterns), the copy-paste prompts, the registry
(`/r/<slug>.json`) and the MCP server (`/api/mcp`).

## Add a pattern

1. Create `src/patterns/<slug>/` with two files:
   - `index.tsx`: one screen, `export default function <Name>Screen()`. Self-contained (sample data in the file),
     gluestack-ui components from `@/components/ui/<name>`, icons from `lucide-react-native`, semantic tokens
     (`bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-muted-foreground`) so light and dark both work.
   - `meta.json`: `{ "title", "description", "category", "tags", "prompt", "featured", "added" }`.
     `category` is an id from `categories.json`; `prompt` is one sentence of adaptation advice that ends up in the copied prompt.
2. `yarn sync:patterns` (or keep `yarn dev:patterns` running): regenerates the preview map and the website catalog.
   Components used and npm packages are detected from the imports; never list them by hand.
3. Check it renders, in both themes:
   ```bash
   cd apps/patterns-preview
   yarn typecheck          # look for errors in src/patterns/<slug>
   yarn export             # Expo web export into dist/
   yarn shots <slug>       # writes apps/website/public/patterns-shots/<slug>-{dark,light}.webp, fails on console errors
   ```
   Commit the two screenshots with the pattern; they are the catalog cards.

`yarn dev` in `apps/patterns-preview` runs the Expo app on http://localhost:8098/preview with an index of all patterns.

## How it is wired

```
src/patterns/<slug>/{index.tsx,meta.json}
        │  scripts/mappers/patterns/generate.ts   (yarn sync:patterns, yarn dev:patterns, website build)
        ├─► apps/patterns-preview/patterns.generated.ts    → Expo web export → gluestack.io/preview/<slug> (iframes)
        └─► apps/website/data/generated/patterns.json      → /, /patterns, /patterns/<slug>, prompts, registry, MCP, llms.txt
            apps/website/data/generated/ui-registry.json   → /r/ui/<component>.json, MCP get_component
```

The preview app reads patterns and components straight from `src/` (see its babel and metro config), so nothing is copied.
