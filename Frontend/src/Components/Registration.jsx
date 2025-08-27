import React from 'react';

function RegistrationForm({ role, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(`Registering as ${role}`);
    onClose(); // Close form after handling
  };

  return (
    <div className="modal">
      <h2>Register as {role}</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields based on role */}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" required />
        </div>
        {/* You can add more fields as necessary based on the role */}
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default RegistrationForm;
