import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const DankStyleStyledTest = dynamic(
    () => import('../../bench/create-and-mount-button/complex-ui-styled-button-example'),
    {
      ssr: false,
    }
  );

  return <DankStyleStyledTest />;
};

export default CreateAndMountComponent;
