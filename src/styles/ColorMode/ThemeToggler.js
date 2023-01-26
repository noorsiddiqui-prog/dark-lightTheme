// // import React from 'react';
// // import { IconButton, Box } from '@mui/material';
// // import { useTheme } from '@mui/material/styles';
// // // import { ColorModeContext } from 'config/color-context';
// // import { ColorModeContext } from './color-context';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// // export default function ThemeToggler() {
// //   const theme = useTheme();
// //   const colorMode = React.useContext(ColorModeContext);

// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         width: '100%',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         bgcolor: 'background.default',
// //         color: 'text.primary',
// //         borderRadius: 1,
// //         p: 3,
// //       }}
// //     >
// //       {theme.palette.mode} mode
// //       <IconButton
// //         sx={{ ml: 1 }}
// //         onClick={colorMode.toggleColorMode}
// //         color="inherit"
// //       >
// //         {theme.palette.mode === 'dark' ? (
// //           <Brightness7Icon />
// //         ) : (
// //           <Brightness4Icon />
// //         )}
// //       </IconButton>
// //     </Box>
// //   );
// // }





// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function ThemeToggler() {
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
//         p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }


// export default ThemeToggler;
