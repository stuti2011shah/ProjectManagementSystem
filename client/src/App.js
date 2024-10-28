import React, { useEffect, useState } from 'react';
import { Auth } from "./pages/Auth";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthService from './services/auth-service';
import Navbar from './components/navigationBar/Navbar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tickets from './pages/Tickets';
import Administration from './pages/Administration';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import AddProject from './components/projects/AddProject';
import ViewAllProjects from './components/projects/ViewAllProjects';
import ViewProject from './components/projects/ViewProject';
import PageNotFound from './components/others/PageNotFound';

export const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(AuthService.isAuthorized());

  useEffect(() => {
    setIsAuthorized(AuthService.isAuthorized());
  }, []);

  // Dynamically set the background color based on the active color mode
  const bgColor = useColorModeValue('white', 'gray.800'); // Light mode: white, Dark mode: dark gray

  return (
    <div>
      <BrowserRouter>
      
        {
          isAuthorized ? (
            <Flex w="100vw" minH="100vh" bg={bgColor}> {/* Set width to 100vw and min height */}
              <Navbar />
              <Flex flex="1" p={4} overflow="auto"> {/* Make sure content area is flexible */}
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />

                  <Route path="/projects" element={<Projects />}>
                    <Route path='add' element={<AddProject />} />
                    <Route path=':projectID'>
                      <Route path='edit' element={<AddProject />} />
                      <Route path='' element={<ViewProject />} />
                    </Route>
                    <Route path='' element={<ViewAllProjects />} />
                  </Route>

                  <Route path="/tickets" element={<Tickets />} />

                  <Route path="/administration" element={<Administration />} />
                  <Route path='*' element={<PageNotFound />} />
                </Routes>
              </Flex>
            </Flex>
          ) : (
            <Routes>
              <Route
                path="*"
                element={<Auth to="/" replace />}
              />
            </Routes>
          )
        }
      </BrowserRouter>
    </div>
  );
};
// import React, { useEffect, useState } from 'react';
// import { Auth } from "./pages/Auth";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import AuthService from './services/auth-service';
// import Navbar from './components/navigationBar/Navbar';
// import Dashboard from './pages/Dashboard';
// import Projects from './pages/Projects';
// import Tickets from './pages/Tickets';
// import Administration from './pages/Administration';
// import { Flex, useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
// import AddProject from './components/projects/AddProject';
// import ViewAllProjects from './components/projects/ViewAllProjects';
// import ViewProject from './components/projects/ViewProject';
// import PageNotFound from './components/others/PageNotFound';

// export const App = () => {
//   const [isAuthorized, setIsAuthorized] = useState(AuthService.isAuthorized());
  
//   const { toggleColorMode } = useColorMode(); // Add the hook to toggle color mode
//   const bgColor = useColorModeValue('white', 'gray.800'); // Background changes based on color mode
//   const textColor = useColorModeValue('black', 'white'); // Text color changes based on color mode

//   useEffect(() => {
//     setIsAuthorized(AuthService.isAuthorized());
//   }, []);

//   return (
//     <div>
//       <BrowserRouter>
//         {
//           isAuthorized ? (
//             <Flex w="100vw" minH="100vh" bg={bgColor} color={textColor}> {/* Set width to 100vw and min height */}
//               <Navbar />
//               <Flex flex="1" p={4} overflow="auto"> {/* Make sure content area is flexible */}
//                 <Routes>
//                   <Route exact path="/" element={<Dashboard />} />

//                   <Route path="/projects" element={<Projects />}>
//                     <Route path='add' element={<AddProject />} />
//                     <Route path=':projectID'>
//                       <Route path='edit' element={<AddProject />} />
//                       <Route path='' element={<ViewProject />} />
//                     </Route>
//                     <Route path='' element={<ViewAllProjects />} />
//                   </Route>

//                   <Route path="/tickets" element={<Tickets />} />
//                   <Route path="/administration" element={<Administration />} />
//                   <Route path='*' element={<PageNotFound />} />
//                 </Routes>
//               </Flex>
//               <Button onClick={toggleColorMode} position="fixed" bottom={4} right={4}>
//                 Toggle Dark Mode
//               </Button>
//             </Flex>
//           ) : (
//             <Routes>
//               <Route
//                 path="*"
//                 element={<Auth to="/" replace />}
//               />
//             </Routes>
//           )
//         }
//       </BrowserRouter>
//     </div>
//   );
// };

