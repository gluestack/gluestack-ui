// import React from 'react';
import { Select as SelectMain } from './Select';
import { SelectItem } from './SelectItem';
import type { ISelectComponentType } from './types';
const SelectTemp: any = SelectMain;
SelectTemp.Item = SelectItem;
const Select = SelectTemp as ISelectComponentType;
export { Select };
export { ISelectProps } from './types';
