import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const DankStyleStyledTest = dynamic(() => import('../../bench/create-and-mount-text/ui-styled'), {
    ssr: false,
  });

  return <DankStyleStyledTest />;
};

export default CreateAndMountComponent;
