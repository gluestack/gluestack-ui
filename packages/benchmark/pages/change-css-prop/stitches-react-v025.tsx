import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/change-css-prop/stitches-react-v025'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
