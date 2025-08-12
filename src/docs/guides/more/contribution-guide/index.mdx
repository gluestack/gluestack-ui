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

- How the source-to-destination system works:
  - **Source files** are maintained in the `src/` directory (single source of truth)
  - **Mapper scripts** automatically copy and sync files to destination projects in `apps/`
  - **Generated files** in destination projects are gitignored to prevent accidental commits
  - All UI components in `src/components/ui/` are automatically synced to all apps
  - Documentation components and sidebar config are synced only to the website app
  - Use `yarn dev` to watch for changes and auto-sync, or `yarn sync` for one-time sync
  - **Never edit generated files** in `apps/*/components/ui/` - always edit source files in `src/`
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
├── packages/
|   └── create-gluestack      # CLI for gluestack's create command
│   └── gluestack-ui          # CLI for gluestack's add, init, upgrade command
│   └── gluestack-utils       # Utils related files
│   └── gluestack-core        # Components creator and aria
│   └── ui-next-adapter       # gluestack/ui-next-adapter for NextJs
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


# Build local package using yalc and create its link and watch for file changes
yarn link:create

# Link local packages in apps
yarn link:apps

# Initialize a new component for contribution
yarn create:component

# Cleanup of local packages in apps
yarn unlink:apps
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

# Component development commands
yarn create:component         # Initialize a new component for contribution
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

### Setting Up Local Package Development

Before creating your first component, you'll need to set up local package development to test your changes effectively:

#### Step 1: Link Packages for Development

```bash
# Link all packages and set up watch mode
yarn link:create

# This command:
# - Builds gluestack-utils and gluestack-core packages
# - Publishes them to yalc for local development
# - Starts watch mode to automatically rebuild on changes
```

#### Step 2: Link Packages to Apps

```bash
# Link packages to all apps (website + kitchen-sink)
yarn link:apps

# Or link to specific apps:
yarn link:apps-website      # Link to website app only
yarn link:apps-kitchen-sink # Link to kitchen-sink app only
```

#### Step 3: Verify Setup

After linking, you can verify the setup:

```bash
# Check if packages are properly linked
cd apps/website && yalc check
cd apps/kitchen-sink && yalc check
```

### Using the Component Creation Script

The `yarn create:component` command helps you initialize a new component with the proper structure:

```bash
# Initialize a new component for contribution
yarn create:component

# This will prompt you for:
# - Component name (in kebab-case)
# - Component type (basic, complex, etc.)
# - Whether to include examples and documentation
```

#### What the Script Creates

The `create:component` script automatically generates:

1. **Component folder structure** in `src/components/ui/<component-name>/`
2. **Basic component template** with proper TypeScript types
3. **Example files** in `examples/` directory
4. **Documentation template** in `docs/` directory
5. **Export statements** for the component

### Component Development Workflow

#### Step 1: Create Your Component

```bash
# Create a new component
yarn create:component

# Follow the prompts to set up your component
```

#### Step 2: Develop Your Component

1. **Edit your component** in `src/components/ui/<component-name>/`
2. **Create your component's creator & aria (if any)** in `packages/gluestack-core`
3. **Add examples** in the `examples/` directory
4. **Write documentation** in the `docs/` directory
5. **Update your component in sidebar.json file** in `src/sidebar.json`
6. **Test changes** in real-time as they sync to apps

#### Step 3: Test Your Component

```bash
# Start the kitchen-sink app to test your component
cd apps/kitchen-sink && yarn dev

# Or test in the website app for documentation
cd apps/website && yarn dev
```

#### Step 4: Clean Up After Development

When you're done developing:

```bash
# Unlink packages from apps
yarn unlink:apps

# This removes yalc links and cleans up node_modules
# Apps will revert to using published package versions
```

### Troubleshooting Component Development

#### Changes Not Reflecting

If your component changes aren't showing up in the apps:

```bash
# Check if packages are properly linked
cd apps/website && yalc check

# Re-link if needed
yarn unlink:apps && yarn link:apps
```

#### Package Build Errors

```bash
# Check if packages are building correctly
cd packages/gluestack-utils && yarn build
cd packages/gluestack-core && yarn build
```

#### Yalc Issues

```bash
# Clear yalc cache if needed
yalc clean

# Reset and re-link
yarn unlink:apps
yarn link:create
yarn link:apps
```

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

**gluestack-ui package** - Update `packages/gluestack-ui/src/dependencies.ts` if needed.

## Updating Starter-Kits (Templates) for Shipment

When your changes are ready to ship and you need to update the starter-kit templates, follow this comprehensive process to ensure all templates are properly updated and tested.

### Understanding Starter-Kit Templates

Starter-kit templates are located in `packages/gluestack-ui/templates/` and are used by the CLI to initialize new projects. These templates include:

- **Next.js templates** (`templates/nextjs/`) - For Next.js projects
- **Expo templates** (`templates/expo/`) - For Expo/React Native projects
- **React Native CLI templates** (`templates/react-native-cli/`) - For React Native CLI projects
- **Common templates** (`templates/common/`) - Shared configuration files

### When to Update Starter-Kits

Update starter-kit templates when:

- ✅ Adding new components that require template-specific configuration
- ✅ Updating dependencies that affect project initialization
- ✅ Modifying configuration files (tailwind.config.js, babel.config.js, etc.)
- ✅ Adding new project types or framework support
- ✅ Updating provider components or essential dependencies
- ✅ Changing initialization logic or file structure

### Step-by-Step Update Process

#### Step 1: Identify Required Changes

1. **Review your component changes** and determine if they affect:
   - Dependencies in `packages/gluestack-ui/src/dependencies.ts`
   - Template configuration files
   - Provider components or initialization logic
   - Project-specific setup requirements

2. **Check template usage** in the initialization code:
   ```bash
   # Review how templates are used
   grep -r "templates" packages/gluestack-ui/src/
   ```

#### Step 2: Update Dependencies Configuration

If your component requires new dependencies:

1. **Update `packages/gluestack-ui/src/dependencies.ts`**:

   ```typescript
   // Add new dependencies to the appropriate project type
   const projectBasedDependencies: Dependencies = {
     nextjs: {
       dependencies: {
         // Add your new dependency here
         'your-new-package': '^1.0.0',
         // ... existing dependencies
       },
     },
     expo: {
       dependencies: {
         // Add your new dependency here
         'your-new-package': '^1.0.0',
         // ... existing dependencies
       },
     },
     // ... other project types
   };
   ```

2. **Test dependency resolution**:
   ```bash
   cd packages/gluestack-ui
   yarn build
   ```

#### Step 3: Update Template Files

1. **For configuration changes** (tailwind, babel, etc.):

   ```bash
   # Update the appropriate template file
   # Example: updating tailwind.config.js
   cp your-updated-tailwind.config.js packages/gluestack-ui/templates/tailwind.config.js
   ```

2. **For project-specific templates**:

   ```bash
   # Update Next.js templates
   # Update Expo templates
   # Update React Native CLI templates
   # Each project type may need different configurations
   ```

3. **For provider components**:
   ```bash
   # Update provider templates if needed
   # Check packages/gluestack-ui/src/util/init/index.ts for provider logic
   ```

#### Step 4: Update Initialization Logic

If your changes affect the initialization process:

1. **Review `packages/gluestack-ui/src/util/init/index.ts`**:
   - Check if new project types need support
   - Update provider installation logic
   - Modify configuration generation

2. **Update configuration helpers**:
   ```bash
   # Update project-specific config helpers
   packages/gluestack-ui/src/util/config/
   ```

#### Step 5: Test Template Updates

1. **Test with local CLI**:

   ```bash
   # Build the CLI package
   cd packages/gluestack-ui
   yarn build

   # Test initialization in a new directory
   mkdir test-init && cd test-init
   npm init -y
   npx ../gluestack-ui/dist/index.js init --projectType nextjs
   ```

2. **Test all project types**:

   ```bash
   # Test Next.js initialization
   npx ../gluestack-ui/dist/index.js init --projectType nextjs

   # Test Expo initialization
   npx ../gluestack-ui/dist/index.js init --projectType expo

   # Test React Native CLI initialization
   npx ../gluestack-ui/dist/index.js init --projectType react-native-cli
   ```

3. **Verify generated files**:
   - Check that all dependencies are properly installed
   - Verify configuration files are correctly generated
   - Test component functionality in the initialized project

#### Step 6: Update Documentation

1. **Update CLI documentation** if new options or project types are added
2. **Update template documentation** for any new configuration options
3. **Update contributing guide** if the process changes

### Template-Specific Considerations

#### Next.js Templates

- **Version-specific templates**: `templates/nextjs/next15/` for Next.js 15+
- **Configuration files**: `next.config.js`, `postcss.config.js`
- **Provider setup**: Web-specific provider components
- **Dependencies**: React Native Web, DOM helpers

#### Expo Templates

- **Configuration files**: `metro.config.js`, `babel.config.js`
- **Provider setup**: Native-specific provider components
- **Dependencies**: React Native Safe Area Context, Expo HTML Elements

#### React Native CLI Templates

- **Configuration files**: `metro.config.js`, `babel.config.js`
- **Provider setup**: Native-specific provider components
- **Dependencies**: React Native Reanimated, React Native Safe Area Context

### Testing Checklist

Before shipping template updates:

- [ ] All project types initialize successfully
- [ ] Dependencies are correctly installed
- [ ] Configuration files are properly generated
- [ ] Provider components work as expected
- [ ] Components function correctly in initialized projects
- [ ] No breaking changes to existing functionality
- [ ] Documentation is updated
- [ ] CLI builds without errors

### Common Template Update Scenarios

#### Adding a New Component with Dependencies

1. **Update dependencies.ts** with new package requirements
2. **Test initialization** with the new component
3. **Verify dependencies** are installed correctly
4. **Update documentation** if needed

#### Updating Configuration Files

1. **Update template files** in `packages/gluestack-ui/templates/`
2. **Test initialization** to ensure configs are applied
3. **Verify functionality** in initialized projects

#### Adding New Project Type Support

1. **Add project type** to dependencies configuration
2. **Create template files** for the new project type
3. **Update initialization logic** to handle the new type
4. **Test thoroughly** with the new project type

### Troubleshooting Template Updates

#### Initialization Fails

1. **Check dependency versions** in `dependencies.ts`
2. **Verify template files** exist and are correct
3. **Test with minimal setup** to isolate issues
4. **Check CLI build** for compilation errors

#### Generated Files Incorrect

1. **Review template copying logic** in init/index.ts
2. **Check file paths** and template structure
3. **Verify file permissions** and access rights
4. **Test template file content** manually

#### Dependencies Not Installed

1. **Check dependencies.ts** configuration
2. **Verify package manager** detection logic
3. **Test installation process** manually
4. **Check for version conflicts**

### Best Practices

- **Always test** template updates with multiple project types
- **Maintain backward compatibility** when possible
- **Document breaking changes** clearly
- **Use semantic versioning** for template updates
- **Test in clean environments** to avoid local state issues
- **Keep templates minimal** and focused on essential setup
- **Update examples** and documentation with template changes

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
