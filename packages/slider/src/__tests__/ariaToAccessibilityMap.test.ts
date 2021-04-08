import { mapDomPropsToRN } from '../ariaToAccessibilityMap';

describe('mapDomPropsToRN', () => {
  test('it maps aria attributes to react native', () => {
    const props = {
      'aria-pressed': true,
      'aria-haspopup': 'list',
    };

    expect(mapDomPropsToRN(props)).toEqual({
      ...props,
      accessibilityPressed: true,
      accessibilityHasPopup: 'list',
    });
  });

  test('it converts dom props to RN props', () => {
    const props = {
      id: 'menu-#12',
      role: 'menu',
      tabIndex: 0,
    };

    expect(mapDomPropsToRN(props)).toEqual({
      ...props,

      nativeID: 'menu-#12',
      accessibilityRole: 'menu',
      focusable: true,
    });
  });
});
