import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const App = () => (
  <div className="app">
    <PrimaryButton>Button</PrimaryButton>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
