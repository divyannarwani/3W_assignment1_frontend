import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://3-w-assignment1-backend.vercel.app';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("ENTEred try block");
      const res = await axios.get(`${BASE_URL}/app/dashboard`, {
        headers: {
          username,
          password,
        },
      }); 
      if (res.data.success) {
        const userData = res.data.data
        navigate('/admin/dashboard', { state: { userData } });
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
