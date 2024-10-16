import React, { useState } from 'react';

const BASE_URL = 'http://localhost:8000';

const UserForm = () => {

  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMedia] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    console.log(name, socialMediaHandle);
    

    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);
    images.forEach((image) => formData.append('images', image));

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      await fetch(`${BASE_URL}/app/senddata`, {
        method: 'POST',
        body: formData,
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Social Media Handle"
        value={socialMediaHandle}
        onChange={(e) => setSocialMedia(e.target.value)}
      />
      <input
        type="file"
        multiple
        onChange={(e) => setImages([...e.target.files])}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
