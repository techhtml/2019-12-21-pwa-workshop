import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import MemoList from './MemoList';

const App = () => (
  <div className="app">
    <MemoList />
    <PrimaryButton>Button</PrimaryButton>
  </div>
)

export default App;