import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const DankStyleStyledTest = dynamic(() => import('../../bench/create-and-mount-button/react-native-web'), {
    ssr: false,
  });

  return <DankStyleStyledTest />;
};

export default CreateAndMountComponent;
