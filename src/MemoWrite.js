import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const MemoWrite = () => (
  <div className="memo-write">
    <TextField label="Note Something" />
    <PrimaryButton>Submit</PrimaryButton>
  </div>
)

export default MemoWrite;