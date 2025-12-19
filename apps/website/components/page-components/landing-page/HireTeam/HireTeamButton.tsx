'use client';
import { Button, ButtonText } from '@/components/ui/button';

export default function HireTeamButton() {
  return (
    <Button
      className="bg-white data-[hover=true]:bg-white/80 border border-gray-200 px-8 py-3 rounded-full text-base font-medium transition-colors duration-200"
      onPress={() => {
        window.open(
          'https://geekyants.com/hire?utm_source=gluestack.io&utm_medium=referral&utm_campaign=cross-partnership',
          '_blank'
        );
      }}
    >
      <ButtonText className="text-black data-[hover=true]:text-black">
        Book a Discovery Call
      </ButtonText>
    </Button>
  );
}

