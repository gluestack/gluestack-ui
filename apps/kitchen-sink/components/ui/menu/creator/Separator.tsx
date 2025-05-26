function Separator(_props: any): any {
  return null;
}

Separator.getCollectionNode = function* getCollectionNode(
  props: any,
  _context: any
): Generator<any> {
  let rendered = props.children;
  yield {
    type: 'seperator',
    props: props,
    rendered,
  };
};

Separator.displayName = 'Separator';

export { Separator };
