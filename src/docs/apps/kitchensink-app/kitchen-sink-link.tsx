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
      className="leading-6 font-body text-foreground underline underline-offset-4 decoration-foreground inline-block"
    >
      <LinkText className="text-foreground data-[hover=true]:text-foreground data-[active=true]:text-foreground">
        {children}
      </LinkText>
    </Link>
  );
};
