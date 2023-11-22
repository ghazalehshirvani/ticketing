// import { useRef, useState, useEffect } from 'react';

// 


// const Login = () => {
//   const { login } = useAuth(); // Use the useAuth hook to access authentication functions
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState('');
//   const [pwd, setPwd] = useState('');
//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg('');
//   }, [user, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ user, pwd }),
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true,
//         }
//       );
//       console.log(JSON.stringify(response?.data));
//       const accessToken = response?.data?.accessToken;
//       const roles = response?.data?.roles;
//       login(accessToken); // Use the login function from useAuth
//       setUser('');
//       setPwd('');
//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg('No Server Response');
//       } else if (err.response?.status === 400) {
//         setErrMsg('Missing Username or Password');
//       } else if (err.response?.status === 401) {
//         setErrMsg('Unauthorized');
//       } else {
//         setErrMsg('Login Failed');
//       }
//       errRef.current.focus();
//     }
//   };

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>You are logged in!</h1>
//           <br />
//           <p>
//             <a href="#">Go to Home</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? 'errmsg' : 'offscreen'}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <h1>Sign In</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               ref={userRef}
//               autoComplete="off"
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               required
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               onChange={(e) => setPwd(e.target.value)}
//               value={pwd}
//               required
//             />
//             <button>Sign In</button>
//           </form>
//           <p>
//             Need an Account?<br />
//             <span className="line">
//               {/*put router link here*/}
//               <a href="#">Sign Up</a>
//             </span>
//           </p>
//         </section>
//       )}
//     </>
//   );
// };

// export default Login;


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from './api/AuthProvider'; // Import the useAuth hook
import {baseURL} from './api/axios';
//import "./Login.css"
// import "../index.css"

const LOGIN_URL = 'http://127.0.0.1:8000/api-token-auth/';


const defaultTheme = createTheme();

export default function SignIn() {

  // const { login } = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      // Replace this with your actual API endpoint for login
      const response = await fetch( LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Referrer-Policy': 'same-origin',
         
        },
        body: JSON.stringify({
          email: data.get('email'),
          password: data.get('password'),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        const accessToken = result.accessToken;

        // Call the login function from AuthContext
        login(accessToken);

        // Handle successful login, redirect, etc.
      } else {
        // Handle login failure
        console.error('Login failed');
        // console.log(response.json());
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="نام کاربری"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{direction: "rtl"}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{direction: "rtl"}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="من را بخاطر بسپار"
              sx={{ flexDirection: 'row-reverse', textAlign: 'right', }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ثبت نام
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" textAlign={'right'}>
                  رمز عبور خود را فراموش کرده ام.
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"ثبت نام"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

