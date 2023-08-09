import React from 'react';
import {
  Center,
  Heading,
  Box,
  Menu,
  HStack,
  RadioGroup,
  Checkbox,
  Radio,
  Button,
  ButtonText,
} from '../../../ui-components';

const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return <Heading {...props}>{text}</Heading>;
};

export default HeadingStory;

export {
  Center,
  Heading,
  Box,
  Menu,
  HStack,
  RadioGroup,
  Checkbox,
  Radio,
  Button,
  ButtonText,
};
