import React from 'react';

const MemoList = (props) => {
  const { memoList } = props;

  return (
    <div className="memo-list">
      {memoList.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  )
}

export default MemoList;