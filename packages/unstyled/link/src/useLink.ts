import { Linking, Platform } from 'react-native';
import type { IUseLinkProp } from './types';
import type { AccessibilityRole } from 'react-native';

const linkToHREF = (URL: string) => {
  Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
};

const addOnPressFunctionality = (href: string | any, callback: any) => {
  href ? linkToHREF(href) : '';
  callback ? callback() : () => {};
};

export function useLink(props: IUseLinkProp) {
  const { href, isExternal, onPress, _ref } = props;

  let platformLinkProps = {};

  if (Platform.OS === 'web') {
    platformLinkProps = {
      href,
      onPress: onPress,
    };
    // Adding target to a tag created by RN-Web
    if (isExternal && _ref.current) {
      _ref.current.target = '_blank';
      _ref.current.rel = 'noopener';
    }
  } else {
    platformLinkProps = {
      onPress: () => {
        addOnPressFunctionality(href, onPress);
      },
    };
  }

  return {
    linkProps: {
      ...platformLinkProps,
      role: 'link' as AccessibilityRole,
      accessible: true,
    },
  };
}
