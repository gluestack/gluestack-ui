import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import React from 'react';

export const BlogTable = ({ children }: { children: React.ReactNode }) => (
  <Box className="w-full my-4 rounded-xl border border-border overflow-hidden">
    {children}
  </Box>
);

export const BlogTableHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => <Box className="bg-muted/50">{children}</Box>;

export const BlogTableBody = ({ children }: { children: React.ReactNode }) => (
  <Box>{children}</Box>
);

export const BlogTableRow = ({ children }: { children: React.ReactNode }) => (
  <Box className="flex-row border-b border-border last:border-b-0">
    {children}
  </Box>
);

export const BlogTableHeaderCell = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box className="flex-1 px-4 py-3">
    <Text className="text-sm font-semibold text-foreground">{children}</Text>
  </Box>
);

export const BlogTableCell = ({ children }: { children: React.ReactNode }) => (
  <Box className="flex-1 px-4 py-3">
    <Text className="text-sm text-foreground">{children}</Text>
  </Box>
);
