import React from 'react';
import {
  Card,
  Text,
  VStack,
  Heading,
  Button,
  ButtonText,
  Box,
  Image,
} from '@gluestack-ui/themed';

const ProductCard = () => {
  return (
    <Card p="$5" borderRadius="$lg" maxWidth={360}>
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
        Fashion Clothing
      </Text>
      <VStack mb="$6">
        <Heading size="md" fontFamily="$heading" mb="$4">
          Cotton Kurta
        </Heading>
        <Text size="sm" fontFamily="$heading">
          Floral embroidered notch neck thread work cotton kurta in white and
          black.
        </Text>
      </VStack>
      <Box
        flexDirection="column"
        sx={{
          '@sm': {
            flexDirection: 'row',
          },
        }}
      >
        <Button
          px="$4"
          py="$2"
          fontFamily="$heading"
          mr="$0"
          mb="$3"
          sx={{
            '@sm': {
              mr: '$3',
              mb: '$0',
              flex: 1,
            },
          }}
        >
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          px="$4"
          py="$2"
          variant="outline"
          fontFamily="$heading"
          borderColor="$borderLight300"
          $dark-borderColor="$backgroundDark600"
          sx={{
            '@sm': {
              flex: 1,
            },
          }}
        >
          <ButtonText
            size="sm"
            color="$textLight600"
            $dark-color="$textDark400"
          >
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
