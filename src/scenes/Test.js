// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const baseURL = 'http://127.0.0.1:8000/api-token-auth/';
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(baseURL, {
//         username: username,
//         password: password,
//       });

//       // Assuming the response has a 'token' property
//       const token = response.data.token;

//       // Set token in localStorage
//       localStorage.setItem('authToken', token);

//       // Calculate expiration time (e.g., 1 hour from now)
//       const expirationTime = new Date().getTime() + 12 * 60 * 60 * 1000; // 1 hour
//       localStorage.setItem('tokenExpiration', expirationTime);

//       // Redirect or perform other actions upon successful login
//       // e.g., redirect to dashboard
//       window.location.href = '/dashboard';
//     } catch (error) {
//       console.error('Login failed', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

// YourMainComponent.js
import React from 'react';
import DepartmentList from './DepartmentList';
import { useAuth } from './api/AuthProvider';
import axios from "axios";

const FetchDepartments = () => {
  const { token, login, logout } = useAuth();

  // Example: passing the token with an axios request
  const fetchDepartments = async () => {
    try {
      const response = await axios.get('$baseURL/api/departments/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      // Handle the response
    } catch (error) {
      console.error('Error fetching departments', error);
    }
  };

  return (
    <div>
      <h1>FetchDepartments</h1>
      <p>Token: {token}</p>
      <button onClick={() => login('YOUR_NEW_TOKEN')}>Login with new token</button>
      <button onClick={logout}>Logout</button>
      <DepartmentList />
    </div>
  );
};

export default FetchDepartments;


