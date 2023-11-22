// import { createContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({});

//     return (
//         <AuthContext.Provider value={{ auth, setAuth }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext;

// AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('authToken') || null);

  export const login = (newToken) => {
    const navigate = useNavigate();
    const goToLogin = ()=>{
      // /sofa /login
      navigate('/login')
    }
    // setToken(newToken);

    // Store token in localStorage
    localStorage.setItem('authToken', newToken);

    // Calculate expiration time (e.g., 1 hour from now)
    const expirationTime = new Date().getTime() + 1 * 60 * 60 * 1000; // 1 hour
    localStorage.setItem('tokenExpiration', expirationTime);

    // window.location.href = '/dashboard';
    
  };

//   const logout = () => {
//     setToken(null);

//     // Remove token from localStorage
//     localStorage.removeItem('authToken');
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };