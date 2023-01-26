// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Card from "./Components/Card/Card";
// // import Home from "./Screens/Home";
// import Home2 from "./Screens/Home2";
// import Exchange from "./Screens/Exchange";

// function App() {
//   return (
//     <>
//       {/* <Home />; */}
//       {/* <Home2 /> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home2 />} />
//           <Route path="/exchange" element={<Exchange />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


// import React from 'react';
// import {
//   ThemeProvider,
//   createTheme,
//   responsiveFontSizes,
// } from '@mui/material/styles';
// import { deepmerge } from '@mui/utils';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { getDesignTokens,  getThemedComponents} from './styles/ColorMode/Theme';
// import { ColorModeContext } from './styles/ColorMode/color-context';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Card from "./Components/Card/Card";
// // import Home from "./Screens/Home";
// import Home2 from "./Screens/Home2";
// import Exchange from "./Screens/Exchange";
// import ThemeToggler from './styles/ColorMode/ThemeToggler';

// export default function App() {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//   const [mode, setMode] = React.useState();

//   React.useEffect(() => {
//     setMode(prefersDarkMode ? 'dark' : 'light');
//   }, [prefersDarkMode]);

//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     []
//   );

//   let theme = React.useMemo(
//     () =>
//       createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
//     [mode]
//   );

//   theme = responsiveFontSizes(theme);







//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         {/* <Home />; */}
//       {/* <Home2 /> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home2 />} />
//           <Route path="/exchange" element={<Exchange />} />
//         </Routes>
//       </BrowserRouter>
//       <ThemeToggler/>        
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }






import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Card from "./Components/Card/Card";
// import Home from "./Screens/Home";
import Home2 from "./Screens/Home2";
import Exchange from "./Screens/Exchange";
import { ColorModeContext } from "./styles/ColorMode/color-context"
import styles from "./App.module.sass";
import './styles/helpers.sass'
import { red, grey, deepOrange } from "@mui/material/colors";
import { ThemeModeButton } from './components/ThemeModeButton/ThemeModeButton';



// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyApp() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         // p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }

export default function App() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        // palette: {
        //   mode,
        // },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: red,
                divider: red[200],
                background: {
                  default: "#fff",
                  navbrclr: "#fff",
                  navbrclrIcon: "#e4e6eb",
                  finestNft: "#e4e6eb",
                  paper: "#010613",
                  walletHolder: "#e4e6eb",
                  topCreatorNftclr: "#e4e6eb",
                  sideBr: "#fff",
                  snakbarClr: "#232121",
                  fontClr: "#003452",
                  iconClr: "#003452",
                  iconClrUserList: "#003452",
                  dashBoardBtnClr: "#232121",
                  inputColor: "#fafafa",
                  fontClr2: "#5e5e5e",
                  fontClr3: "#010613",
                },
                bgGradient: "linear-gradient(to right, #003452 0%, #003452 51%, #004d79 100%)",
                typography: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }
            : {
                // palette values for dark mode
                primary: { main: "#010613" },
                secondary: { main: "#030a1d" },
                divider: "#010613",
                background: {
                  default: "#010613",
                  navbrclr: "#030a1d",
                  finestNft: "#030a1d",
                  navbrclrIcon: "#10151c",
                  paper: "#010613",
                  walletHolder: "#2f2f2f",
                  topCreatorNftclr: "#10151c",
                  sideBr: "#000000",
                  snakbarClr: "#00A2FD",
                  fontClr: "#00a2fd",
                  iconClr: "#fff",
                  iconClrUserList: "#fff",
                  dashBoardBtnClr: "#232121",
                  fontClr2: "#5e5e5e",
                  fontClr3: "#fff",
                },
                bgGradient: "linear-gradient(to right, #00a2fd 0%, #00a2fd 51%, #00b7fd 100%)",
                typography: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={
            <Box sx={{bgcolor: 'background.default'}}><Home2 /></Box>
           
           } />
           <Route path="/exchange" element={ <Box sx={{bgcolor: 'background.default'}}><Exchange /></Box>} />
         </Routes>
       </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}