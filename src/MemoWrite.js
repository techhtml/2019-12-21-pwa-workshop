import React from 'react';
import style from './MemoWrite.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const MemoWrite = () => (
  <div className={style.memoWrite}>
    <TextField className={style.input} label="Note Something" />
    <PrimaryButton>Submit</PrimaryButton>
  </div>
)

export default MemoWrite;