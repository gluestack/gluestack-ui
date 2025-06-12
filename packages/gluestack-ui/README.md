# gluestack-ui CLI

A CLI tool for easily adding components from gluestack to your projects.

## Installation

```bash
npm install -g gluestack-ui
```

## Usage

### Initialize gluestack-ui in your project

```bash
npx gluestack-ui init
```

### Add a specific component

```bash
npx gluestack-ui add button
```

### Add all components

```bash
npx gluestack-ui add --all
```

## Ignore Functionality

The CLI automatically ignores certain folders and components to ensure a clean installation:

### Ignored Folders During Component Copy

The following folders are automatically excluded when copying components:

- `docs/` - Documentation files
- `examples/` - Example implementations

This ensures that only the essential component files are copied to your project, keeping it clean and focused.

### Ignored Components

The following components are automatically filtered out and cannot be added via the CLI:

- `utils` - Internal utility components

Additionally, the `gluestack-ui-provider` component is handled specially during initialization and cannot be added manually.

### Why These Restrictions?

1. **Clean Installation**: Prevents users from accidentally adding internal or experimental components that may not be stable or properly documented.

2. **Avoid Conflicts**: Some components like providers are meant to be added only during initialization to avoid configuration conflicts.

3. **Better UX**: Focusing on user-facing components makes the CLI easier to use and understand.

4. **Maintenance**: Reduces support issues from users accidentally adding internal components.

## Available Commands

- `init` - Initialize gluestack-ui in your project
- `add <component>` - Add a specific component
- `add --all` - Add all available components
- `help` - Display help information

## Configuration

The ignore lists are hardcoded in the CLI configuration and cannot be modified by users. This ensures consistency across all installations.

## Development

To build the CLI:

```bash
npm run build
```

To run tests:

```bash
npm test
```
