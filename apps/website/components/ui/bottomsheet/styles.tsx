import { tva } from '@gluestack-ui/nativewind-utils';

export const bottomSheetStyle = tva({
  base: 'w-full h-full',
});

export const bottomSheetContentStyle = tva({
  base: 'items-center rounded-t-3xl bg-background-0 p-6 web:pointer-events-auto',
});

export const bottomSheetBackdropStyle = tva({
  base: 'absolute inset-0 bg-background-950/40 web:cursor-default',
});

export const bottomSheetItemStyle = tva({
  base: 'p-3 flex-row items-center rounded-sm w-full disabled:opacity-40 web:pointer-events-auto disabled:cursor-not-allowed hover:bg-background-50 active:bg-background-100 focus:bg-background-100 web:focus-visible:bg-background-100 data-[focus-visible=true]:web:bg-background-100 data-[focus-visible=true]:web:outline-indicator-primary data-[focus-visible=true]:web:outline-1 data-[focus-visible=true]:web:outline data-[disabled=true]:web:cursor-not-allowed data-[disabled=true]:opacity-40',
});

export const bottomSheetItemTextStyle = tva({
  base: 'text-typography-700 font-normal font-body',
});

export const bottomSheetDragIndicatorStyle = tva({
  base: 'w-16 h-1 bg-background-400 rounded-full',
});

export const bottomSheetDragIndicatorWrapperStyle = tva({
  base: 'w-full items-center py-1',
});

export const bottomSheetScrollViewStyle = tva({
  base: 'w-full h-auto',
});

export const bottomSheetFlatListStyle = tva({
  base: 'w-full h-auto',
});

export const bottomSheetSectionListStyle = tva({
  base: 'w-full h-auto',
});

export const bottomSheetTextInputStyle = tva({
  base: 'text-typography-900 p-2 border-outline-300 border rounded',
});
