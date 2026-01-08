import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Image } from '@/components/ui/image'
import { Link, LinkText } from '@/components/ui/link'
import { HStack } from '@/components/ui/hstack'
import { Icon, ArrowRightIcon } from '@/components/ui/icon'
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import { VStack } from '@/components/ui/vstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Card className="w-80">
      <Heading size="md" className="mb-1">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  )
};

const ExampleCardWithImage = () => {
return (
      <Card className="p-5 rounded-lg max-w-[360px] m-3">
        <Image
        source={{
          uri: 'https://gluestack.github.io/public-blog-video-assets/yoga.png',
        }}
        className="mb-6 h-[240px] w-full rounded-md aspect-[263/240]"
        alt="image"
      />
      <Text
        className="text-sm font-normal mb-2 text-foreground/70"
      >
        May 15, 2023
      </Text>
      <Heading size="md" className="mb-4">
        The Power of Positive Thinking
      </Heading>
      <Link href="https://gluestack.io/" isExternal>
        <HStack className="items-center">
          <LinkText
            size="sm"
            className="font-semibold text-primary no-underline"
          >
            Read Blog
          </LinkText>
          <Icon
            as={ArrowRightIcon}
            size="sm"
            className="text-primary mt-0.5 ml-0.5"
          />
        </HStack>
      </Link>
    </Card>
)
};

const ExampleAdvancedComposition = () => {
return (
    <Card className="p-6 rounded-lg max-w-[360px] m-3">
      <Box className="flex-row">
        <Avatar className="mr-4">
          <AvatarFallbackText>JD</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://gluestack.github.io/public-blog-video-assets/camera.png',
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="md" className="mb-1">
            Jane Doe
          </Heading>
          <Text size="sm">
            janedoe@sample.com
          </Text>
        </VStack>
      </Box>
      <Box
        className="my-5 flex-row"
      >
        <VStack
          className="items-center flex-1 pb-0 border-r border-border/70"
        >
          <Heading size="xs">
            81
          </Heading>
          <Text size="xs">posts</Text>
        </VStack>
        <VStack
          className="items-center flex-1 py-0 border-r border-border/70"
        >
          <Heading size="xs">
            5,281
          </Heading>
          <Text size="xs">followers</Text>
        </VStack>
        <VStack
          className="items-center flex-1 pt-0"
        >
          <Heading size="xs">
            281
          </Heading>
          <Text size="xs">following</Text>
        </VStack>
      </Box>
      <Box
        className="mb-5 sm:mb-6 flex-row items-center justify-center"
      >
        <Image
          source={{
            uri: 'https://gluestack.github.io/public-blog-video-assets/parrot.png',
          }}
          className="rounded-md w-[45%] h-[140px] mb-0 mr-3 sm:w-[150px] sm:h-[154px]"
          alt="image"
        />
        <Image
          source={{
            uri: 'https://gluestack.github.io/public-blog-video-assets/dear.png',
          }}
          className="rounded-md w-[45%] h-[140px] sm:w-[150px] sm:h-[154px]"
          alt="image"
        />
      </Box>
      <Button className="py-2 px-4">
        <ButtonText size="sm">Follow</ButtonText>
      </Button>
    </Card>
)
};

const ExampleProductCard = () => {
return (
    <Card className="p-5 rounded-lg max-w-[360px] m-3">
      <Image
        source={{
          uri: 'https://gluestack.github.io/public-blog-video-assets/saree.png',
        }}
        className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
        alt="image"
      />
      <Text
        className="text-sm font-normal mb-2 text-foreground/70"
      >
        Fashion Clothing
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          Cotton Kurta
        </Heading>
        <Text size="sm">
          Floral embroidered notch neck thread work cotton kurta in white and
          black.
        </Text>
      </VStack>
      <Box
        className="flex-col sm:flex-row"
      >
        <Button
          className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
        >
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-border/70 sm:flex-1"
        >
          <ButtonText
            size="sm"
            className="text-foreground/60"
          >
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
)
};

const ExampleBlogCard = () => {
return (
    <Card className="p-5 rounded-lg max-w-[360px] m-3"
    >
      <Text className="text-sm font-normal mb-2 text-foreground/70"
      >
        May 15, 2023
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          The Power of Positive Thinking
        </Heading>
        <Text size="sm">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
      </VStack>
      <Box className="flex-row">
        <Avatar className="mr-3">
          <AvatarFallbackText>RR</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://gluestack.github.io/public-blog-video-assets/john.png',
            }}
            alt="image"
          />
        </Avatar>
        <VStack>
          <Heading size="sm" className="mb-1">
            John Smith
          </Heading>
          <Text size="sm">
            Motivational Speaker
          </Text>
        </VStack>
      </Box>
    </Card>
)
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "card-with-image",
    label: "Card with Image",
    content: <ExampleCardWithImage />,
  },
  {
    value: "advanced-composition",
    label: "Advanced Composition",
    content: <ExampleAdvancedComposition />,
  },
  {
    value: "product-card",
    label: "Product Card",
    content: <ExampleProductCard />,
  },
  {
    value: "blog-card",
    label: "Blog Card",
    content: <ExampleBlogCard />,
  }
];

export default function CardScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}