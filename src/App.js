import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//import { Calendar } from "@fullcalendar/core";
import Navigation from './scenes/Navigation';
import Home from './scenes/Home'
import Login from './scenes/Login'
//import Login from './scenes/Test'
import { AuthProvider } from "./scenes/api/AuthProvider";
import AppContent from "./AppContent";

// const App = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <main className="App">
//           <AppContent />
//         </main>
//       </AuthProvider>
//     </Router>
//   );
// };

const App = () => {

  return (
    <main className="App">
      <Login />
    </main>
    
  );
}
  // return 
  //     <BrowserRouter>
  //       <Navigation></Navigation>
  //       <Routes>
  //         <Route path="/" element={<Home/>}/>
  //         <Route path="/login" element={<Login/>}/>
  //       </Routes>
  //     </BrowserRouter>;
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  // return (
  //   <ColorModeContext.Provider value={colorMode}>
  //     <ThemeProvider theme={theme}>
  //       <CssBaseline />
  //       <div className="app">
  //         <Sidebar isSidebar={isSidebar} texAlign="right" />
  //         <main className="content">
  //           <Topbar setIsSidebar={setIsSidebar}/>
  //           <Routes>
  //             <Route path="/" element={<Dashboard />} />
  //             <Route path="/team" element={<Team />} />
  //             <Route path="/contacts" element={<Contacts />} />
  //             <Route path="/calendar" element={<Calendar />} />
  //             <Route path="/form" element={<Form />} />
  //             <Route path="/bar" element={<Bar />} />
  //             <Route path="/pie" element={<Pie />} />
  //             <Route path="/line" element={<Line />} />
  //             <Route path="/faq" element={<FAQ />} />
  //           </Routes>
  //         </main>
  //       </div>
  //     </ThemeProvider>
  //   </ColorModeContext.Provider>
  // );
//}

export default App;
