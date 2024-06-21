import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [image, setImage] = useState(null);
  const [wishUrl, setWishUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/wishes/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setWishUrl(response.data.data.wishUrl);
    } catch (error) {
      console.error('Error creating wish:', error);
    }
  };

  return (
    <div>
      <h2>Create Birthday Wish</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        <button type="submit">Generate Wish URL</button>
      </form>
      {wishUrl && (
        <div>
          <p>Wish URL: {wishUrl}</p>
          <button onClick={() => navigator.clipboard.writeText(wishUrl)}>Copy URL</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;