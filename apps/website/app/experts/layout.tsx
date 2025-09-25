import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hire Experts | gluestack-ui | GeekyAnts React Native Experts',
  description:
    'Hire GeekyAnts experts for your gluestack-ui and React Native projects. Get professional support, custom development, and UI/UX expertise from the team behind gluestack-ui.',
  openGraph: {
    title: 'Hire Experts | gluestack-ui | GeekyAnts React Native Experts',
    description:
      'Hire GeekyAnts experts for your gluestack-ui and React Native projects. Get professional support, custom development, and UI/UX expertise from the team behind gluestack-ui.',
    siteName: 'gluestack',
    url: 'https://gluestack.io/experts',
  },
};
export default function ExpertLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
