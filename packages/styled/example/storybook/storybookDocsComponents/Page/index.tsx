import { Page as PageMain } from './Page';
import { Title } from './Title';
import { Description } from './Description';
const PageTemp = PageMain as any;
PageTemp.Title = Title;
PageTemp.Description = Description;
const Page = PageTemp;
export { Page };
