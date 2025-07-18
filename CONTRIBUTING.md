# Contributing to `gluestack-ui`

Thank you for your interest in contributing to `gluestack-ui`! 🚀  
Your efforts help us build a more robust and versatile library for the community.

This comprehensive guide will walk you through everything you need to know about contributing to gluestack-ui, from initial setup to advanced development workflows.

We're thrilled to have you on this journey with us. Together, we can accelerate universal app development! 🎉

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Architecture](#project-architecture)
3. [Generated Files System](#generated-files-system)
4. [Development Workflow](#development-workflow)
5. [Local Package Development](#local-package-development)
6. [Creating Your First Component](#creating-your-first-component)
7. [Documentation Guidelines](#documentation-guidelines)
8. [Testing Your Changes](#testing-your-changes)
9. [Contribution Guidelines](#contribution-guidelines)
10. [Troubleshooting](#troubleshooting)

## Getting Started

### Initial Setup

1. **Fork and Clone**

   ```bash
   # Fork gluestack-ui from GitHub first, then:
   git clone git@github.com:${YOUR_USERNAME}/gluestack-ui.git
   cd gluestack-ui
   ```

2. **Add Remote**

   ```bash
   git remote add origin git@github.com:<your_github_id>/gluestack-ui.git
   ```

3. **Install Dependencies**

   ```bash
   yarn
   ```

4. **Initial Sync** (Copy files from `src/` to `apps/`)

   ```bash
   yarn sync
   ```

5. **Start Development Watcher**
   ```bash
   yarn dev
   ```

### Prerequisites

Before contributing, ensure you understand:

- How the source-to-destination system works
- Project architecture and component organization
- Development workflow and testing approach

## Project Architecture

### High-Level Structure

```
gluestack-ui/
├── src/                          # Source files (single source of truth)
├── packages/                     # Published packages
├── apps/                        # Example applications & documentation
├── scripts/                     # Build & development scripts
```

### Key Directories

#### Source (`src/`)

- **`components/ui/`** - Core UI components (Button, Input, Modal, etc.)
- **`docs-components/`** - Documentation-specific components
- **`sidebar.json`** - Documentation sidebar configuration

#### Applications (`apps/`)

- **`website/`** - Documentation website (gluestack-ui.com)
- **`kitchen-sink/`** - Component showcase & testing
- **`starter-kit-next/`** - Next.js starter template
- **`starter-kit-expo/`** - Expo starter template

#### Packages (`packages/`)

- **`gluestack-ui/`** - Main CLI package for component installation
- **`create-gluestack/`** - Project initialization tool
- **`gluestack-utils/`** - Shared utility functions
- **`gluestack-core/`** - Creator and Aria related code for components
- **`ui-next-adapter/`** - Next.js adapter for Gluestack-ui component library with React Native Web support

## Generated Files System

This repository uses a **source-to-destination** file generation system where:

- **Source files** are maintained in the `src/` directory at the root level
- **Mapper scripts** in `scripts/` automatically copy and sync files to destination projects in `apps/`
- **Generated files** in destination projects are gitignored to prevent accidental commits

### File Structure

```
/
├── src/                          # Source files
│   ├── components/ui/           # UI components source
│   ├── docs-components/         # Documentation components source
│   └── sidebar.json            # Sidebar configuration source
|
├── scripts/                     # Mapper scripts
│   └── mappers/                # Individual app mappers
|
└── apps/                       # Destination projects
    ├── website/                # Generated files are gitignored
    ├── starter-kit-next/
    ├── starter-kit-expo/
    └── kitchen-sink/           # Generated files are gitignored
```

### Generated Files by Destination

#### All Apps

The following files are generated in **all** destination apps:

- `components/ui/` - UI components copied from `src/components/ui/`

#### Website App Only

Additional files generated only for the website app:

- `components/docs-components/` - Documentation components copied from `src/docs-components/`
- `sidebar.json` - Sidebar configuration copied from `src/sidebar.json`
- `app/ui/docs` - Docs or examples copied from `src/docs` or `src/components/ui/${component_name}/docs`

### Why This System?

#### ✅ Benefits

- **Single source of truth** - All components maintained in one place
- **Consistency** - Same components across all apps
- **No duplication** - Avoid copy-paste errors
- **Easy updates** - Change once, update everywhere
- **Clean git history** - Only source changes are committed

#### ⚠️ Important Notes

- **Never edit generated files directly** - Changes will be overwritten
- **Always edit source files** in `src/` directory
- **Generated files are local only** - Not committed to git
- **Run mappers after pulling** to sync local generated files

## Development Workflow

### Making Changes

#### For UI Components

1. **Edit source files** in `src/components/ui/` - Never edit in `apps/*/components/ui/`
2. **Test changes** in the `kitchen-sink` app or `website`
3. **Verify** across different applications
4. **Commit only source files** - Generated files are automatically ignored

#### For Documentation

1. **Edit content** in appropriate `src/docs/` directories
2. **Update sidebar** in `src/sidebar.json` if adding any new component
3. **Test** on the website app
4. **Review** documentation flow and navigation

### Mapper Scripts

The mapper system uses:

- `scripts/dev.ts` - Main script that watches for file changes
- `scripts/mappers/` - Individual mappers for each destination app
- File watching and debouncing to handle rapid changes
- Event-based processing (add, change, delete)

### Development Commands

```bash
# Watch all mappers and sync changes
yarn dev

# Run specific mapper only
yarn dev:website

# One-time sync without watching
yarn sync

# Run specific mapper with sync
yarn sync:starter-kit-next
```

### Gitignore Configuration

Each destination app has been configured to ignore generated files:

#### Website App (`apps/website/.gitignore`)

```gitignore
# Generated files from src/ - DO NOT COMMIT
# These files are automatically generated by the mapper scripts
components/ui/
components/docs-components/
sidebar.json
```

#### Other Apps (`apps/*/\.gitignore`)

```gitignore
# Generated files from src/ - DO NOT COMMIT
# These files are automatically generated by the mapper scripts
components/ui/
```

## Local Package Development

When contributing to gluestack-ui packages (`gluestack-utils`, `gluestack-core`, etc.), you'll need to set up local package linking to test your changes in the apps before publishing.

### Package Linking System

This project uses [yalc](https://github.com/wclr/yalc) for local package development, which provides a better alternative to `npm link` with more reliable dependency resolution.

### Setting Up Local Package Development

#### Prerequisites

Ensure yalc is installed globally:

```bash
npm install -g yalc
```

#### Step 1: Link Packages for Development

To start developing packages locally:

```bash
# Link all packages and set up watch mode
yarn link:create

# This command does the following:
# 1. Links gluestack-utils package (builds, publishes to yalc, starts watch mode)
# 2. Links gluestack-core package (builds, publishes to yalc, starts watch mode)
```

#### Step 2: Link Packages to Apps

Link the locally published packages to your apps:

```bash
# Link packages to all apps (website + kitchen-sink)
yarn link:apps

# Or link to specific apps:
yarn link:apps-website      # Link to website app only
yarn link:apps-kitchen-sink # Link to kitchen-sink app only
```

#### Step 3: Start Development

Now you can start your normal development workflow:

```bash
# In one terminal - watch for file changes and mapping
yarn dev

# In another terminal - start your app of choice
cd apps/website && yarn dev
# or
cd apps/kitchen-sink && yarn dev
```

### Local Package Development Workflow

#### Making Changes to Packages

1. **Edit package source files** in `packages/gluestack-utils/` or `packages/gluestack-core/`
2. **Changes are automatically rebuilt** and republished to yalc (watch mode)
3. **Apps automatically pick up changes** through yalc linking
4. **Test your changes** in the linked apps

#### Package Structure

```
packages/
├── gluestack-utils/         # Utility functions, hooks, and common code
│   ├── src/
│   │   ├── hooks/          # Reusable hooks
│   │   ├── aria/           # Accessibility utilities
│   │   ├── common/         # Common utility functions
│   │   └── nativewind-utils/ # NativeWind specific utilities
│   └── package.json
│
├── gluestack-core/          # Core component factories and creators
│   ├── src/
│   │   ├── accordion/      # Component-specific core logic
│   │   ├── button/
│   │   └── ...
│   └── package.json
│
├── gluestack-ui/           # CLI package for component installation
└── ui-next-adapter/        # Next.js adapter for React Native Web
```

### Working with Individual Packages

#### For gluestack-utils

When adding new utilities, hooks, or common functionality:

```bash
# Navigate to the package
cd packages/gluestack-utils

# Install dependencies
yarn

# Start development mode (if not already linked)
yarn dev

# Make your changes in src/
# Changes will be automatically rebuilt and published to yalc
```

#### For gluestack-core

When adding new component creators or core functionality:

```bash
# Navigate to the package
cd packages/gluestack-core

# Install dependencies
yarn

# Start development mode (if not already linked)
yarn dev

# Make your changes in src/
# Changes will be automatically rebuilt and published to yalc
```

### Common Package Development Tasks

#### Adding a New Utility Function

1. **Create your utility** in `packages/gluestack-utils/src/`
2. **Export it** from the appropriate index file
3. **Test it** in a linked app
4. **Add tests** if applicable

#### Adding a New Component Core/Creator

1. **Create component folder** in `packages/gluestack-core/src/`
2. **Implement the core functionality**
3. **Export from main index**
4. **Use in UI components** in `src/components/ui/`

#### Testing Package Changes

```bash
# Ensure packages are linked to apps
yarn link:apps

# Start apps to test changes
cd apps/kitchen-sink && yarn dev
cd apps/website && yarn dev
```

### Cleaning Up After Development

When you're done with local package development:

```bash
# Unlink packages from apps
yarn unlink:apps

# This removes yalc links and cleans up node_modules
# Apps will revert to using published package versions
```

### Package Development Commands Reference

```bash
# Setup commands
yarn link:create              # Link and watch all packages
yarn link:create-utils        # Link and watch gluestack-utils only
yarn link:create-core         # Link and watch gluestack-core only

# App linking commands
yarn link:apps                # Link packages to all apps
yarn link:apps-website        # Link packages to website app
yarn link:apps-kitchen-sink   # Link packages to kitchen-sink app

# Cleanup commands
yarn unlink:apps              # Unlink packages from all apps
yarn unlink:apps-website      # Unlink packages from website app
yarn unlink:apps-kitchen-sink # Unlink packages from kitchen-sink app
```

### Troubleshooting Package Development

#### Changes Not Reflecting in Apps

1. **Check if packages are properly linked**:

   ```bash
   cd apps/website && yalc check
   ```

2. **Verify package watch mode is running**:

   ```bash
   # Should see build output when you make changes
   ```

3. **Re-link if needed**:
   ```bash
   yarn unlink:apps && yarn link:apps
   ```

#### Package Build Errors

1. **Check TypeScript compilation**:

   ```bash
   cd packages/gluestack-utils && yarn build
   ```

2. **Verify dependencies are installed**:
   ```bash
   yarn
   ```

#### Yalc Issues

1. **Clear yalc cache**:

   ```bash
   yalc clean
   ```

2. **Reset and re-link**:
   ```bash
   yarn unlink:apps
   yarn link:create
   yarn link:apps
   ```

### Best Practices for Package Development

- **Always test package changes** in multiple apps before submitting
- **Keep package interfaces stable** - avoid breaking changes
- **Use semantic versioning** for package releases
- **Document new APIs** thoroughly
- **Add tests** for new functionality
- **Clean up after development** to avoid confusion

## Creating Your First Component

> Make sure you have set up your gluestack-ui development environment and have `yarn dev` running at root to watch for file changes.

### Prerequisites for Component Creation

1. **Development Environment Setup**
   - Follow the setup instructions above
   - Verify all apps are properly synced with `yarn sync`
   - Ensure `yarn dev` is running to watch for file changes

### Step 1: Create the Core Component

#### Component Structure

Create your component in the source directory following this structure:

```
src/components/ui/<component-name>/
├── index.tsx                 # Main component file (copy pasteable)
├── examples/                 # Examples of component
├── docs/                     # Docs of the component
```

#### Create Component Steps

1. **Create component folder** inside `src/components/ui/` (use kebab-case).

2. **Create composable component file** inside `src/components/ui/<component-name>/index.tsx`.

3. **Export** all the composable components from this file. Make sure the components are exported as named-exports.

4. **Create creator functions** inside (`packages/gluestack-utils/<component-name>/creator/`):
   - All creator/factory functions for unstyled components should go here
   - Use this for creating base component factories that can be styled

5. **Create ARIA hooks** inside (`packages/gluestack-utils/<component-name>/aria/`):
   - All accessibility-related code and ARIA hooks should go here
   - Include keyboard navigation, screen reader support, and other a11y features

6. **Add component examples** inside (`src/components/ui/<component-name>/examples/`):
   - Create usage examples showing different variants and use cases

7. **Add component documentation** inside (`src/components/ui/<component-name>/docs/`):
   - Include comprehensive documentation for the component

8. **Export from main index** (`src/components/ui/index.tsx`):
   ```tsx
   // Add your component export
   export * from './<component-name>';
   ```

### Step 2: Component Guidelines

#### Code Standards

- **Use TypeScript** for all component files
- **Follow naming conventions**: PascalCase for components, kebab-case for directories
- **Include accessibility features** where appropriate
- **Write meaningful prop types** and documentation
- **Support className prop** for styling flexibility

#### Styling Guidelines

- **Use NativeWind/Tailwind** classes via className prop
- **Import from react-native directly** (View, Text, etc.)
- **Don't import styled components** from NativeWind
- **Support theming** through CSS variables when needed

### Step 3: Add Component Dependencies

Update dependencies in the appropriate configuration files:

**Starter-Kits** - Update starter-kit-\* templates if needed.

**gluestack-ui package** - Update `packages/gluestack-ui/src/dependencies.json` if needed.

### Advanced Features

#### Accessibility Support

If your component needs accessibility features:

1. **Import accessibility props** from react-native
2. **Add ARIA attributes** where appropriate
3. **Support screen readers** with proper labels
4. **Test with accessibility tools**

#### Animation Support

For animated components:

1. **Use react-native-reanimated** for animations
2. **Provide animation configuration props**
3. **Ensure performance** on lower-end devices
4. **Document animation behavior**

## Documentation Guidelines

### Documentation Structure

Create Component documentation in this directory:

```
src/components/ui/<component-name>/
├── examples/               # Usage examples
│   ├── basic/
|        |- meta.json
|        |- template.handlebars
|── docs/                   # Main docs
|     |- index.mdx

```

### Documentation Best Practices

- **Include comprehensive examples** showing different variants and use cases
- **Document all props** with types and descriptions
- **Provide accessibility guidelines** for component usage
- **Include common patterns** and best practices
- **Update sidebar.json** when adding new component documentation

## Testing Your Changes

### Using Kitchen Sink App

The `kitchen-sink` app is the primary testing environment:

- Contains all components with various configurations
- Hot reloads when source files change
- Best for component development and testing

#### Testing Components in Kitchen Sink

1. **Navigate to Kitchen Sink**:

   ```bash
   cd apps/kitchen-sink
   ```

2. **Start Development Server**
   ```bash
   yarn dev
   ```

### Using Website App

The `website` app for documentation testing:

- Full documentation experience
- Component examples and API documentation
- Best for documentation changes

Test documentation rendering:

```bash
# Run website for documentation testing
cd apps/website
yarn dev
```

Visit the documentation page to verify:

- Component examples render correctly
- API documentation is accurate
- Examples are interactive

### Using Starter Kits

Test starter templates to ensure:

- Components work in fresh projects
- Installation process is smooth
- No missing dependencies

### Component Testing Checklist

Before submitting your component:

- [ ] Component renders correctly in Kitchen Sink app
- [ ] Documentation displays properly on Website app
- [ ] Component works in starter templates
- [ ] TypeScript types are properly defined
- [ ] Accessibility features are implemented
- [ ] Examples cover common use cases
- [ ] Props are well documented
- [ ] Cross-platform compatibility (web and native)
- [ ] Performance tested on lower-end devices

## Contribution Guidelines

### Before Contributing

1. **Understand the project structure** (this document)
2. **Set up your development environment**
3. **Run the mapper scripts** to ensure everything works locally
4. **Explore the codebase** using the kitchen-sink and website apps

### Code Style & Standards

- Follow existing code patterns and conventions
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes across multiple applications
- Update documentation when adding new features

### Pull Request Process

The process of proposing a change to `gluestack/gluestack-ui` can be summarized as follows:

1. **Create a feature branch** from `feat/v3`
2. **Make your changes** in source files only
3. **Test thoroughly** using kitchen-sink and website apps
4. **Update documentation** if needed
5. **Push changes** to your fork
6. **Create a pull request** to the `gluestack/gluestack-ui` repository
7. **Review and address comments** on your pull request

If all goes well, your pull request will be merged. If it is not merged, maintainers will do their best to explain the reason why.

### File Identification

#### Generated Files (DO NOT EDIT)

- Any file in `apps/*/components/ui/`
- `apps/website/components/docs-components/`
- `apps/website/sidebar.json`

#### Source Files (EDIT THESE)

- Any file in `src/components/ui/`
- Any file in `packages/gluestack-utils/`
- Any file in `packages/gluestack-core/`
- Any file in `src/docs-components/`
- `src/sidebar.json`

### Common Pitfalls to Avoid

- ❌ Editing generated files in `apps/*/components/ui/`
- ❌ Committing generated files
- ❌ Not testing in multiple applications
- ❌ Forgetting to update documentation
- ❌ Making changes without understanding the mapper system

## Troubleshooting

### Missing Generated Files?

```bash
yarn sync
```

### Changes Not Reflecting?

Check if `yarn dev` is running and watching for changes.

### Git Trying to Commit Generated Files?

Check `.gitignore` configuration in the respective app directory.

### Mapper Scripts Not Working?

1. Ensure you're in the root directory
2. Check that dependencies are installed
3. Verify file permissions on scripts

## Getting Help

If you have any questions or need guidance, feel free to reach out—collaboration is key!

- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check the website for comprehensive guides
- **Code**: Refer to existing components for patterns and examples

## Maintenance

The gitignore rules are maintained in each destination app. If you add new generated file patterns, update the respective `.gitignore` files and this documentation.

For questions or issues with the generated files system, refer to the mapper scripts in `scripts/mappers/` or contact the development team.

---

Happy contributing,  
**The `gluestack-ui` Team** ❤️
