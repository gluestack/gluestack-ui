import { Link, LinkText } from '@/components/ui/link';

export const KitchenSinkLink = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/apps/${children}`}
      isExternal
      className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block"
    >
      <LinkText className="text-typography-950 data-[hover=true]:text-typography-950 data-[active=true]:text-typography-950">
        {children}
      </LinkText>
    </Link>
  );
};
