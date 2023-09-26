import { useState } from 'react';
import { useClipboard as useClipboardNative } from '@react-native-clipboard/clipboard';

export function useClipboard() {
  const [hasCopied, setHasCopied] = useState(false);
  const [value, setValue] = useClipboardNative();
  const onCopy = (copiedValue: string) => {
    setValue(copiedValue);
    setHasCopied(true);
  };
  return {
    value,
    onCopy,
    hasCopied,
  };
}
