import * as ts from 'typescript';

const PROVIDER_DIR = 'gluestack-ui-provider';

// ─── Provider file routing ──────────────────────────────────────────────────
// The provider directory contains both nativewind and uniwind variants.
// This function decides what to do with each file when copying to the uniwind app.
export function getProviderFileAction(
  componentName: string,
  fileName: string
): { action: 'skip' | 'rename' | 'copy'; outputName?: string } {
  if (componentName !== PROVIDER_DIR) return { action: 'copy' };

  // NativeWind-specific files — skip entirely
  if (fileName === 'index.tsx') return { action: 'skip' };
  if (fileName === 'index.next.tsx') return { action: 'skip' };
  if (fileName === 'index.web.tsx') return { action: 'skip' };
  if (fileName === 'config.ts') return { action: 'skip' };

  // UniWind variants — copy with the canonical name
  if (fileName === 'index.uniwind.tsx')
    return { action: 'rename', outputName: 'index.tsx' };
  if (fileName === 'config.uniwind.ts')
    return { action: 'rename', outputName: 'config.ts' };

  // Everything else (script.ts, etc.) — copy as-is
  return { action: 'copy' };
}

// ─── AST-based cssInterop → withUniwind transform ──────────────────────────
//
// cssInterop (nativewind) is imperative and mutates in place:
//   cssInterop(Component, { className: { target: 'style', nativeStyleToProp: {...} } });
//
// withUniwind is a HOC that returns a new component, and takes no config:
//   const Component = withUniwind(OriginalComponent);
//
// The config argument is dropped entirely — withUniwind handles className→style
// mapping automatically for all cases (icons included).
//
// Four target shapes are handled:
//   1. Imported identifier          → rename import specifier, add const wrapper
//   2. Locally declared const       → rename declaration, add const wrapper
//   3. Compound component + members → Object.assign pattern preserves sub-components
//   4. Standalone member expression → direct reassignment
// ──────────────────────────────────────────────────────────────────────────────

interface CssInteropCall {
  statement: ts.ExpressionStatement;
  targetType: 'identifier' | 'member';
  // identifier target
  name?: string;
  // member target (e.g. UIActionsheet.Content)
  objectName?: string;
  propertyName?: string;
  // Whether this cssInterop has nativeStyleToProp config (needs wrapping)
  needsWrapping?: boolean;
}

interface VarDeclInfo {
  nameNode: ts.Identifier;
  statement: ts.VariableStatement;
  isExported: boolean;
}

interface Replacement {
  start: number;
  end: number;
  text: string;
}

export function transformCssInteropToUniwind(
  source: string,
  fileName: string
): { code: string; warnings: string[] } {
  const warnings: string[] = [];
  const sourceFile = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );

  // ── Collection ──────────────────────────────────────────────────────────
  const cssInteropCalls: CssInteropCall[] = [];
  // Named imports: "PrimitiveIcon" → ImportSpecifier node
  const namedImportSpecs = new Map<string, ts.ImportSpecifier>();
  // Default imports: "GorhomBackdrop" → Identifier node (the import name)
  const defaultImportNames = new Map<string, ts.Identifier>();
  // Local variable declarations: "UIIcon" → info
  const varDecls = new Map<string, VarDeclInfo>();
  // The `import { cssInterop } from 'nativewind'` statement (if present)
  let nativewndImport: ts.ImportDeclaration | null = null;

  function collect(node: ts.Node) {
    // ── imports ──
    if (ts.isImportDeclaration(node)) {
      const mod = node.moduleSpecifier;
      if (ts.isStringLiteral(mod) && mod.text === 'nativewind') {
        nativewndImport = node;
      }
      if (node.importClause) {
        if (node.importClause.name) {
          defaultImportNames.set(
            node.importClause.name.text,
            node.importClause.name
          );
        }
        if (
          node.importClause.namedBindings &&
          ts.isNamedImports(node.importClause.namedBindings)
        ) {
          for (const elem of node.importClause.namedBindings.elements) {
            namedImportSpecs.set(elem.name.text, elem);
          }
        }
      }
    }

    // ── variable declarations ──
    if (ts.isVariableStatement(node)) {
      const isExported =
        node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword) ??
        false;
      for (const decl of node.declarationList.declarations) {
        if (ts.isIdentifier(decl.name)) {
          varDecls.set(decl.name.text, {
            nameNode: decl.name,
            statement: node,
            isExported,
          });
        }
      }
    }

    // ── cssInterop call expressions ──
    if (ts.isExpressionStatement(node) && ts.isCallExpression(node.expression)) {
      const call = node.expression;
      if (
        ts.isIdentifier(call.expression) &&
        call.expression.text === 'cssInterop'
      ) {
        const target = call.arguments[0];
        const config = call.arguments[1];

        // Only wrap Icon and H1-H6 heading components
        // Other components work fine with tva/className without withUniwind
        let needsWrapping = false;

        if (ts.isIdentifier(target)) {
          // Check if it's an Icon or heading component (H1, H2, H3, H4, H5, H6)
          const isIconComponent = target.text.includes('Icon');
          const isHeadingComponent = /^H[1-6]$/.test(target.text);
          needsWrapping = isIconComponent || isHeadingComponent;

          cssInteropCalls.push({
            statement: node,
            targetType: 'identifier',
            name: target.text,
            needsWrapping,
          });
        } else if (
          ts.isPropertyAccessExpression(target) &&
          ts.isIdentifier(target.expression) &&
          ts.isIdentifier(target.name)
        ) {
          // For member access (e.g., UISlider.Track), if cssInterop exists,
          // it means that sub-component needs className support
          // So we always need to wrap it (it will be wrapped inline in the factory call)
          needsWrapping = true;

          cssInteropCalls.push({
            statement: node,
            targetType: 'member',
            objectName: target.expression.text,
            propertyName: target.name.text,
            needsWrapping,
          });
        } else {
          warnings.push(
            `[${fileName}] Unhandled cssInterop target shape — manual fix needed`
          );
        }
      }
    }

    ts.forEachChild(node, collect);
  }
  collect(sourceFile);

  // Nothing to transform
  if (cssInteropCalls.length === 0) return { code: source, warnings };

  // End position of the last import statement (used to hoist withUniwind
  // declarations for imported identifiers, which must be declared before any
  // code that references them — unlike cssInterop which mutated in place).
  let lastImportEnd = 0;
  for (const statement of sourceFile.statements) {
    if (ts.isImportDeclaration(statement)) {
      let end = statement.getEnd();
      if (end < source.length && source[end] === '\n') end++;
      lastImportEnd = Math.max(lastImportEnd, end);
    }
  }

  // ── Analysis ──────────────────────────────────────────────────────────
  const identCalls = cssInteropCalls.filter((c) => c.targetType === 'identifier');
  const memberCalls = cssInteropCalls.filter((c) => c.targetType === 'member');

  // A compound root is an identifier target that also appears as the object
  // of at least one member-expression target (e.g. UIActionsheet + UIActionsheet.Content)
  const compoundRoots = new Set<string>();
  for (const mc of memberCalls) {
    if (identCalls.some((ic) => ic.name === mc.objectName)) {
      compoundRoots.add(mc.objectName!);
    }
  }

  // ── Replacement generation ───────────────────────────────────────────
  const replacements: Replacement[] = [];
  // Declarations for imported identifiers that must be hoisted above all
  // non-import statements (collected in sections 2 & 3, emitted after 4).
  const postImportDecls: string[] = [];

  // Helper: full-line range of a node (start-of-line → after trailing \n)
  function lineRange(node: ts.Node): { start: number; end: number } {
    let start = node.getStart(sourceFile);
    while (start > 0 && source[start - 1] !== '\n') start--;
    let end = node.getEnd();
    if (end < source.length && source[end] === '\n') end++;
    return { start, end };
  }

  // Helper: indentation string of the line a node lives on
  function indentOf(node: ts.Node): string {
    const nodeStart = node.getStart(sourceFile);
    let lineStart = nodeStart;
    while (lineStart > 0 && source[lineStart - 1] !== '\n') lineStart--;
    return source.slice(lineStart, nodeStart);
  }

  // Helper: determine if a name is imported (named or default)
  function isImported(name: string): boolean {
    return namedImportSpecs.has(name) || defaultImportNames.has(name);
  }

  // ── 1. Replace/remove the nativewind import ──────────────────────────
  if (nativewndImport) {
    const decl = nativewndImport as ts.ImportDeclaration;
    const bindings = decl.importClause?.namedBindings;
    const cssInteropOnly =
      bindings &&
      ts.isNamedImports(bindings) &&
      bindings.elements.length === 1 &&
      bindings.elements[0].name.text === 'cssInterop';

    if (cssInteropOnly) {
      // Swap the entire import line
      const range = lineRange(decl);
      replacements.push({
        start: range.start,
        end: range.end,
        text: "import { withUniwind } from 'uniwind';\n",
      });
    } else {
      // Other specifiers exist (e.g. vars, useColorScheme) — remove only cssInterop
      warnings.push(
        `[${fileName}] nativewind import has other specifiers; cssInterop removed but others preserved — review recommended`
      );
      if (bindings && ts.isNamedImports(bindings)) {
        const elem = bindings.elements.find(
          (e) => e.name.text === 'cssInterop'
        );
        if (elem) {
          let removeStart = elem.getStart(sourceFile);
          let removeEnd = elem.getEnd();
          // Eat the trailing ", " if present
          const after = source.slice(removeEnd).match(/^,\s*/);
          if (after) {
            removeEnd += after[0].length;
          } else {
            // Eat the preceding ", " instead
            const before = source.slice(0, removeStart);
            const commaIdx = before.lastIndexOf(',');
            if (commaIdx >= 0) removeStart = commaIdx;
          }
          replacements.push({ start: removeStart, end: removeEnd, text: '' });
        }
      }
      // Insert withUniwind import on a new line after the nativewind import
      const nEnd = decl.getEnd();
      const insertPos = source[nEnd] === '\n' ? nEnd + 1 : nEnd;
      replacements.push({
        start: insertPos,
        end: insertPos,
        text: "import { withUniwind } from 'uniwind';\n",
      });
    }
  }

  // Statements already processed (avoids double-replacement)
  const handled = new Set<ts.ExpressionStatement>();

  // ── Helper: add import rename for a target ─────────────────────────
  function addImportRename(name: string) {
    const spec = namedImportSpecs.get(name);
    if (spec) {
      if (spec.propertyName) {
        // Already aliased: import { X as name } → import { X as _name }
        replacements.push({
          start: spec.name.getStart(sourceFile),
          end: spec.name.getEnd(),
          text: `_${name}`,
        });
      } else {
        // No alias: import { name } → import { name as _name }
        replacements.push({
          start: spec.name.getStart(sourceFile),
          end: spec.name.getEnd(),
          text: `${name} as _${name}`,
        });
      }
      return;
    }
    const defaultName = defaultImportNames.get(name);
    if (defaultName) {
      // import Name → import _Name
      replacements.push({
        start: defaultName.getStart(sourceFile),
        end: defaultName.getEnd(),
        text: `_${name}`,
      });
    }
  }

  // ── Helper: rename a local variable declaration and strip its export ─
  function addVarDeclRename(name: string) {
    const info = varDecls.get(name);
    if (!info) return;
    // Rename declarator: name → _name
    replacements.push({
      start: info.nameNode.getStart(sourceFile),
      end: info.nameNode.getEnd(),
      text: `_${name}`,
    });
    // Strip "export " keyword if present
    if (info.isExported) {
      const exportKw = info.statement.modifiers?.find(
        (m) => m.kind === ts.SyntaxKind.ExportKeyword
      );
      if (exportKw) {
        replacements.push({
          start: exportKw.getStart(sourceFile),
          end: exportKw.getEnd() + 1, // +1 eats the trailing space
          text: '',
        });
      }
    }
  }

  // ── 2. Compound components (root + sub-component members) ──────────
  for (const rootName of compoundRoots) {
    const rootCall = identCalls.find((c) => c.name === rootName);
    if (!rootCall) continue;

    const subCalls = memberCalls.filter((c) => c.objectName === rootName);

    // Skip if neither root nor any sub-components need wrapping
    const rootNeedsWrapping = rootCall.needsWrapping ?? false;
    const anySubNeedsWrapping = subCalls.some((sc) => sc.needsWrapping ?? false);

    if (!rootNeedsWrapping && !anySubNeedsWrapping) {
      // Just remove all cssInterop calls without wrapping
      const rootRange = lineRange(rootCall.statement);
      replacements.push({ start: rootRange.start, end: rootRange.end, text: '' });
      handled.add(rootCall.statement);

      for (const sc of subCalls) {
        const scRange = lineRange(sc.statement);
        replacements.push({ start: scRange.start, end: scRange.end, text: '' });
        handled.add(sc.statement);
      }
      continue;
    }
    const varInfo = varDecls.get(rootName);

    // Check if this is a factory-created component (createSelect, createButton, etc.)
    // by looking for a pattern like: const Root = createXxx({...})
    let factoryCallNode: ts.CallExpression | null = null;
    if (varInfo) {
      const decl = varInfo.statement.declarationList.declarations.find(
        (d) => ts.isIdentifier(d.name) && d.name.text === rootName
      );
      if (
        decl?.initializer &&
        ts.isCallExpression(decl.initializer) &&
        ts.isIdentifier(decl.initializer.expression) &&
        decl.initializer.expression.text.startsWith('create')
      ) {
        factoryCallNode = decl.initializer;
      }
    }

    // If this is a factory-created component, wrap primitives inline in the factory call
    if (factoryCallNode && factoryCallNode.arguments[0]) {
      const firstArg = factoryCallNode.arguments[0];
      if (ts.isObjectLiteralExpression(firstArg)) {
        // Find properties that match sub-component cssInterop calls
        for (const sc of subCalls) {
          const prop = firstArg.properties.find(
            (p) =>
              ts.isPropertyAssignment(p) &&
              ts.isIdentifier(p.name) &&
              p.name.text === sc.propertyName &&
              ts.isIdentifier(p.initializer)
          ) as ts.PropertyAssignment | undefined;

          if (prop && ts.isIdentifier(prop.initializer)) {
            const propValue = prop.initializer.text;
            // Only wrap if this sub-component needs wrapping
            const scNeedsWrapping = sc.needsWrapping ?? false;

            if (scNeedsWrapping) {
              // Wrap primitive components (TextInput, View, etc.) inline
              // Skip already-wrapped components (those in varDecls or with "UI" prefix)
              const isAlreadyWrapped =
                varDecls.has(propValue) ||
                propValue.startsWith('UI') ||
                propValue.startsWith('_');

              if (!isAlreadyWrapped) {
                replacements.push({
                  start: prop.initializer.getStart(sourceFile),
                  end: prop.initializer.getEnd(),
                  text: `withUniwind(${propValue})`,
                });
              }
            }

            // Mark this sub-component as handled and remove cssInterop call
            handled.add(sc.statement);
            const scRange = lineRange(sc.statement);
            replacements.push({
              start: scRange.start,
              end: scRange.end,
              text: '',
            });
          }
        }
      }
    }

    // Check if all sub-components were handled inline
    const remainingSubCalls = subCalls.filter((sc) => !handled.has(sc.statement));

    // If no remaining sub-components and root needs wrapping, just rename and wrap the root
    if (remainingSubCalls.length === 0) {
      if (rootNeedsWrapping) {
        if (varInfo) {
          addVarDeclRename(rootName);
        } else if (isImported(rootName)) {
          addImportRename(rootName);
        }

        const indent = indentOf(rootCall.statement);
        const exportPrefix = varInfo?.isExported ? 'export ' : '';
        const rootRange = lineRange(rootCall.statement);
        replacements.push({
          start: rootRange.start,
          end: rootRange.end,
          text: `${indent}${exportPrefix}const ${rootName} = withUniwind(_${rootName});\n`,
        });
      } else {
        // Root doesn't need wrapping, just remove cssInterop call
        const rootRange = lineRange(rootCall.statement);
        replacements.push({
          start: rootRange.start,
          end: rootRange.end,
          text: '',
        });
      }
      handled.add(rootCall.statement);
      continue;
    }

    // Otherwise, use Object.assign for remaining sub-components
    if (varInfo) {
      addVarDeclRename(rootName);
    } else if (isImported(rootName)) {
      addImportRename(rootName);
    } else {
      warnings.push(
        `[${fileName}] Compound root '${rootName}' not found in imports or declarations`
      );
    }

    const indent = indentOf(rootCall.statement);
    const exportPrefix = varInfo?.isExported ? 'export ' : '';
    const subLines = remainingSubCalls.map(
      (sc) =>
        `${indent}    ${sc.propertyName}: withUniwind(_${rootName}.${sc.propertyName})`
    );
    const assignCode =
      `${indent}${exportPrefix}const ${rootName} = Object.assign(\n` +
      `${indent}  withUniwind(_${rootName}),\n` +
      `${indent}  {\n` +
      subLines.join(',\n') +
      `,\n` +
      `${indent}  }\n` +
      `${indent}) as typeof _${rootName};`;

    const rootRange = lineRange(rootCall.statement);
    replacements.push({
      start: rootRange.start,
      end: rootRange.end,
      text: assignCode + '\n',
    });
    handled.add(rootCall.statement);

    for (const sc of remainingSubCalls) {
      const scRange = lineRange(sc.statement);
      replacements.push({ start: scRange.start, end: scRange.end, text: '' });
      handled.add(sc.statement);
    }
  }

  // ── 3. Simple identifier targets (not part of a compound component) ─
  for (const call of identCalls) {
    if (compoundRoots.has(call.name!)) continue;
    if (handled.has(call.statement)) continue;

    const name = call.name!;
    const stmtRange = lineRange(call.statement);
    const varInfo = varDecls.get(name);
    const needsWrapping = call.needsWrapping ?? false;

    if (!needsWrapping) {
      // Just remove the cssInterop call without wrapping
      replacements.push({ start: stmtRange.start, end: stmtRange.end, text: '' });
      handled.add(call.statement);
      continue;
    }

    if (isImported(name)) {
      addImportRename(name);
      // Erase the cssInterop call here; the const declaration is hoisted
      // to right after the imports so it is available before any createX() call.
      replacements.push({ start: stmtRange.start, end: stmtRange.end, text: '' });
      postImportDecls.push(`const ${name} = withUniwind(_${name});`);
    } else if (varInfo) {
      addVarDeclRename(name);
      const exportPrefix = varInfo.isExported ? 'export ' : '';
      // Erase the cssInterop call; insert the wrapper right after the
      // renamed declaration so it is available before any createX() call.
      replacements.push({ start: stmtRange.start, end: stmtRange.end, text: '' });
      const declRange = lineRange(varInfo.statement);
      replacements.push({
        start: declRange.end,
        end: declRange.end,
        text: `${indentOf(varInfo.statement)}${exportPrefix}const ${name} = withUniwind(_${name});\n`,
      });
    } else {
      warnings.push(
        `[${fileName}] cssInterop target '${name}' not found in imports or declarations — call removed, manual wrap needed`
      );
      replacements.push({ start: stmtRange.start, end: stmtRange.end, text: '' });
    }
    handled.add(call.statement);
  }

  // ── 4. Standalone member expressions (no matching root cssInterop) ──
  for (const call of memberCalls) {
    if (handled.has(call.statement)) continue;

    const needsWrapping = call.needsWrapping ?? false;
    const indent = indentOf(call.statement);
    const stmtRange = lineRange(call.statement);

    if (needsWrapping) {
      replacements.push({
        start: stmtRange.start,
        end: stmtRange.end,
        text: `${indent}${call.objectName}.${call.propertyName} = withUniwind(${call.objectName}.${call.propertyName}) as any;\n`,
      });
    } else {
      // Just remove the cssInterop call
      replacements.push({
        start: stmtRange.start,
        end: stmtRange.end,
        text: '',
      });
    }
    handled.add(call.statement);
  }

  // ── 5. Emit hoisted declarations right after the import block ────────
  if (postImportDecls.length > 0) {
    replacements.push({
      start: lastImportEnd,
      end: lastImportEnd,
      text: '\n' + postImportDecls.join('\n') + '\n',
    });
  }

  // ── Apply replacements (reverse order preserves positions) ──────────
  replacements.sort((a, b) => b.start - a.start);

  // Sanity check for overlapping ranges
  for (let i = 1; i < replacements.length; i++) {
    if (replacements[i].end > replacements[i - 1].start) {
      warnings.push(
        `[${fileName}] Overlapping replacements at ${replacements[i].start}-${replacements[i].end} and ${replacements[i - 1].start}-${replacements[i - 1].end} — output may be incorrect`
      );
    }
  }

  let result = source;
  for (const { start, end, text } of replacements) {
    result = result.slice(0, start) + text + result.slice(end);
  }

  return { code: result, warnings };
}
