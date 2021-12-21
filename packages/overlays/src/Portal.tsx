import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type OverlayItem = {
  id: number;
  node: ReactNode;
};

interface PortalContext {
  items: Array<OverlayItem>;
  setOverlayItem: (node: ReactNode) => number;
  removeOverlayItem: (id: number) => void;
  updateOverlayItem: (id: number, node: ReactNode) => void;
}

interface ModalProviderProps extends ViewProps {
  children: ReactNode;
  provider?: boolean;
}

const PortalContext = React.createContext<PortalContext | null>(null);

let globalOverlayCounter = 0;

export function PortalProvider(props: { children: ReactNode }) {
  const [items, setItems] = React.useState<Array<OverlayItem>>([]);

  const setOverlayItem = (item: ReactNode) => {
    const overlayId = ++globalOverlayCounter;
    setItems((prev) => prev.concat([{ id: overlayId, node: item }]));
    return overlayId;
  };

  const updateOverlayItem = (id: number, node: ReactNode) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { id, node };
        }
        return item;
      })
    );
  };

  const removeOverlayItem = (id: number) => {
    setItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      return newItems;
    });
  };

  return (
    <PortalContext.Provider
      value={{ items, setOverlayItem, removeOverlayItem, updateOverlayItem }}
    >
      {props.children}

      {/* Render Overlays */}
      {items.map((item) => {
        return <React.Fragment key={item.id}>{item.node}</React.Fragment>;
      })}
    </PortalContext.Provider>
  );
}

function OverlayView({style, ...props}: ModalProviderProps) {
  return (
    <View
      pointerEvents="box-none"
      style={[StyleSheet.absoluteFill, style]}
      collapsable={false}
      {...props}
    />
  );
}

export const OverlayProvider = PortalProvider;

export function OverlayContainer(props: ModalProviderProps) {
  const context = usePortalProvider();
  const overlayId = React.useRef<number | undefined>(undefined);
  let contents = <OverlayView {...props} />;

  useEffect(
    () => {
      // Mount
      if (overlayId.current === undefined) {
        overlayId.current = context?.setOverlayItem(contents);
      }
      // Update
      else {
        if (overlayId.current) {
          context?.updateOverlayItem(overlayId.current, contents);
        }
      }
    },
    // To re-render the child
    [props]
  );

  // Unmount
  useEffect(() => {
    return () => {
      if (overlayId.current) {
        context?.removeOverlayItem(overlayId.current);
      }
    };
  }, []);

  return null;
}

function usePortalProvider() {
  const context = React.useContext(PortalContext);
  return context;
}
