import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const DankStyleStyledTest = dynamic(() => import('../../bench/create-and-mount-text/nativebase-v3'), {
    ssr: false,
  });

  return <DankStyleStyledTest />;
};

export default CreateAndMountComponent;
