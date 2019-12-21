import React, { useState } from 'react';
import style from './MemoWrite.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const MemoWrite = (props) => {
  const { addMemoList } = props;
  const [ memo, setMemo ] = useState('');

  const handleInput = (e) => {
    setMemo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addMemoList(memo);
    setMemo('');
  }
  
  return (
    <div className={style.memoWrite}>
      <form onSubmit={handleSubmit}>
        <TextField className={style.input} label="Note Something" defaultValue={memo} value={memo} onChange={handleInput} />
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  )
}

export default MemoWrite;