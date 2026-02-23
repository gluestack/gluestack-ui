---
name: gluestack-ui-v4:setup
description: Guide for installing gluestack-ui v4 per the official Installation doc - CLI and Manual paths only. Follow https://v4.gluestack.io/ui/docs/home/getting-started/installation strictly.
---

# Gluestack UI v4 - Setup & Installation

This sub-skill follows the official **gluestack-ui v4** installation guide only. Nothing is followed from outside [Installation | gluestack-ui v4](https://v4.gluestack.io/ui/docs/home/getting-started/installation).

Use either **CLI** or **Manual** as defined on that page.

## v4 only – do not use v1/v2/v3 packages or docs

- **Never** use or suggest: `@gluestack/styled`, `@gluestack-ui/themed`, or any packages/docs from **gluestack.io** (without the `v4.` subdomain). Those are for v1/v2/v3.
- **v4** uses: **v4.gluestack.io** docs only; packages such as `@gluestack-ui/core`, `@gluestack-ui/utils`, NativeWind, and components copied into your app (e.g. `GluestackUIProvider`, `icon`, `overlay`, `toast`). Manual installation for v4 is **only** the Manual tab on the v4 Installation page – not any other “manual” or “gluestack styled” guide.

---

## CLI

### Step 1: Setup your project

- **New project:** Set up your project with [Next.js](https://nextjs.org/docs/getting-started/installation) or [Expo](https://docs.expo.dev/get-started/create-a-project/).
- **Existing project:** Skip this step.

### Prerequisites

Ensure these prerequisites are satisfied to use the gluestack-ui CLI:

| Package Name   | Supported Versions   | Upcoming Support |
|----------------|----------------------|------------------|
| next           | 13 <= versions <= 15 | -                |
| react-native   | versions >= 72.5      | -                |
| expo           | versions >= 50       | -                |
| node           | versions > 16        | -                |

### Step 2: Initialize (CLI only)

To initialize gluestack-ui v4 via CLI, use **only** this command (from your project root):

```bash
npx gluestack-ui@alpha init -y
```

This adds **GluestackUIProvider** and essential components (**icon**, **overlay**, **toast**). Do not use any other command or method for CLI initialization.

After init, your project is ready to use gluestack-ui components. To add more components via CLI, use the **add** command or the [CLI guide](https://v4.gluestack.io/ui/docs/home/getting-started/cli). Example:

```bash
npx gluestack-ui@alpha add box
```
or
```bash
npx gluestack-ui@alpha add --all -y
```

If you run into issues during CLI installation, use the **manual installation guide** (Manual tab on the same Installation page).

---

## Manual

For installation without the CLI, use **only** the **Manual** tab on the v4 Installation page:

- **Manual installation (v4 only):** [https://v4.gluestack.io/ui/docs/home/getting-started/installation](https://v4.gluestack.io/ui/docs/home/getting-started/installation) → switch to the **Manual** tab on that page.

**Do not:**

- Use manual steps from gluestack.io (without `v4.`), or from blog posts, Stack Overflow, or other guides that reference **v1/v2/v3**.
- Install or suggest **@gluestack/styled**, **@gluestack-ui/themed**, or any v1/v2/v3 packages. v4 does not use those; v4 uses `@gluestack-ui/core@alpha`, `@gluestack-ui/utils@alpha`, NativeWind, and the provider/components from the v4 Manual tab only.

---

## Common issues

**Expo app stuck in `tailwindcss(ios) rebuilding...` while running `expo start`**

- Cause: Project directory name contains spaces (e.g. `Expo App`).
- Fix: Rename the directory so it has no spaces (e.g. `Expo-App`).

---

## Reference

- **Installation (v4):** [https://v4.gluestack.io/ui/docs/home/getting-started/installation](https://v4.gluestack.io/ui/docs/home/getting-started/installation) — use **CLI** or **Manual** tab here only; ignore gluestack.io (non-v4) and any guides that mention `@gluestack/styled` or v1/v2/v3.
- **CLI guide:** [https://v4.gluestack.io/ui/docs/home/getting-started/cli](https://v4.gluestack.io/ui/docs/home/getting-started/cli)
