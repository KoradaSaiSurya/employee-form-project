// frontend/src/EmployeeForm.js
import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);

    try {
      const response = await fetch('http://localhost:5000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text(); // or .json() if backend returns JSON
      console.log("Response:", result);
      alert("Employee details saved!");
      setFormData({ name: '', email: '', phone: '', city: '' });
    } catch (err) {
      console.error("Error while saving:", err);
      alert("Error saving data");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1><b>Employee Details Form</b></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: 
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <div>
          <label>Email: 
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <div>
          <label>Phone: 
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <div>
          <label>City: 
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
