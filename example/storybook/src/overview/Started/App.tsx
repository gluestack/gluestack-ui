import React from 'react';
import Fold2 from '../../components/Fold2';
import { communities } from './data';
import Community from './Community';
import Fold3 from '../../components/Fold3';

function App() {
  return (
    <>
      <Fold2 />
      <Community communities={communities} />
      <Fold3 />
    </>
  );
}

export default App;
