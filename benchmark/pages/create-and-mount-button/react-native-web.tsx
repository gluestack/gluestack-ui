import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const GluestackStyledTest = dynamic(() => import('../../bench/create-and-mount-button/react-native-web'), {
    ssr: false,
  });

  return <GluestackStyledTest />;
};

export default CreateAndMountComponent;
