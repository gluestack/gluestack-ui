import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';

export function useClipboard() {
  const [hasCopied, setHasCopied] = useState(false);
  const [value, setValue] = useState('');
  const onCopy = async (copiedValue: string) => {
    if (Clipboard) {
      await Clipboard.setStringAsync(copiedValue);
    }
    setValue(copiedValue);
    setHasCopied(true);
  };
  return {
    value,
    onCopy,
    hasCopied,
  };
}
