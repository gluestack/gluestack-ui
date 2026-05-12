const { visit } = require('unist-util-visit');

function semanticExtractor() {
  return (tree) => {
    visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement', 'mdxJsxText'], (node, index, parent) => {
      // 1. Handle Custom Components (mdxJsxFlowElement)
      if (node.type === 'mdxJsxFlowElement') {
        const name = node.name;
        const attributes = node.attributes || [];

        // Extract props for semantic text representation
        const props = attributes
          .filter(attr => attr.type === 'mdxJsxAttribute')
          .map(attr => `${attr.name}="${attr.value}"`)
          .join(', ');

        // Check if it's a Code Provider (e.g., <CodePreviewer code={...} />)
        const codeAttr = attributes.find(attr => attr.name === 'code');
        if (codeAttr && codeAttr.value) {
            // We want to turn this into a code block.
            // For simplicity in this task, we'll transform the node to a text node
            // that represents a code block.
            const codeContent = codeAttr.value.replace(/^['"]|['"]$/g, '').trim();
            const textNode = {
                type: 'text',
                value: `\n\`\`\`javascript\n${codeContent}\n\`\`\`\n`
            };
            parent.children[index] = textNode;
            return;
        }

        if (props) {
          node.type = 'text';
          node.value = `\n[Component: ${name}${props ? ': ' + props : ''}]\n`;
        } else {
          // Remove purely visual components
          parent.children.splice(index, 1);
          return;
        }
      }
    });
  };
}

module.exports = semanticExtractor;
