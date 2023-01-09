import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const GluestackStyledTest = dynamic(() => import('../../bench/create-and-mount-text/react-native-web'), {
    ssr: false,
  });

  return <GluestackStyledTest />;
};

export default CreateAndMountComponent;
