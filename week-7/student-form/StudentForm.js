import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    course: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', age: '', course: '' });
  };

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        /><br />

        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        /><br />

        <input
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
