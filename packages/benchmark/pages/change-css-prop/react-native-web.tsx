import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const SCTest = dynamic(() => import('../../bench/change-css-prop/react-native-web'), { ssr: false });

  return <SCTest />;
};

export default CreateAndMountComponent;
