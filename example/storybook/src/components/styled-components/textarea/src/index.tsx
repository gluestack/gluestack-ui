import Input from './styled-components/Input';
import Root from './styled-components/Root';

import { createTextArea } from '@universa11y/textarea';

export const TextArea = createTextArea({
  Root,
  Input,
});
