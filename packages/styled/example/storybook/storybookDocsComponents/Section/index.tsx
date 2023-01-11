import React from 'react';

import { Section as SectionMain } from './Section';
import { SectionTitle } from './SectionTitle';
import { SectionDescription } from './SectionDescription';
const SectionTemp = SectionMain as any;
SectionTemp.Title = SectionTitle;
SectionTemp.Description = SectionDescription;
const Section = SectionTemp;
export { Section };
