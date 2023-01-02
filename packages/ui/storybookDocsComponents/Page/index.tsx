import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { DynamicTyping } from '../DynamicTyping';
const Page = ({ title, description, componentName }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories title="Examples" />
      <DynamicTyping component={componentName} />
    </>
  );
};

export { Page };
