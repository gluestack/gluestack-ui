import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Grid, GridItem } from '@/components/ui/grid';
import { Text } from '@/components/ui/text';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer props={{}} title={undefined}>
        {(props) => {
          return (
            <Grid className="gap-5" _extra={{ className: 'grid-cols-8' }}>
              <GridItem
                className="bg-background-50 p-6 rounded-md"
                _extra={{ className: 'col-span-3' }}
              />
              <GridItem
                className="bg-background-50 p-6 rounded-md"
                _extra={{ className: 'col-span-5' }}
              />
              <GridItem
                className="bg-background-50 p-6 rounded-md"
                _extra={{ className: 'col-span-6' }}
              />
              <GridItem
                className="bg-background-50 p-6 rounded-md"
                _extra={{ className: 'col-span-4' }}
              />
              <GridItem
                className="bg-background-50 p-6 rounded-md"
                _extra={{ className: 'col-span-4' }}
              />
            </Grid>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer
        props={{}}
        title={'Setting the gap between grid items'}
      >
        {(props) => {
          return (
            <Grid
              className="gap-4"
              _extra={{
                className: 'grid-cols-9',
              }}
            >
              <GridItem
                className="bg-background-50 p-3 rounded-md text-center"
                _extra={{
                  className: 'col-span-3',
                }}
              >
                <Text>A</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-3 rounded-md text-center"
                _extra={{
                  className: 'col-span-3',
                }}
              >
                <Text>B</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-3 rounded-md text-center"
                _extra={{
                  className: 'col-span-3',
                }}
              >
                <Text>C</Text>
              </GridItem>
            </Grid>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer
        props={{}}
        title={'Changing row and column gaps independently'}
      >
        {(props) => {
          return (
            <Grid
              className="gap-y-2 gap-x-4"
              _extra={{
                className: 'grid-cols-6',
              }}
            >
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-2',
                }}
              >
                <Text className="text-sm">01</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-2',
                }}
              >
                <Text className="text-sm">02</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-2',
                }}
              >
                <Text className="text-sm">03</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-2',
                }}
              >
                <Text className="text-sm">04</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-2',
                }}
              >
                <Text className="text-sm">05</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-2',
                }}
              >
                <Text className="text-sm">06</Text>
              </GridItem>
            </Grid>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Nested Grids'}>
        {(props) => {
          return (
            <Grid
              className="gap-3"
              _extra={{
                className: 'grid-cols-8',
              }}
            >
              <GridItem
                className="bg-background-50 p-3 rounded-md text-center"
                _extra={{
                  className: 'col-span-4',
                }}
              >
                <Text className="text-sm">01</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-3 rounded-md text-center"
                _extra={{
                  className: 'col-span-4',
                }}
              >
                <Text className="text-sm">02</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-3 rounded-md text-center"
                _extra={{
                  className: 'col-span-4',
                }}
              >
                <Grid
                  className="gap-5"
                  _extra={{
                    className: 'grid-cols-2',
                  }}
                >
                  <GridItem
                    className="bg-background-200 p-2 rounded-md"
                    _extra={{
                      className: 'col-span-1',
                    }}
                  >
                    <Text className="text-sm">1</Text>
                  </GridItem>
                  <GridItem
                    className="bg-background-200 p-2 rounded-md"
                    _extra={{
                      className: 'col-span-1',
                    }}
                  >
                    <Text className="text-sm">2</Text>
                  </GridItem>
                  <GridItem
                    className="bg-background-200 p-2 rounded-md"
                    _extra={{
                      className: 'col-span-1',
                    }}
                  >
                    <Text className="text-sm">3</Text>
                  </GridItem>
                  <GridItem
                    className="bg-background-200 p-2 rounded-md"
                    _extra={{
                      className: 'col-span-1',
                    }}
                  >
                    <Text className="text-sm">4</Text>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem
                className="bg-background-50 p-3 rounded-md text-center"
                _extra={{
                  className: 'col-span-4',
                }}
              >
                <Grid
                  className="gap-5"
                  _extra={{
                    className: 'grid-cols-4',
                  }}
                >
                  <GridItem
                    className="bg-background-200 p-2 rounded-md"
                    _extra={{
                      className: 'col-span-4',
                    }}
                  >
                    <Text className="text-sm">1</Text>
                  </GridItem>
                  <GridItem
                    className="bg-background-200 p-2 rounded-md"
                    _extra={{
                      className: 'col-span-4',
                    }}
                  >
                    <Text className="text-sm">2</Text>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Responsive Grids'}>
        {(props) => {
          return (
            <Grid
              className="gap-y-2 gap-x-4"
              _extra={{
                className: 'grid-cols-6',
              }}
            >
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-6 md:col-span-3 lg:col-span-2',
                }}
              >
                <Text className="text-sm">01</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-6 md:col-span-3 lg:col-span-2',
                }}
              >
                <Text className="text-sm">02</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-6 md:col-span-3 lg:col-span-2',
                }}
              >
                <Text className="text-sm">03</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-6 md:col-span-3 lg:col-span-2',
                }}
              >
                <Text className="text-sm">04</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-6 md:col-span-3 lg:col-span-2',
                }}
              >
                <Text className="text-sm">05</Text>
              </GridItem>
              <GridItem
                className="bg-background-50 p-4 rounded-md text-center"
                _extra={{
                  className: 'col-span-6 md:col-span-3 lg:col-span-2',
                }}
              >
                <Text className="text-sm">06</Text>
              </GridItem>
            </Grid>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
