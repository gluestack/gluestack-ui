export const getLabel = (props: any) => {
  let label = props.accessibilityLabel ?? props['aria-label'];

  if (!label) {
    label = typeof props.label === 'string' ? props.label : undefined;
  }

  return label;
};
