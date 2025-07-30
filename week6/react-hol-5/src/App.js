import React from 'react';
import UserList from './UserList';

function App() {
  const userArray = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <UserList users={userArray} />
    </div>
  );
}

export default App;
