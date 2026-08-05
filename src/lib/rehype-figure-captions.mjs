function figureFromImageParagraph(node) {
  if (
    node.type !== 'element' ||
    node.tagName !== 'p' ||
    node.children?.length !== 1 ||
    node.children[0].type !== 'element' ||
    node.children[0].tagName !== 'img'
  ) {
    return null;
  }

  const img = node.children[0];
  const alt = img.properties?.alt;
  if (!alt) return null;

  return {
    type: 'element',
    tagName: 'figure',
    properties: { className: ['note-figure'] },
    children: [img],
  };
}

function walk(node) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const replacement = figureFromImageParagraph(node.children[i]);
    if (replacement) {
      node.children[i] = replacement;
    } else {
      walk(node.children[i]);
    }
  }
}

export default function rehypeFigureCaptions() {
  return (tree) => {
    walk(tree);
  };
}
