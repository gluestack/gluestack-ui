import React from 'react';
import Fold2 from '../../components/Fold2';
import { communities } from './data';
import Community from './Community';

function App() {
  return (
    <>
      <Fold2 />
      <Community communities={communities} />
    </>
  );
}

export default App;
