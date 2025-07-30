import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setStudents([...students, name]);
      setName('');
    }
  };

  useEffect(() => {
    if (students.length > 0) {
      console.log(`New student added. Total: ${students.length}`);
      // Optional: alert("New student added");
    }
  }, [students]);

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h3>List of Students</h3>
      <ul>
        {students.map((student, index) => <li key={index}>{student}</li>)}
      </ul>
    </div>
  );
};

export default StudentList;
