import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const SCTest = dynamic(() => import('../../bench/create-and-mount-text/styled-components'), { ssr: false });

  return <SCTest />;
};

export default CreateAndMountComponent;
