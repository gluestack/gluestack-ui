import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const SCTest = dynamic(() => import('../../bench/change-css-prop/ui-styled'), { ssr: false });

  return <SCTest />;
};

export default CreateAndMountComponent;
