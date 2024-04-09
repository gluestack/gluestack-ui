import type { ComponentMeta } from '@storybook/react-native';
import SafeAreaViewStory from './SafeAreaView';

const SafeAreaViewMeta: ComponentMeta<typeof ScrollView> = {
  title: 'stories/React Native Components/SafeAreaView',
  component: SafeAreaViewStory,
};

export default SafeAreaViewMeta;

export { SafeAreaView };
