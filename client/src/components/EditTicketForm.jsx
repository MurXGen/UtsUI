import React, { useState } from 'react';

const EditTicketForm = ({ ticketData, setTicketData, setShowEdit }) => {
  const [formData, setFormData] = useState(ticketData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketData(formData);
    setShowEdit(false);
  };

  return (
    <div className="editTicketForm">
      <h3>Edit Ticket Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Source:</label>
        <input type="text" name="source" value={formData.source} onChange={handleChange} />

        <label>Destination:</label>
        <input type="text" name="destination" value={formData.destination} onChange={handleChange} />

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Booking Date:</label>
        <input type="text" name="bookingDate" value={formData.bookingDate} onChange={handleChange} />

        <label>Expiry Date:</label>
        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />

        <label>Price:</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} />

        <label>Class:</label>
        <input type="text" name="class" value={formData.class} onChange={handleChange} />

        <label>Train Type:</label>
        <input type="text" name="trainType" value={formData.trainType} onChange={handleChange} />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTicketForm;
