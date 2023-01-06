import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const SCTest = dynamic(() => import('../../bench/change-css-prop/nativebase-v3'), { ssr: false });

  return <SCTest />;
};

export default CreateAndMountComponent;
