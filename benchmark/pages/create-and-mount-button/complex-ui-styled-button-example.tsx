import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const GluestackStyledTest = dynamic(
    () => import('../../bench/create-and-mount-button/complex-ui-styled-button-example'),
    {
      ssr: false,
    }
  );

  return <GluestackStyledTest />;
};

export default CreateAndMountComponent;
