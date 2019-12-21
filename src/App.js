import React, { useState } from 'react';
import MemoList from './MemoList';
import MemoWrite from './MemoWrite';

const App = () => {
  const [memoList, setMemoList] = useState([]);
  
  const addMemoList = (value) => {
    const id = memoList.length + 1;

    setMemoList([
      ...memoList,
      {
        id,
        value
      }
    ])
  }

  return (
    <div className="app">
      <MemoList memoList={memoList} />
      <MemoWrite addMemoList={addMemoList} />
    </div>
  )
}

export default App;