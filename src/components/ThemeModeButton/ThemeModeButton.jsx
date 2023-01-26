import React from 'react'
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../styles/ColorMode/color-context';
import { useContext } from 'react';



export const ThemeModeButton = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          // p: 3,
        }}
      >
        {/* {theme.palette.mode} mode */}
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
  )
}
