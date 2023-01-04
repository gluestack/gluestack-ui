import React from 'react';
import {
  VStack,
  HStack,
  Box,
  Text,
  InfoOutlineIcon,
  Pressable,
  Tooltip,
} from '@gluestack/ui';
const TableList = ({ props }: any) => {
  return (
    <VStack>
      {Object.keys(props).map((prop) => {
        return (
          <HStack
            borderBottomWidth={1}
            borderBottomColor="$trueGray200"
            alignItems="center"
          >
            <Box flexBasis="30%">
              <HStack py="15px" pr="20px" space="sm" alignItems="center">
                <code
                  style={{
                    color: '#7e22ce',
                    backgroundColor: '#faf5ff',
                    fontSize: '13.6px',
                  }}
                >
                  {prop}
                </code>
                <Tooltip
                  placement="top"
                  trigger={(triggerProps: any) => {
                    return (
                      <Pressable
                        {...triggerProps}
                        sx={{ style: { cursor: 'default' } }}
                      >
                        <InfoOutlineIcon
                          color="#404040"
                          height={15}
                          width={15}
                        />
                      </Pressable>
                    );
                  }}
                >
                  <Tooltip.Content
                    maxWidth={200}
                    flexWrap="wrap"
                    bg="transparent"
                  >
                    <Box
                      p={2}
                      borderRadius="$sm"
                      bg="$white"
                      sx={{
                        style: {
                          boxShadow:
                            '#0e121659 0px 10px 38px -10px, #0e121633 0px 10px 20px -15px',
                        },
                      }}
                    >
                      <Text color="$black" px="$2" py="$1" fontSize={12}>
                        {props[prop].description}
                      </Text>
                    </Box>
                  </Tooltip.Content>
                </Tooltip>
              </HStack>
            </Box>
            <Box flexBasis="50%">
              {Array.isArray(props[prop].Type) === false ? (
                <code
                  style={{
                    color: '#404040',
                    backgroundColor: '#f5f5f5',
                    fontSize: '13.6px',
                    whiteSpace: 'nowrap',
                    paddingLeft: '1px',
                    alignSelf: 'flex-start',
                  }}
                >
                  {props[prop].Type}
                </code>
              ) : (
                <HStack flexWrap="wrap">
                  {props[prop].Type.map((type, index) => {
                    return props[prop].Type.length - 1 === index ? (
                      <code
                        style={{
                          color: '#404040',
                          backgroundColor: '#f5f5f5',
                          fontSize: '13.6px',
                          whiteSpace: 'nowrap',
                          paddingLeft: '1px',
                        }}
                      >
                        {type}
                      </code>
                    ) : (
                      <>
                        <code
                          style={{
                            color: '#404040',
                            backgroundColor: '#f5f5f5',
                            fontSize: '13.6px',
                            whiteSpace: 'nowrap',
                            paddingLeft: '1px',
                          }}
                        >
                          {type} |
                        </code>
                      </>
                    );
                  })}
                </HStack>
              )}
            </Box>
            <Box flexBasis="30%">
              <code
                style={{
                  color: '#404040',
                  backgroundColor: '#f5f5f5',
                  fontSize: '13.6px',
                  whiteSpace: 'nowrap',
                  paddingLeft: '1px',
                  alignSelf: 'flex-start',
                }}
              >
                {props[prop].default}
              </code>
            </Box>
          </HStack>
        );
      })}
    </VStack>
  );
};
const ApiReference = ({ apiList }: any) => {
  const Props = Object.keys(apiList);

  return (
    <Box mb={55}>
      <Text
        color="$trueGray900"
        fontWeight="500"
        fontSize="27px"
        lineHeight="27px"
        mt={45}
        mb={10}
      >
        API Reference
      </Text>

      {Props &&
        Props.map((props) => {
          return (
            <VStack>
              <Text
                color="$trueGray900"
                fontWeight="500"
                fontSize="19px"
                lineHeight="23px"
                mt={45}
                mb={10}
              >
                {props}
              </Text>
              <Text
                fontWeight="400"
                fontSize="17px"
                lineHeight="27px"
                mb="15px"
                color="$trueGray700"
              >
                {apiList[props].description}
              </Text>
              <HStack borderBottomWidth={1} borderBottomColor="$muted200">
                <Text
                  color="trueGray800"
                  fontSize="13px"
                  fontWeight="400"
                  flexBasis="30%"
                  py="15px"
                  pr="20px"
                >
                  Prop
                </Text>

                <Text
                  color="trueGray800"
                  fontSize="13px"
                  fontWeight="400"
                  flexBasis="50%"
                  py="15px"
                  pr="20px"
                >
                  Type
                </Text>
                <Text
                  color="trueGray800"
                  fontSize="13px"
                  fontWeight="400"
                  flexBasis="20%"
                  py="15px"
                  pr="20px"
                >
                  Default
                </Text>
              </HStack>
              <TableList props={apiList[props].props} />
            </VStack>
          );
        })}
    </Box>
  );
};

export { ApiReference };
