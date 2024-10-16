import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation();
  console.log("entered new compnonet:-\n", location);
  const userData = location.state?.userData || []; // Get the passed userData from the navigate state
  console.log("the data i got", userData);
  console.log("length:- ", userData.length);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {userData.length > 0 ? (
        <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Social Media Handle</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.socialMediaHandle}</td>
                <td>
                  {user.images && user.images.map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      alt={`User ${user.name}`} 
                      style={{ height: '30px', marginRight: '5px' }} 
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default AdminDashboard;
