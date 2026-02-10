import React from 'react';
import { measureRenders } from 'reassure';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Button, ButtonText } from '@/components/ui/button';

describe('Card Performance Tests', () => {

  it('Card rendering', async () => {
    await measureRenders(
      <GluestackUIProvider>
        {Array.from({ length: 1000 }).map((_, i) => (
          <Button>
            <ButtonText>Click me</ButtonText>
          </Button>
        ))}
      </GluestackUIProvider>
    );
  }, 30000);
});
