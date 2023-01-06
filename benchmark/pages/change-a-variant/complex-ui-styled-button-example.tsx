import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/change-a-variant/complex-ui-styled-button-example'), {
    ssr: false,
  });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
