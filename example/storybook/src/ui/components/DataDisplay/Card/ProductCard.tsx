import React from 'react';
import {
  Card,
  Text,
  VStack,
  Heading,
  Button,
  ButtonText,
  ButtonGroup,
  Image,
} from '@gluestack-ui/themed';

const ProductCard = () => {
  return (
    <Card
      hardShadow={2}
      p="$5"
      borderRadius="$lg"
      maxWidth={360}
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <Image
        mb="$6"
        h={240}
        width="$full"
        borderRadius="$md"
        source={{
          uri: 'https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        }}
      />

      <Text
        fontSize="$sm"
        fontStyle="normal"
        fontFamily="$heading"
        fontWeight="$normal"
        lineHeight="$sm"
        mb="$2"
        sx={{
          color: '$textLight700',
          _dark: {
            color: '$textDark200',
          },
        }}
      >
        Nayaka
      </Text>
      <VStack gap="$4" mb="$6">
        <Heading size="md" fontFamily="$heading">
          Cotton Kurta
        </Heading>
        <Text size="sm" fontFamily="$heading">
          Floral embroidered notch neck thread work cotton kurta in white and
          black.
        </Text>
      </VStack>
      <ButtonGroup
        space="md"
        flexDirection="column"
        sx={{
          '@xs': {
            flexDirection: 'row',
          },
        }}
      >
        <Button px="$4" py="$2" flex={1} fontFamily="$heading">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          px="$4"
          py="$2"
          variant="outline"
          flex={1}
          fontFamily="$heading"
          borderColor="$borderLight300"
          $dark-borderColor="$backgroundDark600"
        >
          <ButtonText
            size="sm"
            color="$textLight600"
            $dark-color="$textDark400"
          >
            Wishlist
          </ButtonText>
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default ProductCard;
