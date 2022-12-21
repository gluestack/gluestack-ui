import React from 'react';
import {
  Button,
  Actionsheet,
  Text,
  Center,
  AddIcon,
  PlayIcon,
  ShareIcon,
  DeleteIcon,
  FavouriteIcon,
  CloseIcon,
  Box,
} from '@gluestack/ui';
import Wrapper from './../Wrapper';

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log('hello here');
  return (
    <Wrapper>
      <Center>
        <Button onPress={() => setIsOpen(true)}>
          <Button.Text>Open</Button.Text>
        </Button>
      </Center>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Actionsheet.Content>
          <Actionsheet.DragIndicator />
          <Box sx={{ style: { w: '100%', pb: '$2' } }}>
            <Text sx={{ style: { fontSize: 16, color: '$gray500' } }}>
              Albums
            </Text>
          </Box>

          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <ShareIcon sx={{ style: { h: 16, w: 16 } }} />
            <Text sx={{ style: { fontSize: 18 } }}>Share</Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <PlayIcon sx={{ style: { h: 16, w: 16 } }} />
            <Text sx={{ style: { fontSize: 18 } }}>Play</Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <DeleteIcon sx={{ style: { h: 16, w: 16 } }} />
            <Text sx={{ style: { fontSize: 18 } }}>Delete</Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <FavouriteIcon sx={{ style: { h: 16, w: 16 } }} />
            <Text sx={{ style: { fontSize: 18 } }}>Favourite</Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <CloseIcon sx={{ style: { h: 16, w: 16 } }} />
            <Text sx={{ style: { fontSize: 18 } }}>Cancel</Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
};
