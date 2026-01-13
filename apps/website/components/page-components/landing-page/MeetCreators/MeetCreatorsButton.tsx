'use client';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Link } from '@/components/ui/link';
import { ArrowRightIcon } from '@/components/ui/icon';

export default function MeetCreatorsButton({
  geekyantsLink,
}: {
  geekyantsLink: string;
}) {
  return (
    <HStack>
      <Link
        className="rounded-full focus-visible:outline-0 focus-visible:bg-accent/20"
        href={geekyantsLink}
        isExternal
      >
        <Button size="sm" focusable={false}>
          <ButtonText className="mr-1 no-underline">
            Visit GeekyAnts
          </ButtonText>
          <ButtonIcon className="w-4 h-4" as={ArrowRightIcon} />
        </Button>
      </Link>
    </HStack>
  );
}

