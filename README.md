# Gluestack UI

A repo containing source components and multiple destination applications that are automatically synchronized using mapper scripts.

## 🏗️ Project Structure

This repository uses a **source-to-destination** architecture:

- **`src/`** - Source files for components, utilities, and documentation
- **`scripts/`** - Mapper scripts that sync files to destination apps
- **`apps/`** - Destination applications (Next.js, Expo, etc.)
- **`packages/`** - Additional packages and utilities

## 🚀 Quick Start

### Initial Setup

```bash
# Install dependencies
npm install

# Sync all source files to destination apps
npm run sync

# Start watching for changes (recommended for development)
npm run dev
```

### Available Scripts

#### Development Scripts (Watch Mode)

```bash
npm run dev                    # Watch all mappers
npm run dev:website           # Watch website only
npm run dev:starter-kit-next  # Watch starter-kit-next only
npm run dev:starter-kit-expo  # Watch starter-kit-expo only
npm run dev:kitchen-sink      # Watch kitchen-sink only
npm run dev:todo-app          # Watch todo-app only
```

#### Sync Scripts (One-time)

```bash
npm run sync                    # Sync all mappers once
npm run sync:website           # Sync website only
npm run sync:starter-kit-next  # Sync starter-kit-next only
npm run sync:starter-kit-expo  # Sync starter-kit-expo only
npm run sync:kitchen-sink      # Sync kitchen-sink only
npm run sync:todo-app          # Sync todo-app only
```

#### Other Scripts

```bash
npm run format                # Format all files
npm run format:check          # Check formatting
npm run build:website         # Build website
```

## 📁 Destination Apps

The following apps are automatically synchronized from source files:

- **`apps/website/`** - Main documentation website (Next.js)
- **`apps/starter-kit-next/`** - Next.js starter kit
- **`apps/starter-kit-expo/`** - Expo/React Native starter kit
- **`apps/kitchen-sink/`** - Component testing app
- **`apps/todo-app/`** - Example todo application

## ⚠️ Important: Generated Files

**This repository uses an auto-generated files system.** Certain files in destination apps are automatically generated from source files and should never be edited directly.

### 📖 Read the Generated Files Documentation

**Before making any changes, please read:** [`GENERATED_FILES.md`](./GENERATED_FILES.md)

This documentation explains:

- Which files are auto-generated and should not be edited
- How the mapper scripts work
- Why certain files are gitignored
- Developer guidelines and troubleshooting

### Quick Reference

#### ✅ Edit These (Source Files)

- `src/components/ui/` - UI components
- `src/utils/gluestack-utils/` - Utility functions
- `src/docs-components/` - Documentation components
- `src/sidebar.json` - Sidebar configuration

#### ❌ Don't Edit These (Generated Files)

- `apps/*/components/ui/` - Auto-generated from source
- `apps/*/utils/gluestack-utils/` - Auto-generated from source
- `apps/website/components/docs-components/` - Auto-generated from source
- `apps/website/sidebar.json` - Auto-generated from source

## 🔄 Development Workflow

1. **Make changes** to source files in `src/`
2. **Run mapper scripts** with `npm run dev` to watch for changes
3. **Test changes** in the destination apps
4. **Commit only source files** - generated files are automatically ignored

## 🛠️ Troubleshooting

- **Missing generated files?** → Run `npm run sync`
- **Changes not reflecting?** → Ensure `npm run dev` is running
- **Git trying to commit generated files?** → Check `.gitignore` in destination apps

## 📚 Documentation

- [`GENERATED_FILES.md`](./GENERATED_FILES.md) - Detailed guide to the generated files system
- `apps/*/README.md` - Individual app documentation
- `scripts/mappers/` - Mapper script implementations

---

For questions about the generated files system or mapper scripts, refer to the documentation or contact the development team.
