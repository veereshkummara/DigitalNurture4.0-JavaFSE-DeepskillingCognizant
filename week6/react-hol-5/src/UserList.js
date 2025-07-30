import React from 'react';

function UserList(props) {
  const users = props.users;

  if (users.length === 0) {
    return <h3>No users found.</h3>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
