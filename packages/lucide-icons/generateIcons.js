const lucideDir = require('lucide-static');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const prettier = require('prettier');
const t = require('@babel/types');
const path = require('path');
const fs = require('fs');

const lucideIcons = lucideDir;

function upperCamelCase(str) {
  return str
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    .replace(/^[a-z]/, (g) => g.toUpperCase());
}

function convertSnakeCasePropsToCamelCaseProps(node) {
  if (node.type === 'JSXAttribute') {
    if (node.name.type === 'JSXIdentifier') {
      node.name.name = node.name.name.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      );
    }
  }
}
const rootDir = path.join(__dirname);
fs.writeFileSync(path.join(rootDir, 'src', 'index.ts'), '', 'utf-8');
Object.keys(lucideIcons).forEach((iconName) => {
  let svg = lucideIcons[iconName];
  let svgCode = svg
    .toString()
    .replace(/ class=\"[^\"]+\"/g, '')
    .replace(new RegExp('stroke="currentColor"', 'g'), '')
    .replace('width="24"', '')
    .replace('height="24"', '')
    .replace('otherProps="..."', '')
    .replace('<svg', '<StyledSvg {...props}')
    .replace('</svg', '</StyledSvg')
    .replace(new RegExp('<circle', 'g'), '<_Circle')
    .replace(new RegExp('</circle', 'g'), '</_Circle')
    .replace(new RegExp('<ellipse', 'g'), '<Ellipse')
    .replace(new RegExp('</ellipse', 'g'), '</Ellipse')
    .replace(new RegExp('<g', 'g'), '<G')
    .replace(new RegExp('</g', 'g'), '</G')
    .replace(new RegExp('<linear-gradient', 'g'), '<LinearGradient')
    .replace(new RegExp('</linear-gradient', 'g'), '</LinearGradient')
    .replace(new RegExp('<radial-gradient', 'g'), '<RadialGradient')
    .replace(new RegExp('</radial-gradient', 'g'), '</RadialGradient')
    .replace(new RegExp('<path', 'g'), '<Path')
    .replace(new RegExp('</path', 'g'), '</Path')
    .replace(new RegExp('<line', 'g'), '<Line')
    .replace(new RegExp('</line', 'g'), '</Line')
    .replace(new RegExp('<polygon', 'g'), '<Polygon')
    .replace(new RegExp('</polygon', 'g'), '</Polygon')
    .replace(new RegExp('<polyline', 'g'), '<Polyline')
    .replace(new RegExp('</polyline', 'g'), '</Polyline')
    .replace(new RegExp('<rect', 'g'), '<Rect')
    .replace(new RegExp('</rect', 'g'), '</Rect')
    .replace(new RegExp('<symbol', 'g'), '<Symbol')
    .replace(new RegExp('</symbol', 'g'), '</Symbol')
    .replace(new RegExp('<text', 'g'), '<Text')
    .replace(new RegExp('</text', 'g'), '</Text')
    .replace(new RegExp('<use', 'g'), '<Use')
    .replace(new RegExp('</use', 'g'), '</Use')
    .replace(new RegExp('<defs', 'g'), '<Defs')
    .replace(new RegExp('</defs', 'g'), '</Defs')
    .replace(new RegExp('<stop', 'g'), '<Stop')
    .replace(new RegExp('</stop', 'g'), '</Stop')
    .replace(new RegExp('px', 'g'), '');

  let cname = upperCamelCase(iconName);
  let iconCode = `
import React from 'react';
import { StyledSvg } from '../StyledSvg';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient, 
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

const Icon = (props:any) => {
  return (
    ${svgCode}
  );
};

Icon.displayName = '${cname}'

export const ${cname} = React.memo(Icon);
`;

  const res = parse(iconCode, {
    sourceType: 'module',
    plugins: [
      // enable jsx and flow syntax
      'jsx',
      'flow',
    ],
  });
  let attributes = [];
  traverse(res, {
    JSXElement(path) {
      if (path.node.openingElement.name.name === 'StyledSvg') {
        attributes = [...path.node.openingElement.attributes];
      }
    },
  });
  let jsxElementSpecifiers = [];
  traverse(res, {
    JSXOpeningElement(path) {
      jsxElementSpecifiers.push(path.node.name.name);
    },
  });
  traverse(res, {
    ImportSpecifier(path) {
      if (path.parent.source.value === 'react-native-svg') {
        if (!jsxElementSpecifiers.includes(path.node.local.name)) {
          path.remove();
        }
      }
    },
  });

  // properties that are consistent across all icons and defined in StyledSvg component theme.
  let attrsNotRequired = [
    'xmlns',
    'viewBox',
    'fill',
    'stroke-width',
    'stroke-linecap',
    'stroke-linejoin',
  ];

  let newAtrributes = [];
  attributes.forEach((attribute) => {
    if (
      (attribute?.name?.name || attribute.type === 'JSXSpreadAttribute') &&
      !attrsNotRequired.includes(attribute?.name?.name)
    ) {
      convertSnakeCasePropsToCamelCaseProps(attribute);
      newAtrributes.push(attribute);
    }
  });

  traverse(res, {
    JSXElement(path) {
      if (path.node.openingElement.name.name === 'StyledSvg') {
        path.node.openingElement.attributes = newAtrributes;
      }
    },
  });

  const component = prettier.format(generator(res).code, {
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    parser: 'typescript',
    semi: false,
  });

  const fileName = cname + '.tsx';
  const location = path.join(rootDir, 'src/icons/', fileName);
  fs.writeFileSync(location, component, 'utf-8');
  const exportString = `export { ${cname} } from './icons/${cname}'\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.ts'),
    exportString,
    'utf-8'
  );
});
