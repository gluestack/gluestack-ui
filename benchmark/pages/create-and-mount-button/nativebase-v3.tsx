import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const GluestackStyledTest = dynamic(() => import('../../bench/create-and-mount-button/nativebase-v3'), {
    ssr: false,
  });

  return <GluestackStyledTest />;
};

export default CreateAndMountComponent;
