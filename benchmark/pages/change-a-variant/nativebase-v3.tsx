import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/change-a-variant/nativebase-v3'), {
    ssr: false,
  });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
