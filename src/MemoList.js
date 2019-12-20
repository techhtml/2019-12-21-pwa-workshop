import React from 'react';

const MemoDummyData = [
  {
    id: 0,
    title: "Hello"
  },
  {
    id: 1,
    title: "World"
  }
]

const MemoList = () => (
  <div className="memo-list">
    {MemoDummyData.map(item => (
      <div key={item.id}>{item.title}</div>
    ))}
  </div>
)

export default MemoList;